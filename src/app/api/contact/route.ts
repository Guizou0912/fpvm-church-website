import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactMessages } from '@/db/schema';
import { like, or, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');

    let query = db.select().from(contactMessages);
    
    if (search) {
      query = query.where(
        or(
          like(contactMessages.fullName, `%${search}%`),
          like(contactMessages.email, `%${search}%`),
          like(contactMessages.subject, `%${search}%`)
        )
      );
    }

    const results = await query
      .orderBy(desc(contactMessages.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const fullName = body.fullName?.toString().trim();
    const email = body.email?.toString().trim().toLowerCase();
    const phone = body.phone?.toString().trim() || null;
    const subject = body.subject?.toString().trim();
    const message = body.message?.toString().trim();

    if (!fullName) {
      return NextResponse.json(
        { error: "Full name is required", code: "MISSING_FULL_NAME" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "Email is required", code: "MISSING_EMAIL" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format", code: "INVALID_EMAIL" },
        { status: 400 }
      );
    }

    if (!subject) {
      return NextResponse.json(
        { error: "Subject is required", code: "MISSING_SUBJECT" },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { error: "Message is required", code: "MISSING_MESSAGE" },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();

    const newMessage = await db.insert(contactMessages)
      .values({
        fullName,
        email,
        phone,
        subject,
        message,
        createdAt: now,
        updatedAt: now
      })
      .returning();

    return NextResponse.json(newMessage[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}
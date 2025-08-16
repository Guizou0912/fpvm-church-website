"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ComprehensiveContactForm = () => {
  return (
    <section className="relative mx-2 sm:mx-2.5 lg:mx-4 mt-2.5 rounded-t-2xl rounded-b-[24px] sm:rounded-b-[36px] bg-gradient-to-b from-blue-50/80 via-white to-white py-16 sm:py-24 lg:py-32">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary font-display leading-tight">
          Contactez-Nous
        </h1>
        <p className="mt-3 sm:mt-4 text-center leading-snug font-medium text-text-secondary lg:mx-auto max-w-2xl text-sm sm:text-base lg:text-lg px-4">
          Nous sommes là pour vous accueillir et répondre à vos questions
        </p>
        
        {/* Contact Information Grid */}
        <div className="mt-8 sm:mt-10 md:mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="backdrop-blur-md bg-white/90 p-4 sm:p-6 rounded-xl shadow-sm border border-white/20">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary text-sm sm:text-base">Adresse</h3>
            </div>
            <p className="text-text-secondary leading-relaxed text-xs sm:text-sm">
              FPVM Analamahitsy<br />
              Antananarivo<br />
              Madagascar
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/90 p-4 sm:p-6 rounded-xl shadow-sm border border-white/20">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary text-sm sm:text-base">Téléphone</h3>
            </div>
            <p className="text-text-secondary text-xs sm:text-sm">
              +261 XX XX XXX XX
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/90 p-4 sm:p-6 rounded-xl shadow-sm border border-white/20">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary text-sm sm:text-base">Email</h3>
            </div>
            <p className="text-text-secondary text-xs sm:text-sm break-all">
              contact@fpvm-analamahitsy.mg
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/90 p-4 sm:p-6 rounded-xl shadow-sm border border-white/20">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-text-primary text-sm sm:text-base">Horaires d'accueil</h3>
            </div>
            <p className="text-text-secondary text-xs leading-relaxed">
              Lundi-Vendredi 8h-17h<br />
              Samedi 8h-12h
            </p>
          </div>
        </div>

        <DashedLine className="my-8 sm:my-12" />
        
        {/* Contact Form */}
        <div className="mx-auto backdrop-blur-md bg-white/90 p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm border border-white/20">
          <h2 className="text-base sm:text-lg font-semibold text-text-primary mb-1 sm:mb-2">Envoyez-nous un message</h2>
          <p className="text-text-secondary mb-6 sm:mb-8 text-sm sm:text-base">Nous vous répondrons dans les plus brefs délais</p>
          
          <form className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1 sm:space-y-2">
                <Label className="text-text-primary text-sm">Nom complet</Label>
                <Input 
                  placeholder="Votre nom et prénom" 
                  className="backdrop-blur-sm bg-white/70 border-white/30 focus:border-primary/50 h-10 sm:h-11"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <Label className="text-text-primary text-sm">Email</Label>
                <Input 
                  placeholder="votre@email.com" 
                  type="email" 
                  className="backdrop-blur-sm bg-white/70 border-white/30 focus:border-primary/50 h-10 sm:h-11"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1 sm:space-y-2">
                <Label className="text-text-primary text-sm">
                  Téléphone{" "}
                  <span className="text-text-secondary">(optionnel)</span>
                </Label>
                <Input 
                  placeholder="+261 XX XX XXX XX" 
                  className="backdrop-blur-sm bg-white/70 border-white/30 focus:border-primary/50 h-10 sm:h-11"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <Label className="text-text-primary text-sm">Sujet</Label>
                <Select>
                  <SelectTrigger className="backdrop-blur-sm bg-white/70 border-white/30 focus:border-primary/50 h-10 sm:h-11">
                    <SelectValue placeholder="Choisissez un sujet" />
                  </SelectTrigger>
                  <SelectContent className="backdrop-blur-md bg-white/95">
                    <SelectItem value="information">Demande d'information</SelectItem>
                    <SelectItem value="priere">Prière</SelectItem>
                    <SelectItem value="visite">Visite pastorale</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <Label className="text-text-primary text-sm">Message</Label>
              <Textarea
                placeholder="Votre message..."
                className="min-h-[100px] sm:min-h-[120px] resize-none backdrop-blur-sm bg-white/70 border-white/30 focus:border-primary/50"
              />
            </div>
            
            <div className="flex justify-end">
              <Button size="lg" type="submit" className="bg-primary hover:bg-primary/90 text-white shadow-sm w-full sm:w-auto">
                Envoyer le message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ]
        )}
      />
    </div>
  );
};

export { ComprehensiveContactForm };
"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  Heart,
  Church,
  Users,
  Target,
  CreditCard,
  Smartphone,
  Building2,
  Mail,
  Phone,
  MapPin,
  Check,
  ArrowRight,
  Banknote
} from 'lucide-react';

interface DonationFormData {
  amount: string;
  paymentMethod: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function DonationPage() {
  const searchParams = useSearchParams();
  const preselectedAmount = searchParams.get('amount');
  
  const [selectedAmount, setSelectedAmount] = useState<string>(preselectedAmount || '');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<DonationFormData>({
    amount: '',
    paymentMethod: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (preselectedAmount) {
      setSelectedAmount(preselectedAmount);
      setFormData(prev => ({ ...prev, amount: preselectedAmount }));
    }
  }, [preselectedAmount]);

  const donationAmounts = [
    { value: '50000', label: '50 000 Ar' },
    { value: '100000', label: '100 000 Ar' },
    { value: '250000', label: '250 000 Ar' },
    { value: '500000', label: '500 000 Ar' },
    { value: '1000000', label: '1 000 000 Ar' }
  ];

  const paymentMethods = [
    { value: 'mobile', label: 'Mobile Money', icon: Smartphone },
    { value: 'bank', label: 'Virement bancaire', icon: Building2 },
    { value: 'card', label: 'Carte bancaire', icon: CreditCard },
    { value: 'cash', label: 'Espèces', icon: Banknote }
  ];

  const currentAmount = 15000000;
  const targetAmount = 50000000;
  const progressPercentage = (currentAmount / targetAmount) * 100;

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setFormData(prev => ({ ...prev, amount }));
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount('');
    setFormData(prev => ({ ...prev, amount: value }));
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
    setFormData(prev => ({ ...prev, paymentMethod: method }));
  };

  const handleInputChange = (field: keyof DonationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    const finalAmount = customAmount || selectedAmount;
    return !!(
      finalAmount &&
      paymentMethod &&
      formData.name &&
      formData.email &&
      formData.phone
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const finalAmount = customAmount || selectedAmount;
    const submissionData = {
      ...formData,
      amount: finalAmount,
      paymentMethod
    };

    console.log('Donation submitted:', submissionData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg border-0 shadow-2xl">
            <CardContent className="text-center p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Merci pour votre générosité !
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Votre don contribuera à la construction de notre nouvelle église.
                Vous recevrez bientôt une confirmation par email avec les détails
                de votre contribution.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Faire un autre don
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-white/80 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Church className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Construisons Ensemble
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Notre Maison de Dieu
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Rejoignez-nous dans ce projet sacré de construction de notre nouvelle église.
              Chaque contribution, petite ou grande, nous rapproche de notre objectif
              et renforce notre communauté dans la foi.
            </p>
            
            {/* Progress Tracker */}
            <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Target className="w-5 h-5" />
                    <span className="font-medium">Objectif: 50 000 000 Ar</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">Collecté: 15 000 000 Ar</span>
                  </div>
                </div>
                <Progress value={progressPercentage} className="h-3 mb-4" />
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>147 donateurs</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {Math.round(progressPercentage)}% atteint
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Donation Details */}
              <div className="space-y-8">
                {/* Amount Selection */}
                <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Heart className="w-6 h-6 text-red-500" />
                      Choisissez votre don
                    </CardTitle>
                    <CardDescription>
                      Sélectionnez un montant ou entrez le montant de votre choix
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-3">
                      {donationAmounts.map((amount) => (
                        <Button
                          key={amount.value}
                          type="button"
                          variant={selectedAmount === amount.value ? "default" : "outline"}
                          className={`h-14 text-lg transition-all duration-300 ${
                            selectedAmount === amount.value
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg scale-105'
                              : 'hover:scale-105 hover:shadow-md'
                          }`}
                          onClick={() => handleAmountSelect(amount.value)}
                        >
                          {amount.label}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="relative">
                      <Label htmlFor="custom-amount" className="text-sm font-medium text-gray-700">
                        Montant personnalisé (Ariary)
                      </Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Entrez votre montant"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="mt-2 h-12 text-lg"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <CreditCard className="w-6 h-6 text-green-600" />
                      Mode de paiement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={handlePaymentMethodChange}>
                      <div className="grid grid-cols-1 gap-4">
                        {paymentMethods.map((method) => {
                          const IconComponent = method.icon;
                          return (
                            <div
                              key={method.value}
                              className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                                paymentMethod === method.value
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                              onClick={() => handlePaymentMethodChange(method.value)}
                            >
                              <RadioGroupItem value={method.value} id={method.value} />
                              <IconComponent className="w-5 h-5 text-gray-600" />
                              <Label htmlFor={method.value} className="flex-1 cursor-pointer font-medium">
                                {method.label}
                              </Label>
                            </div>
                          );
                        })}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Donor Information */}
              <div className="space-y-8">
                <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Users className="w-6 h-6 text-purple-600" />
                      Vos informations
                    </CardTitle>
                    <CardDescription>
                      Ces informations nous permettront de vous remercier et de vous tenir informé
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Votre nom complet"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="mt-2 h-12"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-2 h-12"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+261 XX XX XXX XX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-2 h-12"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message (optionnel)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Laissez un message d'encouragement ou une prière..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-2 min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={!validateForm()}
                >
                  Faire un don
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Besoin d'aide ou d'informations ?
              </h2>
              <p className="text-gray-600 text-lg">
                Notre équipe est là pour répondre à toutes vos questions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Téléphone</h3>
                  <p className="text-gray-600">+261 XX XX XXX XX</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">contact@eglise.mg</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Adresse</h3>
                  <p className="text-gray-600">Antananarivo, Madagascar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
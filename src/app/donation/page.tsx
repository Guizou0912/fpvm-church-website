"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  Church, 
  Users, 
  Building, 
  Phone, 
  Mail, 
  CreditCard, 
  Smartphone, 
  Banknote,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

interface DonorInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface DonationForm {
  amount: number;
  type: string;
  paymentMethod: string;
  donor: DonorInfo;
}

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [donorInfo, setDonorInfo] = useState<DonorInfo>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const predefinedAmounts = [10000, 25000, 50000, 100000];
  const currentProgress = 65; // 65% funded
  const goalAmount = 500000000; // 500M Ariary
  const currentAmount = 325000000; // 325M Ariary

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];
    
    const finalAmount = selectedAmount || parseInt(customAmount) || 0;
    if (finalAmount < 1000) {
      newErrors.push('Le montant minimum est de 1 000 Ariary');
    }
    
    if (!donationType) {
      newErrors.push('Veuillez sélectionner un type de don');
    }
    
    if (!paymentMethod) {
      newErrors.push('Veuillez sélectionner une méthode de paiement');
    }
    
    if (!donorInfo.name.trim()) {
      newErrors.push('Le nom est requis');
    }
    
    if (!donorInfo.email.trim() || !/\S+@\S+\.\S+/.test(donorInfo.email)) {
      newErrors.push('Une adresse email valide est requise');
    }
    
    if (!donorInfo.phone.trim()) {
      newErrors.push('Le numéro de téléphone est requis');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-MG', {
      style: 'currency',
      currency: 'MGA',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="backdrop-blur-lg bg-white/30 border-white/20 shadow-2xl">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Merci pour votre générosité !
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Votre don de {formatCurrency(selectedAmount || parseInt(customAmount) || 0)} a été reçu avec gratitude. 
                  Vous recevrez bientôt les instructions de paiement par email.
                </p>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Faire un autre don
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-violet-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Church className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Soutenez Notre Mission
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              FPVM FR-MG TENY FIAINANA ANALAMAHITSY
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
              Votre générosité nous aide à construire un lieu de culte moderne et à développer 
              nos ministères pour servir notre communauté grandissante.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Donation Form */}
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-lg bg-white/40 border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  Faire un don
                </CardTitle>
                <CardDescription>
                  Chaque contribution compte pour l'avancement de l'œuvre de Dieu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Error Messages */}
                  {errors.length > 0 && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        <ul className="list-disc list-inside space-y-1">
                          {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Amount Selection */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Montant du don (Ariary)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={selectedAmount === amount ? "default" : "outline"}
                          onClick={() => handleAmountSelect(amount)}
                          className="h-12 transition-all duration-200 hover:scale-105"
                        >
                          {formatCurrency(amount)}
                        </Button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount">Montant personnalisé</Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Entrez votre montant"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="backdrop-blur-sm bg-white/50"
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Donation Type */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Type de don</Label>
                    <RadioGroup value={donationType} onValueChange={setDonationType}>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/20 transition-colors">
                        <RadioGroupItem value="construction" id="construction" />
                        <Label htmlFor="construction" className="flex items-center gap-2 cursor-pointer">
                          <Building className="w-4 h-4" />
                          Construction de l'église
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/20 transition-colors">
                        <RadioGroupItem value="ministry" id="ministry" />
                        <Label htmlFor="ministry" className="flex items-center gap-2 cursor-pointer">
                          <Users className="w-4 h-4" />
                          Ministères et programmes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/20 transition-colors">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general" className="flex items-center gap-2 cursor-pointer">
                          <Church className="w-4 h-4" />
                          Fonds général
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Vos informations</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          value={donorInfo.name}
                          onChange={(e) => setDonorInfo(prev => ({ ...prev, name: e.target.value }))}
                          className="backdrop-blur-sm bg-white/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={donorInfo.email}
                          onChange={(e) => setDonorInfo(prev => ({ ...prev, email: e.target.value }))}
                          className="backdrop-blur-sm bg-white/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        value={donorInfo.phone}
                        onChange={(e) => setDonorInfo(prev => ({ ...prev, phone: e.target.value }))}
                        className="backdrop-blur-sm bg-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea
                        id="message"
                        value={donorInfo.message}
                        onChange={(e) => setDonorInfo(prev => ({ ...prev, message: e.target.value }))}
                        className="backdrop-blur-sm bg-white/50"
                        rows={3}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Méthode de paiement</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/20 transition-colors">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <Label htmlFor="mobile" className="flex items-center gap-2 cursor-pointer">
                          <Smartphone className="w-4 h-4" />
                          Mobile Money (Orange Money, MVola)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/20 transition-colors">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer">
                          <CreditCard className="w-4 h-4" />
                          Virement bancaire
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/20 transition-colors">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer">
                          <Banknote className="w-4 h-4" />
                          Espèces (à l'église)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Traitement en cours...
                      </>
                    ) : (
                      'Confirmer le don'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Construction Progress */}
            <Card className="backdrop-blur-lg bg-white/40 border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Progression de la construction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {currentProgress}%
                  </div>
                  <Progress value={currentProgress} className="h-3 mb-4" />
                  <div className="text-sm text-gray-600">
                    {formatCurrency(currentAmount)} collectés sur {formatCurrency(goalAmount)}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Section */}
            <Card className="backdrop-blur-lg bg-white/40 border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle>Impact de vos dons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div>
                      <p className="font-semibold">10 000 Ar</p>
                      <p className="text-sm text-gray-600">Matériaux de construction pour 1m²</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                    <div>
                      <p className="font-semibold">50 000 Ar</p>
                      <p className="text-sm text-gray-600">Formation d'un leader jeunesse</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2" />
                    <div>
                      <p className="font-semibold">100 000 Ar</p>
                      <p className="text-sm text-gray-600">Équipement audio pour un mois</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Instructions */}
            {paymentMethod && (
              <Card className="backdrop-blur-lg bg-white/40 border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle>Instructions de paiement</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  {paymentMethod === 'mobile' && (
                    <div className="space-y-2">
                      <p><strong>Orange Money:</strong> 032 XX XXX XX</p>
                      <p><strong>MVola:</strong> 034 XX XXX XX</p>
                      <p className="text-gray-600">Vous recevrez les coordonnées exactes par email</p>
                    </div>
                  )}
                  {paymentMethod === 'bank' && (
                    <div className="space-y-2">
                      <p><strong>Banque:</strong> BNI Madagascar</p>
                      <p><strong>Compte:</strong> XXXXXXXX</p>
                      <p className="text-gray-600">RIB complet envoyé par email</p>
                    </div>
                  )}
                  {paymentMethod === 'cash' && (
                    <div className="space-y-2">
                      <p><strong>Adresse:</strong> Analamahitsy</p>
                      <p><strong>Horaires:</strong> Dimanche 8h-12h</p>
                      <p className="text-gray-600">Voir le trésorier à l'accueil</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Contact */}
            <Card className="backdrop-blur-lg bg-white/40 border-white/20 shadow-xl">
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+261 XX XX XXX XX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>contact@fpvm-analamahitsy.org</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
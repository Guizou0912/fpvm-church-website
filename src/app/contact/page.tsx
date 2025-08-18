"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Send, Users } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error status when user starts typing
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Une erreur s'est produite lors de l'envoi.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Erreur de connexion. Veuillez vérifier votre connexion internet.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      // Auto-clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  const isFormValid = formData.fullName && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/80 rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 font-display">
              Contactez-nous
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Nous sommes là pour vous accompagner dans votre parcours spirituel. 
              N'hésitez pas à nous contacter pour toute question ou demande.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl p-8 rounded-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4 font-display">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-slate-600">
                    Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <span className="text-red-700">
                      {errorMessage || "Une erreur s'est produite. Veuillez réessayer."}
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-slate-700 font-medium">
                        Nom et prénom *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="mt-2 bg-white/60 border-white/30 focus:bg-white/80 focus:border-purple-300"
                        placeholder="Votre nom complet"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 bg-white/60 border-white/30 focus:bg-white/80 focus:border-purple-300"
                        placeholder="votre.email@exemple.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-2 bg-white/60 border-white/30 focus:bg-white/80 focus:border-purple-300"
                        placeholder="+261 XX XX XXX XX"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-slate-700 font-medium">
                        Sujet *
                      </Label>
                      <Select 
                        onValueChange={(value) => handleInputChange("subject", value)} 
                        value={formData.subject}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="mt-2 bg-white/60 border-white/30 focus:bg-white/80 focus:border-purple-300">
                          <SelectValue placeholder="Choisissez un sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="information">Demande d'information</SelectItem>
                          <SelectItem value="prayer">Demande de prière</SelectItem>
                          <SelectItem value="general">Question générale</SelectItem>
                          <SelectItem value="baptism">Baptême</SelectItem>
                          <SelectItem value="wedding">Mariage</SelectItem>
                          <SelectItem value="ministry">Ministères</SelectItem>
                          <SelectItem value="visit">Visite pastorale</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-2 bg-white/60 border-white/30 focus:bg-white/80 focus:border-purple-300 min-h-[120px]"
                      placeholder="Écrivez votre message ici..."
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-700 hover:to-purple-700 text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Envoyer le message
                      </div>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Church Info Card */}
              <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 font-display">
                  Informations de contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Adresse</h4>
                      <p className="text-slate-600 leading-relaxed">
                        FPVM FR-MG TENY FIAINANA<br />
                        Analamahitsy<br />
                        Antananarivo, Madagascar
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Phone className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Téléphone</h4>
                      <p className="text-slate-600">+261 34 XX XXX XX</p>
                      <p className="text-slate-600">+261 32 XX XXX XX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                      <p className="text-slate-600">contact@fpvmtenyfiainana.mg</p>
                      <p className="text-slate-600">pasteur@fpvmtenyfiainana.mg</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Service Times Card */}
              <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 font-display">
                    Horaires des cultes
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-800">Dimanche matin</span>
                    <span className="text-slate-600">08h00 - 11h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-800">Dimanche soir</span>
                    <span className="text-slate-600">16h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-800">Mercredi soir</span>
                    <span className="text-slate-600">18h00 - 20h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-slate-800">Vendredi soir</span>
                    <span className="text-slate-600">18h00 - 20h00</span>
                  </div>
                </div>
              </Card>

              {/* Office Hours Card */}
              <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 font-display">
                    Heures de bureau
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-800">Lundi - Vendredi</span>
                    <span className="text-slate-600">08h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-800">Samedi</span>
                    <span className="text-slate-600">08h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-slate-800">Dimanche</span>
                    <span className="text-slate-600">Après le culte</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50/80 rounded-xl">
                  <p className="text-sm text-slate-600 text-center">
                    Pour les urgences pastorales, contactez-nous à tout moment.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center font-display">
              Notre emplacement
            </h2>
            <div className="bg-slate-100 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">
                  FPVM FR-MG TENY FIAINANA
                </h3>
                <p className="text-slate-500">
                  Analamahitsy, Antananarivo<br />
                  Madagascar
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-slate-600">
                Située au cœur d'Analamahitsy, notre église est facilement accessible en transport public ou en voiture.
                Un parking est disponible pour nos fidèles.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
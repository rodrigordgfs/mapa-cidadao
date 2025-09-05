'use client';

import { Button } from '@/components/ui/button';
import { MapPin, Users, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 dark:bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 dark:bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 dark:bg-orange-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 dark:from-blue-400 dark:via-green-400 dark:to-orange-400 bg-clip-text text-transparent leading-tight">
            Sua voz no mapa da cidade
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Cidadão Mapa conecta você à sua comunidade, ajudando a identificar problemas e construir soluções coletivas.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-200">Mapeamento Colaborativo</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
              <Users className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-200">Engajamento Comunitário</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
              <MessageSquare className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-200">Transparência Pública</span>
            </div>
          </div>

          {/* CTA Form */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                required
              />
              <Button 
                type="submit"
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Quero participar
              </Button>
            </div>
          </form>

          {/* Mock map visualization */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/50 dark:to-green-900/50 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-bounce" />
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Mapa Interativo da Comunidade</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Em breve disponível</p>
                </div>
              </div>
              
              {/* Mock map points */}
              <div className="absolute top-6 left-8 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-12 w-4 h-4 bg-green-500 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-8 left-16 w-4 h-4 bg-orange-500 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-16 right-8 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
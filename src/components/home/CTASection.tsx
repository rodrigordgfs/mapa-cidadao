'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Mail, Users } from 'lucide-react';
import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Participe da construção da sua cidade
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Junte-se a milhares de cidadãos que já estão transformando suas comunidades através da colaboração.
          </p>

          {/* Newsletter signup */}
          <Card className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border-white/20 dark:border-gray-600/20 mb-12 max-w-2xl mx-auto">
            <CardContent className="p-8">
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-semibold text-white">
                      Receba novidades do projeto
                    </h3>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="flex-1 px-6 py-4 rounded-full border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-gray-300 text-lg"
                      required
                    />
                    <Button 
                      type="submit"
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Participar
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Obrigado por se juntar a nós!
                  </h3>
                  <p className="text-blue-100 dark:text-blue-200">
                    Você receberá atualizações sobre o lançamento da plataforma.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Support options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 dark:bg-gray-800/20 border-white/30 dark:border-gray-600/30 text-white hover:bg-white/20 dark:hover:bg-gray-700/30 backdrop-blur-sm py-6 rounded-2xl group"
            >
              <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Apoiar o projeto
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 dark:bg-gray-800/20 border-white/30 dark:border-gray-600/30 text-white hover:bg-white/20 dark:hover:bg-gray-700/30 backdrop-blur-sm py-6 rounded-2xl group"
            >
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              Saber mais
            </Button>
          </div>

          <p className="text-blue-200 mt-8 text-sm">
            * Projeto 100% gratuito e open source
          </p>
        </div>
      </div>
    </section>
  );
}
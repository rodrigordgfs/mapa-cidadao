import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Mail, Twitter, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 dark:from-blue-300 dark:to-green-300 bg-clip-text text-transparent">
                Cidadão Mapa
              </h3>
              <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
                Plataforma colaborativa que transforma a voz da comunidade em ação. 
                Conectando cidadãos, prefeituras e ONGs para construir cidades melhores.
              </p>
              <Badge className="bg-green-600 hover:bg-green-700">
                <Heart className="w-3 h-3 mr-1" />
                Projeto open source
              </Badge>
            </div>

            {/* Navigation links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#como-funciona" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#beneficios" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#roadmap" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>

            {/* Legal and support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#contato" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">Contato</a></li>
                <li><a href="#privacidade" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#termos" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#github" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          {/* Social media and newsletter */}
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className="text-gray-400 dark:text-gray-500">Siga nosso progresso:</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-gray-400 dark:text-gray-500 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 dark:text-gray-500 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 dark:text-gray-500 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 dark:text-gray-500 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 dark:text-gray-500 text-sm mb-2">
                © 2025 Cidadão Mapa. Feito com ❤️ para a comunidade.
              </p>
              <p className="text-gray-500 dark:text-gray-600 text-xs">
                Projeto open source desenvolvido para fortalecer a democracia participativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
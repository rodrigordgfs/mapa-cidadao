import { Badge } from '@/components/ui/badge';
import { Heart, Users2, Building2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
            Sobre o Projeto
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Uma plataforma feita pela comunidade, 
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent"> para a comunidade</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            O Cidadão Mapa é uma plataforma colaborativa que transforma a voz da comunidade em ação. 
            Por meio de um mapa interativo, os moradores podem registrar problemas do bairro e também 
            destacar pontos positivos, aproximando cidadãos, associações de bairro, ONGs e prefeituras.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-2xl">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Engajamento Comunitário</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Conecte-se com seus vizinhos e participe ativamente das melhorias do seu bairro.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-8 rounded-2xl">
              <Users2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Colaboração</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Trabalhe junto com outros moradores para encontrar soluções criativas e eficazes.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-8 rounded-2xl">
              <Building2 className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Transparência Pública</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Facilite a comunicação com prefeituras e ONGs para ações mais direcionadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
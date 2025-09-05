import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Eye, Handshake, Zap } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: 'Mais participação cidadã',
    description: 'Moradores se sentem parte da solução e se engajam ativamente nas questões do bairro.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Eye,
    title: 'Transparência nos problemas',
    description: 'Estatísticas claras mostram onde estão os maiores desafios da cidade.',
    gradient: 'from-green-500 to-green-600',
  },
  {
    icon: Handshake,
    title: 'Colaboração entre vizinhos',
    description: 'Espaço dedicado para vizinhos se conectarem e colaborarem em melhorias.',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    icon: Zap,
    title: 'Eficiência pública',
    description: 'Governos locais sabem exatamente onde agir primeiro, otimizando recursos.',
    gradient: 'from-purple-500 to-purple-600',
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800">
              Benefícios para a Comunidade
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Transformando cidades através da 
              <span className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent"> colaboração</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Quando a comunidade se une, os resultados são extraordinários. Veja como o Cidadão Mapa beneficia todos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <Card 
                key={benefit.title} 
                className="group hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white dark:bg-gray-800"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
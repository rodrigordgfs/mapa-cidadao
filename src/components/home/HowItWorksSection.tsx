import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, Building, Lightbulb } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Registre um problema',
    description: 'Fotografe e localize problemas no seu bairro: buracos, lixo, iluminação ou questões de segurança.',
    color: 'blue',
  },
  {
    icon: Heart,
    title: 'A comunidade apoia',
    description: 'Outros moradores podem apoiar, comentar e compartilhar suas experiências sobre o problema.',
    color: 'green',
  },
  {
    icon: Building,
    title: 'Prefeitura acompanha',
    description: 'Órgãos públicos e ONGs podem acompanhar as demandas e atualizar o status das ações.',
    color: 'orange',
  },
  {
    icon: Lightbulb,
    title: 'Soluções coletivas',
    description: 'Juntos construímos um bairro melhor com mais participação e transparência.',
    color: 'purple',
  },
];

const colorMap = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  orange: 'from-orange-500 to-orange-600',
  purple: 'from-purple-500 to-purple-600',
};

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
              Como Funciona
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              4 passos para transformar sua cidade
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Um processo simples e colaborativo para que sua voz seja ouvida e gere impacto real na comunidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={step.title} className="relative overflow-hidden group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-8 text-center">
                  {/* Step number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-300">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${colorMap[step.color as keyof typeof colorMap]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute inset-x-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <div className="flex justify-between max-w-6xl mx-auto px-6">
              {['line-1', 'line-2', 'line-3'].map((lineId, index) => (
                <div 
                  key={lineId}
                  className="w-24 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 mt-20"
                  style={{ marginLeft: index === 0 ? '8rem' : '0', marginRight: index === 2 ? '8rem' : '0' }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
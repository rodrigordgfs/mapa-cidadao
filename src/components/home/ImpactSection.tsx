import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Finalmente conseguimos organizar as demandas do nosso bairro. A prefeitura agora sabe exatamente onde agir primeiro.",
    author: "Maria Silva",
    role: "Presidente da Associação de Moradores",
    avatar: "MS",
  },
  {
    quote: "Como vereador, uso a plataforma para entender melhor as necessidades reais da população. É uma ferramenta democrática incrível.",
    author: "João Santos",
    role: "Vereador Municipal",
    avatar: "JS",
  },
  {
    quote: "Nosso grupo de voluntários consegue identificar rapidamente onde a comunidade mais precisa de ajuda. Revolucionou nosso trabalho!",
    author: "Ana Costa",
    role: "ONG Cidade Limpa",
    avatar: "AC",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
              Impacto Social
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Cada marcação no mapa é um passo rumo a 
              <span className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent"> uma cidade melhor</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Veja o que líderes comunitários, representantes públicos e organizações estão dizendo sobre nossa iniciativa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="relative group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-blue-400 dark:text-blue-300 mb-4 opacity-60" />
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact stats */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2.5k+</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Problemas Reportados</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">87%</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Taxa de Resolução</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">150+</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Bairros Participantes</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">12k+</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Cidadãos Engajados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
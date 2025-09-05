import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapIcon, MessageCircle, BarChart3, Bell, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    icon: MapIcon,
    title: 'Mapa interativo com categorias',
    description: 'Sistema completo de categorização e filtros para problemas e pontos positivos.',
    status: 'Em desenvolvimento',
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: MessageCircle,
    title: 'Apoios e comentários',
    description: 'Sistema de engajamento onde moradores podem apoiar e discutir reportes.',
    status: 'Planejado',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: BarChart3,
    title: 'Painel de estatísticas',
    description: 'Dashboards com dados e métricas sobre os problemas mais frequentes.',
    status: 'Planejado',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: Bell,
    title: 'Notificações para moradores',
    description: 'Alertas sobre novos reportes na sua região e atualizações de status.',
    status: 'Futuro',
    statusColor: 'bg-gray-100 text-gray-700',
  },
  {
    icon: Shield,
    title: 'Painel para prefeituras',
    description: 'Interface dedicada para órgãos públicos acompanharem e responderem demandas.',
    status: 'Futuro',
    statusColor: 'bg-gray-100 text-gray-700',
  },
  {
    icon: Smartphone,
    title: 'Aplicativo mobile',
    description: 'App nativo para facilitar reportes em movimento e aumentar a participação.',
    status: 'Futuro',
    statusColor: 'bg-gray-100 text-gray-700',
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800">
              Roadmap do Projeto
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              O que vem por aí
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Nossa visão é criar a plataforma mais completa para engajamento comunitário. 
              Veja o que estamos construindo para o futuro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card 
                key={feature.title} 
                className="group hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-800 dark:group-hover:to-blue-700 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    <Badge className={`text-xs ${feature.statusColor}`}>
                      {feature.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 dark:text-gray-400 italic">
              💡 <strong>Projeto open source</strong> - Acompanhe o desenvolvimento no GitHub e contribua com ideias!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
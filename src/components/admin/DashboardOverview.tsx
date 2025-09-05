import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Eye,
  MessageSquare,
  Clock
} from 'lucide-react';

const stats = [
  {
    title: 'Total de Reportes',
    value: '2,847',
    change: '+12%',
    changeType: 'positive',
    icon: MapPin,
    color: 'blue',
  },
  {
    title: 'Usuários Ativos',
    value: '1,234',
    change: '+8%',
    changeType: 'positive',
    icon: Users,
    color: 'green',
  },
  {
    title: 'Problemas Pendentes',
    value: '156',
    change: '-5%',
    changeType: 'negative',
    icon: AlertTriangle,
    color: 'orange',
  },
  {
    title: 'Resolvidos Este Mês',
    value: '89',
    change: '+23%',
    changeType: 'positive',
    icon: CheckCircle,
    color: 'emerald',
  },
];

const recentReports = [
  {
    id: 1,
    title: 'Buraco na Rua das Flores',
    location: 'Centro, São Paulo',
    status: 'pending',
    priority: 'high',
    time: '2 horas atrás',
    author: 'Maria Silva',
  },
  {
    id: 2,
    title: 'Lixo acumulado na praça',
    location: 'Vila Madalena, São Paulo',
    status: 'in-progress',
    priority: 'medium',
    time: '4 horas atrás',
    author: 'João Santos',
  },
  {
    id: 3,
    title: 'Iluminação queimada',
    location: 'Pinheiros, São Paulo',
    status: 'resolved',
    priority: 'low',
    time: '1 dia atrás',
    author: 'Ana Costa',
  },
];

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  resolved: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
};

const priorityColors = {
  high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  medium: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
  low: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300',
};

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Dashboard</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Visão geral da plataforma Cidadão Mapa
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <MapPin className="w-4 h-4 mr-2" />
          Novo Reporte
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`w-4 h-4 mr-1 ${
                      stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                    }`} />
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 ml-1">
                      vs mês anterior
                    </span>
                  </div>
                </div>
                <div className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Reports */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Reportes Recentes</span>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Ver Todos
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-zinc-900 dark:text-white">
                        {report.title}
                      </h4>
                      <Badge className={statusColors[report.status as keyof typeof statusColors]}>
                        {report.status === 'pending' ? 'Pendente' : 
                         report.status === 'in-progress' ? 'Em Andamento' : 'Resolvido'}
                      </Badge>
                      <Badge variant="outline" className={priorityColors[report.priority as keyof typeof priorityColors]}>
                        {report.priority === 'high' ? 'Alta' : 
                         report.priority === 'medium' ? 'Média' : 'Baixa'}
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                      📍 {report.location}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                      <span>Por {report.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {report.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Atividade Hoje</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">Novos Reportes</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Últimas 24h</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">12</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">Resolvidos</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Últimas 24h</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">8</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">Comentários</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Últimas 24h</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">34</span>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
              <Button variant="outline" className="w-full">
                Ver Relatório Completo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
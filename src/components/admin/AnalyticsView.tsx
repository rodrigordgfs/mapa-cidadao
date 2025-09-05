'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Download,
  Calendar,
  MapPin,
  Users,
  MessageSquare
} from 'lucide-react';

const analyticsData = [
  {
    title: 'Reportes por Categoria',
    data: [
      { category: 'Infraestrutura', count: 456, percentage: 35 },
      { category: 'Limpeza', count: 324, percentage: 25 },
      { category: 'Iluminação', count: 234, percentage: 18 },
      { category: 'Segurança', count: 156, percentage: 12 },
      { category: 'Outros', count: 130, percentage: 10 },
    ],
  },
];

const regionStats = [
  { region: 'Centro', reports: 234, resolved: 89, percentage: 38 },
  { region: 'Vila Madalena', reports: 189, resolved: 156, percentage: 83 },
  { region: 'Pinheiros', reports: 167, resolved: 134, percentage: 80 },
  { region: 'Liberdade', reports: 145, resolved: 98, percentage: 68 },
  { region: 'Bela Vista', reports: 123, resolved: 67, percentage: 54 },
];

const monthlyTrends = [
  { month: 'Jan', reports: 234, resolved: 189 },
  { month: 'Fev', reports: 267, resolved: 234 },
  { month: 'Mar', reports: 298, resolved: 267 },
  { month: 'Abr', reports: 324, resolved: 298 },
  { month: 'Mai', reports: 356, resolved: 324 },
  { month: 'Jun', reports: 389, resolved: 356 },
];

export default function AnalyticsView() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Analytics</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Insights e métricas da plataforma Cidadão Mapa
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="30days">
            <SelectTrigger className="w-48">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Últimos 7 dias</SelectItem>
              <SelectItem value="30days">Últimos 30 dias</SelectItem>
              <SelectItem value="90days">Últimos 90 dias</SelectItem>
              <SelectItem value="1year">Último ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Taxa de Resolução
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                  87%
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                  <span className="text-sm font-medium text-green-600">+5%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Tempo Médio de Resolução
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                  12d
                </p>
                <div className="flex items-center mt-2">
                  <TrendingDown className="w-4 h-4 mr-1 text-green-500" />
                  <span className="text-sm font-medium text-green-600">-2d</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Engajamento Médio
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                  4.2
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                  <span className="text-sm font-medium text-green-600">+0.3</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Regiões Ativas
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                  156
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                  <span className="text-sm font-medium text-green-600">+12</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Categories Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Reportes por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData[0].data.map((item) => (
                <div key={item.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-zinc-900 dark:text-white">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {item.count} reportes
                    </span>
                    <Badge variant="outline">
                      {item.percentage}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regional Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Performance por Região</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionStats.map((region) => (
                <div key={region.region} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-900 dark:text-white">
                      {region.region}
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {region.resolved}/{region.reports} resolvidos
                    </span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${region.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span>{region.percentage}% resolvidos</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Tendências Mensais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-between gap-4 p-4">
            {monthlyTrends.map((month) => (
              <div key={month.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col gap-1">
                  <div 
                    className="bg-blue-500 rounded-t"
                    style={{ height: `${(month.reports / 400) * 200}px` }}
                  ></div>
                  <div 
                    className="bg-green-500 rounded-b"
                    style={{ height: `${(month.resolved / 400) * 200}px` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {month.month}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Reportes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Resolvidos</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Edit, 
  Trash2,
  MapPin,
  Clock,
  User
} from 'lucide-react';

const mockReports = [
  {
    id: 1,
    title: 'Buraco na Rua das Flores, 123',
    category: 'Infraestrutura',
    location: 'Centro, São Paulo',
    status: 'pending',
    priority: 'high',
    author: 'Maria Silva',
    date: '2025-01-15',
    supports: 23,
    comments: 5,
  },
  {
    id: 2,
    title: 'Lixo acumulado na Praça Central',
    category: 'Limpeza',
    location: 'Vila Madalena, São Paulo',
    status: 'in-progress',
    priority: 'medium',
    author: 'João Santos',
    date: '2025-01-14',
    supports: 45,
    comments: 12,
  },
  {
    id: 3,
    title: 'Iluminação pública queimada',
    category: 'Iluminação',
    location: 'Pinheiros, São Paulo',
    status: 'resolved',
    priority: 'low',
    author: 'Ana Costa',
    date: '2025-01-13',
    supports: 8,
    comments: 3,
  },
  {
    id: 4,
    title: 'Calçada danificada em frente ao mercado',
    category: 'Infraestrutura',
    location: 'Liberdade, São Paulo',
    status: 'pending',
    priority: 'medium',
    author: 'Carlos Oliveira',
    date: '2025-01-12',
    supports: 15,
    comments: 7,
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

export default function ReportsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Gerenciar Reportes</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Acompanhe e gerencie todos os reportes da comunidade
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <MapPin className="w-4 h-4 mr-2" />
          Novo Reporte
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
              <Input
                placeholder="Buscar reportes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="in-progress">Em Andamento</SelectItem>
                <SelectItem value="resolved">Resolvido</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Categorias</SelectItem>
                <SelectItem value="infraestrutura">Infraestrutura</SelectItem>
                <SelectItem value="limpeza">Limpeza</SelectItem>
                <SelectItem value="iluminacao">Iluminação</SelectItem>
                <SelectItem value="seguranca">Segurança</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reports Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Reportes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reporte</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Prioridade</TableHead>
                <TableHead>Engajamento</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockReports.map((report) => (
                <TableRow key={report.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                  <TableCell>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">
                        {report.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        <MapPin className="w-3 h-3" />
                        {report.location}
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                        <User className="w-3 h-3" />
                        {report.author}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{report.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[report.status as keyof typeof statusColors]}>
                      {report.status === 'pending' ? 'Pendente' : 
                       report.status === 'in-progress' ? 'Em Andamento' : 'Resolvido'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={priorityColors[report.priority as keyof typeof priorityColors]}>
                      {report.priority === 'high' ? 'Alta' : 
                       report.priority === 'medium' ? 'Média' : 'Baixa'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                      <span>👍 {report.supports}</span>
                      <span>💬 {report.comments}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <Clock className="w-3 h-3" />
                      {report.date}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Visualizar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 dark:text-red-400">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
  MoreHorizontal, 
  Eye, 
  Edit, 
  Ban,
  UserPlus,
  Mail,
  Clock,
  MapPin
} from 'lucide-react';

const mockUsers = [
  {
    id: 1,
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    avatar: 'MS',
    role: 'Cidadão',
    status: 'active',
    reports: 12,
    joinDate: '2024-03-15',
    lastActive: '2 horas atrás',
    location: 'Centro, São Paulo',
  },
  {
    id: 2,
    name: 'João Santos',
    email: 'joao.santos@prefeitura.sp.gov.br',
    avatar: 'JS',
    role: 'Prefeitura',
    status: 'active',
    reports: 0,
    joinDate: '2024-01-10',
    lastActive: '1 dia atrás',
    location: 'São Paulo',
  },
  {
    id: 3,
    name: 'Ana Costa',
    email: 'ana.costa@ongcidade.org',
    avatar: 'AC',
    role: 'ONG',
    status: 'active',
    reports: 8,
    joinDate: '2024-02-20',
    lastActive: '3 horas atrás',
    location: 'Vila Madalena, São Paulo',
  },
  {
    id: 4,
    name: 'Carlos Oliveira',
    email: 'carlos.oliveira@email.com',
    avatar: 'CO',
    role: 'Cidadão',
    status: 'inactive',
    reports: 3,
    joinDate: '2024-04-05',
    lastActive: '2 semanas atrás',
    location: 'Pinheiros, São Paulo',
  },
];

const roleColors = {
  'Cidadão': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  'Prefeitura': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  'ONG': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
};

const statusColors = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  inactive: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300',
};

export default function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Gerenciar Usuários</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Administre usuários, permissões e atividades da plataforma
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Convidar Usuário
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Total de Usuários
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                  1,234
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Usuários Ativos
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                  987
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Novos Este Mês
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">
                  89
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Organizações
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  45
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
              <Input
                placeholder="Buscar usuários..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Enviar Email
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuário</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reportes</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/user-${user.id}.jpg`} alt={user.name} />
                        <AvatarFallback className="bg-blue-600 text-white">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-zinc-900 dark:text-white">
                          {user.name}
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={roleColors[user.role as keyof typeof roleColors]}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[user.status as keyof typeof statusColors]}>
                      {user.status === 'active' ? 'Ativo' : 'Inativo'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      {user.reports}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <MapPin className="w-3 h-3" />
                      {user.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <Clock className="w-3 h-3" />
                      {user.lastActive}
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
                          Ver Perfil
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="w-4 h-4 mr-2" />
                          Enviar Email
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 dark:text-red-400">
                          <Ban className="w-4 h-4 mr-2" />
                          Suspender
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
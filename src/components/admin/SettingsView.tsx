'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { 
  Settings, 
  Bell, 
  Shield, 
  Database,
  Mail,
  Save,
  RefreshCw,
  MapPin
} from 'lucide-react';

export default function SettingsView() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [autoModeration, setAutoModeration] = useState(true);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Configurações</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Gerencie as configurações da plataforma e preferências do sistema
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Save className="w-4 h-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="security">Segurança</TabsTrigger>
          <TabsTrigger value="integrations">Integrações</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Configurações Gerais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Nome da Plataforma</Label>
                  <Input id="platform-name" defaultValue="Cidadão Mapa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email do Administrador</Label>
                  <Input id="admin-email" defaultValue="admin@cidadaomapa.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="platform-description">Descrição da Plataforma</Label>
                <Textarea 
                  id="platform-description" 
                  defaultValue="Plataforma colaborativa que conecta cidadãos, prefeituras e ONGs para melhorar a cidade."
                  rows={3}
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-zinc-900 dark:text-white">Configurações de Moderação</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-moderation">Moderação Automática</Label>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Filtrar automaticamente conteúdo inadequado
                    </p>
                  </div>
                  <Switch 
                    id="auto-moderation"
                    checked={autoModeration}
                    onCheckedChange={setAutoModeration}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Configurações de Notificações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Notificações por Email</Label>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Receber alertas sobre novos reportes e atividades
                    </p>
                  </div>
                  <Switch 
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications">Notificações Push</Label>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Notificações em tempo real no navegador
                    </p>
                  </div>
                  <Switch 
                    id="push-notifications"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notification-email">Email para Notificações</Label>
                <Input id="notification-email" defaultValue="admin@cidadaomapa.com" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Configurações de Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Timeout de Sessão (minutos)</Label>
                  <Input id="session-timeout" defaultValue="60" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-login-attempts">Máximo de Tentativas de Login</Label>
                  <Input id="max-login-attempts" defaultValue="5" type="number" />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-zinc-900 dark:text-white">Políticas de Segurança</h4>
                <div className="space-y-3">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    ✓ SSL/TLS Habilitado
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    ✓ Autenticação de Dois Fatores
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    ✓ Backup Automático
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Integrações e APIs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">Email Service</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">SendGrid API</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    Conectado
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">Maps API</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Google Maps</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    Conectado
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">Analytics</p>
                      <p className="text_sm text-zinc-600 dark:text-zinc-400">Google Analytics</p>
                    </div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    Pendente
                  </Badge>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                Testar Conexões
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard, 
  MapPin, 
  Users, 
  BarChart3, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  Bell,
  MessageSquare
} from 'lucide-react';

interface AdminSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
  { id: 'reports', label: 'Reportes', icon: MapPin, badge: '23' },
  { id: 'users', label: 'Usuários', icon: Users, badge: null },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: null },
  { id: 'settings', label: 'Configurações', icon: Settings, badge: null },
];

export default function AdminSidebar({ 
  activeView, 
  setActiveView, 
  collapsed, 
  setCollapsed 
}: AdminSidebarProps) {
  return (
    <div className={`fixed left-0 top-0 h-full bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 transition-all duration-300 z-40 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-200 dark:border-zinc-700">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-zinc-900 dark:text-white">
              Admin
            </span>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 p-0"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeView === item.id ? "default" : "ghost"}
            className={`w-full justify-start gap-3 h-12 ${
              collapsed ? 'px-3' : 'px-4'
            } ${
              activeView === item.id 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700'
            }`}
            onClick={() => setActiveView(item.id)}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge variant="secondary" className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                    {item.badge}
                  </Badge>
                )}
              </>
            )}
          </Button>
        ))}
      </nav>

      {/* Quick Actions */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            <Bell className="w-4 h-4" />
            Notificações
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            <MessageSquare className="w-4 h-4" />
            Suporte
          </Button>
        </div>
      )}
    </div>
  );
}
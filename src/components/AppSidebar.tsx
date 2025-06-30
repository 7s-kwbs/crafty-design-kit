
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Database, 
  Folder, 
  User, 
  FileText,
  FolderOpen
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { name: 'Dashboard', icon: Database, path: '/' },
  { name: 'Asset Management', icon: FolderOpen, path: '/asset-management' },
  { name: 'User Management', icon: User, path: '/user-management' },
  { name: 'Vendor Management', icon: Folder, path: '/vendor-management' },
  { name: 'Report', icon: FileText, path: '/report' },
  { name: 'Maintenance', icon: Database, path: '/maintenance' },
];

export const AppSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useSidebar();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <div className="p-4 border-b">
          <h2 className={`font-bold text-slate-800 transition-all ${
            state === 'collapsed' ? 'text-sm' : 'text-xl'
          }`}>
            {state === 'collapsed' ? 'DB' : 'Dashboard'}
          </h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      onClick={() => handleNavigation(item.path)}
                      isActive={isActive}
                      className="w-full justify-start"
                    >
                      <Icon size={20} />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

import {
  Home,
  Mail,
  Box,
  Tag,
  LogOut,
} from 'lucide-react';
import { SidebarItem } from './sidebarItem';

const menuItems = [
  { name: 'Dashboard', icon: Home, link: '/dashboard', active: true },
  { name: 'Productos', icon: Box, link: '/products' },
  { name: 'Categorias', icon: Tag, link: '/categories' },
  { name: 'Pedidos', icon: Mail, link: '/messages' }, 
];

export function Sidebar() {
  return(
    <div className="fixed flex flex-col h-screen w-56 bg-gray-50 p-4 shadow-xl">
      
      <div className="flex items-center justify-center mb-8 px-3">
        <a href="" className='w-20 h-15 flex items-center'>
          <img src="images\logos\LogoTurboParts.png" alt="Turbo Parts" className="w-20 h-28"/>
        </a>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.name}
            name={item.name}
            Icon={item.icon}
            link={item.link}
            active={item.active}
            badge={item.badge}
          />
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t">
        <SidebarItem 
          name="Cerrar Sesión" 
          Icon={LogOut} 
          link="/logout" 
        />
      </div>

    </div>
  )
}
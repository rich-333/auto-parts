import { NavLink } from 'react-router-dom';

export function SidebarItem({ name, Icon, link, active, badge }) {
  return (
    <NavLink to={link} className={({ isActive }) => `flex items-center p-3 rounded-lg text-gray-700 cursor-pointer hover:bg-indigo-50 transition-colors 
      ${ isActive ? 'bg-indigo-100/70 border-l-4 border-indigo-600 font-semibold text-indigo-800' : ''}` }>

      <Icon className="w-5 h-5 mr-3" />
      
      <span>{name}</span>

      {badge && (
        <span className="ml-auto bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </NavLink>
  );
}
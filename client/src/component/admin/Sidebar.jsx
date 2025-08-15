import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const user = {
    firstname: 'Admin',
    lastname: 'user',
  };

  const adminnavlinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
    { name: 'Add show', path: '/admin/add-show', icon: PlusSquareIcon },
    { name: 'List shows', path: '/admin/list-show', icon: ListIcon },
    { name: 'List booking', path: '/admin/list-booking', icon: ListCollapseIcon },
  ];

  return (
    <div className="h-[calc(100vh-64px)] mx-auto px-7 md:flex-col items-center pt-8 max-w-18 md:max-w-60 w-full border-r border-gray-300 text-sm">
      <p className="max-md:hidden pt-2 text-base">{user.firstname}</p>
      <p className="max-md:hidden pt-2 text-base">{user.lastname}</p>

      <div className="w-full">
        {adminnavlinks.map((link, index) => (
          <NavLink
             end 
            to={link.path}
            key={index}
           
            className={({ isActive }) =>
              `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 md:pl-10 first:mt-6 transition-colors ${
                isActive
                  ? 'bg-primary text-white font-medium'
                  : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className="w-5 h-5" />
                <p className="max-md:hidden">{link.name}</p>
                {isActive && (
                  <span className="w-1.5 h-10 rounded-1 right-0 absolute bg-primary" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

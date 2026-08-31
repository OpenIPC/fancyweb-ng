import MenuItem from './components/menu-item';
import type { MenuItems } from '../../Header-menu';
import {useEffect} from 'preact/hooks';
import {RefObject} from 'preact';

interface MobileMenuProps {
  isAnimating: boolean;
  menuItems: MenuItems;
  toggleMenu: () => void;
  navRef: RefObject<HTMLDivElement>;
}

export default function MobileMenu({
  isAnimating,
  menuItems,
  toggleMenu,
  navRef,
}: MobileMenuProps) {

  const handleOutsideMenuClick = (e: MouseEvent) => {
    const targ = e.target as Node | null;
    if (navRef.current && targ) {
      if (!navRef.current.contains(targ)) {
        toggleMenu();
      }
    }
  }

  useEffect(() => {
    const app = document.getElementById('app');
    if (!app) return; 
    app.addEventListener('click', handleOutsideMenuClick);
    
    return () => {
      app.removeEventListener('click', handleOutsideMenuClick);
    };
  }, []);

  return (
    <div className="relative max-h-0">
      <div className={`
        absolute top-0 flex w-full flex-col justify-end overflow-hidden
        bg-brand-blue transition-all duration-500 ease-linear
        ${isAnimating
          ? 'max-h-110 opacity-100'
          : 'max-h-0 opacity-90'
        }
      `}>
        <ul className={`flex flex-col justify-start gap-x-3 pl-2`}>
          {
            menuItems.map((menuItem) => <MenuItem
              key={menuItem.id}
              active={false}
              {...{menuItem, toggleMenu}}
            />)
          }
        </ul>
      </div>
    </div>
  );
}

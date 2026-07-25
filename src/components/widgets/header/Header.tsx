import UIIcons from '../../../assets/icons/ui';
import type { HeaderProps } from './header-types';

export default function Header ({children}: HeaderProps) {
  const { Logo } = UIIcons;

  return (
    <header className="flex flex-col items-center bg-brand-blue px-0 md:px-4">
      <nav className={`
        relative flex min-h-14 w-full max-w-[1240px] flex-row items-center
        justify-between px-4
        md:px-0
      `}>
        <a href="/" className="block w-28">
          <Logo />
        </a>
        { children }
      </nav>
    </header>
  );
}

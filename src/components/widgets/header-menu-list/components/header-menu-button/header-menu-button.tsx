import { Button } from '../../types/types';
import HeaderMenuLink from '../header-menu-link/header-menu-link';
import UIIcons from '../../../../../assets/icons/ui';
import { createRef } from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default function HeaderMenuButton(props: Button) {
  const { title, children } = props;
  const { Triangle } = UIIcons;
  const [isVisible, setVisible] = useState(false);
 
  const li = createRef();

  useEffect(() => {
    const handleOutsideClick = (evt: MouseEvent) => {
      if (li.current && window.innerWidth >= 768 ) {
        !li.current.contains(evt.target) && setVisible(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  });

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 726px)");
    const handleViewPortWidthChange = () => {
      setVisible(false);
    };
    mql.addEventListener('change', handleViewPortWidthChange);
    return () => mql.removeEventListener('change', handleViewPortWidthChange);
  });

  function handleClick() {
    setVisible(!isVisible);
  }

  return (
    <li className="md:relative" ref={li}>
      <button className={"text-white opacity-60 hover:opacity-100 flex flex-row items-center gap-x-0.5 md:px-2"} onClick={handleClick}>
        <span>{title}</span>
        <Triangle />
      </button>
      {isVisible && <ul className={"pl-2.5 md:pl-0 max-h-fit md:absolute md:top-10 md:right-0 bg-brand-blue md:min-w-max"}>
        {children.map(link => <HeaderMenuLink title={link.title} link={link.link} />)}
      </ul>}
    </li>
  );
}

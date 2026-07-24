import HeaderMenuList from '../header-menu-list';
import HeaderBurgerButton from '../header-burger-button';
import { HeaderMenuProps } from '../header-menu-list/types';
import { useState } from 'preact/hooks';

export default function HeaderMenu(props: Omit<HeaderMenuProps, 'isMobMenuVisible'> ) {
  const { list } = props;
  const [ isMobMenuVisible, setMobMenuVisible ] = useState(false);

  function handleBurgerClick() {
    setMobMenuVisible(!isMobMenuVisible);
  }

  return (
    <>
      <HeaderMenuList list={list} isMobMenuVisible={isMobMenuVisible}/>
      <HeaderBurgerButton clickHandler={handleBurgerClick}/>
    </>
  );
}

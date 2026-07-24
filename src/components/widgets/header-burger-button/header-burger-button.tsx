import IconButton from '../../ui/buttons/icon-button/icon-button';
import UIIcons from '../../../assets/icons/ui';
import { useState } from 'preact/hooks';

type PropsType = {
  clickHandler: () => void;
}

const { Burger, Cross } = UIIcons;

export default function HeaderBurgerButton(props: PropsType) {
  const { clickHandler } = props;
  const [isActive, setActivityState] = useState(false);

  function handleClik(evt: MouseEvent) {
    evt.preventDefault();
    setActivityState(!isActive);
    clickHandler();
  }

  return (
    <div className="block md:hidden">
      <IconButton clickHandler={handleClik} withBorder={true}>
        {isActive ? <Cross /> : <Burger />}
      </IconButton>
    </div>
  );
}

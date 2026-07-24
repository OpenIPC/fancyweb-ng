import { ComponentChildren } from 'preact';

interface IconButtonProps {
  children: ComponentChildren;
  clickHandler: (evt: MouseEvent) => void;
  withBorder?: boolean;
}

export default function IconButton(props: IconButtonProps) {
  const { withBorder, children, clickHandler } = props;
  return (
    <button class={`box-border ${withBorder ? 'border' : ''} rounded-md border-light-blue *:w-[24px] *:h-[24px]`} onClick={clickHandler}>
      {children}
    </button>
  );
}

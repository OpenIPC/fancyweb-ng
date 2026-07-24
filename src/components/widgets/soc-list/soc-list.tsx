import { SoCManagedListProps } from '../soc-managed-list/types';
import { SoCItemSpecificConstants } from '../soc-list-item/constants';
import SoCListItem from '../soc-list-item/soc-list-item';

type SoCListProps = {
  list: SoCManagedListProps['fullList'],
}

export default function SoCList(props: SoCListProps) {
  const { list }= props; 

  return (
    <ul className="flex flex-col gap-y-2 self-stretch">
      <li className="hidden font-medium md:flex md: flex-row md:flex-nowrap md:border-0 md:border-0 md:gap-x-1 md:min-h-11">
        <p className="col-start-1 col-end-4 row-start-2 row-end-3 bg-wallet-bg mb-1 mr-1 pb-1 text-center md:min-w-36 md:shrink-0 md:grow-3 md:basis-0 md:text-left md:m-0 md:p-0 md:pl-2 md:content-center">
          {SoCItemSpecificConstants.SoCCellTitle}
        </p>
        <p className="col-start-4 col-end-6 row-start-2 row-end-3 bg-wallet-bg mb-1 pb-1 text-center md:min-w-32 md:text-left md:shrink-0 md:grow-2 md:basis-0 md:m-0 md:p-0 md:pl-2 md:content-center">
          {SoCItemSpecificConstants.addressCellTitle}
        </p>
        <p className="col-start-1 col-end-2 row-start-4 row-end-5 bg-wallet-bg mr-1 pb-1 flex flex-row justify-center md:min-w-14 md:shrink-0 md:grow md:basis-0 md:m-0 md:p-0 md:flex-col md:items-center *:w-[33px] *:h-[22px]">
          {SoCItemSpecificConstants.stageCellTitle}
        </p>
        <p className="col-start-2 col-end-6 row-start-4 row-end-5 pb-1 bg-wallet-bg text-center md:min-w-56 md:text-left md:shrink-0 md:grow-4 md:basis-0 md:p-0 md:pl-2 md:content-center">
          {SoCItemSpecificConstants.installationCellTitle}
        </p>
      </li>
      { list.map(item => <SoCListItem {...item} />) }
    </ul>
  );
}

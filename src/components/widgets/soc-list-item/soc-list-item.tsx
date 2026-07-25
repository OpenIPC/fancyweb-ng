import { SoCItem as SoCItemProps} from '../soc-managed-list/types';
import { SoCItemSpecificConstants, installationAlternatives } from './constants';
import SoCIcons from '../../../assets/icons/socs-info';

export default function SoCListItem(props: SoCItemProps) {
  const { vendor, model, address, stage, firmware } = props;
  const StageIcon = SoCIcons[stage];
  const addr = window.location;

  return (
    <li className="grid grid-cols-5 grid-rows-4 border border-wallet-border rounded-sm md:flex md: flex-row md:flex-nowrap md:border-0 md:border-0 md:gap-x-1 md:min-h-11">
      <p className="col-start-1 col-end-4 row-start-1 row-end-2 bg-wallet-bg mr-1 pt-1 font-medium text-center md:hidden">
        {SoCItemSpecificConstants.SoCCellTitle}
      </p>
      <p className="col-start-1 col-end-4 row-start-2 row-end-3 bg-wallet-bg mb-1 mr-1 pb-1 text-center md:min-w-36 md:shrink-0 md:grow-3 md:basis-0 md:text-left md:m-0 md:p-0 md:pl-2 md:content-center">
        {`${vendor} ${model}`}
      </p>
      <p className="col-start-4 col-end-6 row-start-1 row-end-2 bg-wallet-bg pt-1 font-medium text-center md:hidden">
        {SoCItemSpecificConstants.addressCellTitle}
      </p>
      <p className="col-start-4 col-end-6 row-start-2 row-end-3 bg-wallet-bg mb-1 pb-1 text-center md:min-w-32 md:text-left md:shrink-0 md:grow-2 md:basis-0 md:m-0 md:p-0 md:pl-2 md:content-center">
        {address}
      </p>
      <p className="col-start-1 col-end-2 row-start-3 row-end-4 bg-wallet-bg mr-1 pt-1 font-medium text-center md:hidden">
        {SoCItemSpecificConstants.stageCellTitle}
      </p>
      <p className="col-start-1 col-end-2 row-start-4 row-end-5 bg-wallet-bg mr-1 pb-1 flex flex-row justify-center md:min-w-14 md:shrink-0 md:grow md:basis-0 md:m-0 md:p-0 md:flex-col md:items-center *:w-[33px] *:h-[22px]">
        <StageIcon />
      </p>
      <p className="col-start-2 col-end-6 row-start-3 row-end-4 bg-wallet-bg pt-1 font-medium text-center md:hidden">
        {SoCItemSpecificConstants.installationCellTitle}
      </p>
      <p className="col-start-2 col-end-6 row-start-4 row-end-5 pb-1 bg-wallet-bg text-center md:min-w-56 md:text-left md:shrink-0 md:grow-4 md:basis-0 md:p-0 md:pl-2 md:content-center">
        {firmware.length > 0 && address !== null && address.length > 0
          ? <a className="text-brand-blue hover:text-btn-blue-hover" href={`${addr}/${vendor}/${model}`}>{installationAlternatives.yes}</a>
          : installationAlternatives.no
        }
      </p>
    </li>
  )
}

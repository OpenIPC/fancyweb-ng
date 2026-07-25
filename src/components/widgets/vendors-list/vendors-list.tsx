import { vendorsListProps } from './types';

export default function VendorsList(props: vendorsListProps) {
  const { list, curSelected, clickHandler } = props;

  const isLastElem = (cur: number, arr: typeof list) => cur === arr.length - 1;

  const handleClick = (e: MouseEvent) => {
    const letterContainer = e.currentTarget;
    if (letterContainer instanceof HTMLLIElement) {
      const vendor = letterContainer!.getElementsByTagName('span')[0].innerText;
      if (curSelected?.toLowerCase() === vendor.toLowerCase()) return;
      clickHandler(vendor);
    }
  }

  return (
    <div className="max-w-full overflow-x-auto">
      <ul className="pb-2 flex flex-row flex-nowrap text-sm text-text-blue">
        {list.map((vendor: string, i: number) => (
          <li className={`p-[6px] border text-nowrap border rounded-t border-transparent border-b-grey relative ${curSelected && vendor.toLowerCase() === curSelected.toLowerCase() && 'border-b-white border-x-grey border-t-grey *:border-0 hover:text-btn-blue-hover'} hover:border-b-white hover:border-x-grey hover:border-t-grey hover:cursor-pointer *:hover:border-0 hover:text-btn-blue-hover`} onClick={handleClick}>
            {!isLastElem(i, list) && <div className="w-[3px] h-[2px] border border-transparent border-b-grey absolute -bottom-px -right-[2px]"></div>}
            <span>{vendor}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

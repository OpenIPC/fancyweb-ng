import { AbcSelectorProps } from './types';

export default function AbcSelector(props: AbcSelectorProps) {
  const { letters, curSelected, clickHandler } = props;

  const isLastElem = (cur: number, arr: typeof letters) => {
    return cur === arr.length - 1;
  };

  const handleClick = (e: MouseEvent) => {
    const letterContainer = e.currentTarget;
    if (letterContainer instanceof HTMLLIElement) {
      const letter = letterContainer!.getElementsByTagName('span')[0].innerText;
      clickHandler(letter);
    }
  }

  return (
    <div className="max-w-full overflow-x-auto">
      <ul className="
        text-text-blue box-border flex flex-row flex-nowrap overflow-x-auto pb-2
        text-sm
      ">
        <li className={`
          border-b-grey relative rounded-t border border-transparent p-[7px]
          ${curSelected && 'Recommended'.toLowerCase() === curSelected!.toLowerCase() && `
            border-x-grey border-t-grey border-b-white
            *:border-0
          `}
          hover:border-x-grey hover:border-t-grey hover:text-btn-blue-hover
          hover:cursor-pointer hover:border-b-white
          *:hover:border-0
        `} onClick={handleClick}>
          <div className="
            border-b-grey absolute right-[-2px] -bottom-px h-[2px] w-[3px]
            border border-transparent
          "></div>
          <span>Recommended</span>
        </li>
        <li className={`
          border-b-grey relative rounded-t border border-transparent p-[7px]
          text-nowrap
          ${curSelected && 'Full list'.toLowerCase() === curSelected!.toLowerCase() && `
            border-x-grey border-t-grey border-b-white
            *:border-0
          `}
          hover:border-x-grey hover:border-t-grey hover:text-btn-blue-hover
          hover:cursor-pointer hover:border-b-white
          *:hover:border-0
        `} onClick={handleClick}>
          <div className="
            border-b-grey absolute right-[-2px] -bottom-px h-[2px] w-[3px]
            border border-transparent
          "></div>
          <span>Full list</span>
        </li>
        {letters.map((letter: string, i: number) => (
          <li className={`
            border-b-grey relative rounded-t border border-transparent px-[12px]
            py-[7px] text-nowrap
            ${curSelected && letter.toLowerCase() === curSelected!.toLowerCase() && `
              border-x-grey border-t-grey border-b-white
              *:border-0
            `}
            hover:border-x-grey hover:border-t-grey hover:text-btn-blue-hover
            hover:cursor-pointer hover:border-b-white
            *:hover:border-0
          `} onClick={handleClick}>
            {!isLastElem(i, letters) && <div className="
              border-b-grey absolute right-[-2px] -bottom-px h-[2px] w-[3px]
              border border-transparent
            "></div>}
            <span>{letter}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import icons from '../../../assets/icons/social';

export default function ChatChannel({ header, link, text }: {header: string, link: string, text: string}) {

  const { Telegram } = icons;

  return (
    <li className="bg-donban-bg border border-light-blue rounded p-2 w-full list-none">
      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col grow">
          <dl>
            <dt className="text-base font-bold text-text-blue underline">
              <a href={link}>{header}</a>
            </dt>
            <dd className="text-base text-action-blue mt-2">
              {text}
            </dd>
          </dl>
        </div>
        <div className="*:w-[40px] *:h-[40px]">
          <Telegram />
        </div>
      </div>
    </li>
  );
}

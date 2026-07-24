import SocialIcons from '../../../assets/icons/social';
import { socialContants } from './constants';

export default function Socials() {
  return (
    <ul className="flex flex-row max-w-max">
      {socialContants.map((social) => {
        const Icon = SocialIcons[social.title];
        return (
          <li className="transition-colors duration-500 border border-grey-bg first:rounded-l-md last:rounded-r-md hover:border-black">
            <a href={social.link} className="block min-h-10 min-w-10 flex flex-col justify-center items-center *:w-[16px] *:h-[16px]">
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

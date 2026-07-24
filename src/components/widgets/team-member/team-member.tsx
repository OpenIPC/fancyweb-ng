import { TeamMemberProps } from './types';
import bg from '../../../assets/icons/ui/camera-preview-background.svg';
import UIIcons from '../../../assets/icons/social';

export default function TeamMember(props: TeamMemberProps) {
  const { imgSrc, name, bio, socials } = props;

  return (
    <li className="list-none border-wallet-border border rounded-md w-full">
      <div className="aspect-square bg-repeat rounded-t-md" style={`background-image: url(${bg})`}>
        { imgSrc && <img src={imgSrc} className="rounded-t-md w-full"></img> }
      </div>
      <div className="relative p-3 min-h-[160px]">
        <h5 className="text-xl pb-2 font-normal">{name}</h5>
        <p className="text-sm">{bio}</p>
        {socials && socials.length &&
          <ul className="absolute -top-3.5 right-2 max-w-fit flex flex-row gap-x-2">
            {socials.map(social => {
              const Icon = UIIcons[social.icon];
              return (<li className="w-6 h-6 border border-white rounded-full flex flex-col justify-center items-center bg-white">
                <a href={social.link} className="*:w-[20px]"><Icon /></a>
              </li>)
            })}
          </ul>
        }
      </div>
    </li>
  );
}

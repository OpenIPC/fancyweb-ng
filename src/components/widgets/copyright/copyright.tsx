import { copyrightConstants } from './constants/constants';

export default function Copyright() {
  return (
    <div className="max-w-max">
      <span className="font-sans text-sm text-grey">
        {copyrightConstants.text[0]}
        <a
          className="text-brand-blue decoration-double decoration-brand-blue"
          href={copyrightConstants.link.href}
        >
          {copyrightConstants.link.title}
        </a>
        {copyrightConstants.text[1]}
      </span>
    </div>
  );
}

import { Link } from '../../types/types';

export default function HeaderMenuLink(props: Link) {
  const { title, link } = props;

  return (
    <li className="text-white opacity-60 hover:opacity-100 md:px-2">
      <a class="" href={link}>{title}</a>
    </li>
  );
}

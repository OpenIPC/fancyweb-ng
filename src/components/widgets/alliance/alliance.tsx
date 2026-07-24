import AllianceIcons from '../../../assets/icons/alliance';
import H2 from '../../ui/headers/h2/h2';
import { allianceConstants } from './constants';

export default function Alliance() {
  const { OpenIPC, Majestic } = AllianceIcons;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <a href={allianceConstants.openIPC} className="w-[48%]">
          <OpenIPC />
        </a>
        <a href={allianceConstants.majestic} className="w-[48%]">
          <Majestic />
        </a>
      </div>
    </div>
  );
}

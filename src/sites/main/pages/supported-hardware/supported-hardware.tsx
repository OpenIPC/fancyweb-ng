import InformationBanner from '../../../../components/widgets/information-banner';
import H1 from '../../../../components/ui/headers/h1/h1';
import SoCManagedList from '../../../../components/widgets/soc-managed-list';
import { supportedHardwareConstants, socs } from './constants';

export default function SupportedHardware() {
  return (
    <>
      <div className="py-4">
        <H1 content={supportedHardwareConstants.h1} />
      </div>
      <div className="py-4">
        <InformationBanner content={supportedHardwareConstants.informationBannerContent} />
      </div>
      <div>
        <SoCManagedList fullList={socs} />
      </div>
    </>
  );
}

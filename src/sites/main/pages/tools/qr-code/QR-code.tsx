import H1 from '../../../../../components/ui/headers/h1';
import InformationBanner from '../../../../../components/widgets/information-banner';
import type { InformationBannerProps } from '../../../../../components/widgets/information-banner/information-type';
import Paragraph from '../../../../../components/widgets/paragraph/paragraph';
import QRCodeWidget from '../../../../../components/widgets/qr-code-widget';
import Radio from '../../../../../components/ui/form-elems/radio';
import { QRCodeForm } from './components';
import { FormDataType } from './components/qr-code-form/qr-code-form';
import { useState } from 'preact/hooks';

const radioCaptions = ['MeCard', 'OpenIPC'] as const;
type captionVariants = typeof radioCaptions[number];

export default function QRCode() {
  const announcement: InformationBannerProps['content'] = {
    h: 'We do not use any third party services',
    p: 'We do not share your data with anyone. The code is generated locally. Information about the entered data is not saved anywhere. You can be sure that your data is safe. If you have any doubts, please do not use this service.',
  };

  const [ textToCode, setTextToCode ] = useState({
    MeCard: 'WIFI:S:OpenIPC_NFS;T:WPA2;P:project2021;;',
    OpenIPC: 'wlanssid=OpenIPC_NFS\nwlanpass=project2021',
  });

  const [ curVisible, setCurVisible ] = useState<captionVariants>('OpenIPC');

  function applyFormData(formData: FormDataType) {
    const { ssid, password } = formData;
    setTextToCode({
      MeCard: `WIFI:S:${ssid};T:WPA2;P:${password};;`,
      OpenIPC: `wlanssid=${ssid}\nwlanpass=${password}`, 
    });
  }

  function handleRadioChange(caption: captionVariants) {
    setCurVisible(caption);
  }

  return (
    <>
      <div className="py-4">
        <H1 content="Wireless Network QR Code Generator" />
      </div>
      <div className="pb-3">
        <Paragraph content="Generate a QR code with credentials for accessing your wireless network." />
      </div>
      <div className="flex flex-col gap-4 items-center sm:flex-row sm:flex-wrap sm:items-start">
        <div className="max-w-md p-2 border rounded shadow-md w-full sm:basis-[48%] lg:grow lg:basis-[10%]">
          <QRCodeForm applyFormData={applyFormData} />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className={`border border-2 rounded aspect-square bg-grey w-full max-w-80 sm:basis-[48%] sm:shrink ${curVisible === 'MeCard' ? 'block' : 'hidden'}`}>
            <QRCodeWidget textToCode={textToCode.MeCard} />
          </div>
          <div className={`border border-2 rounded aspect-square bg-grey w-full max-w-80 sm:basis-[48%] sm:shrink ${curVisible === 'OpenIPC' ? 'block' : 'hidden'}`}>
            <QRCodeWidget textToCode={textToCode.OpenIPC} />
          </div>
          <Radio name="qr-code-generator" captions={['MeCard', 'OpenIPC']} defaultChecked={1} changeHandler={handleRadioChange}/>
        </div>
        <div className="shrink-0 basis-full lg:shrink lg:grow lg:basis-[10%]">
          <InformationBanner content={announcement} type="information" />
        </div>
      </div>
    </>
  );
}

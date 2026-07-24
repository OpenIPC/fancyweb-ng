import H1 from '../../../../components/ui/headers/h1';
import InformationBanner from '../../../../components/widgets/information-banner/';
import stageIcons from '../../../../assets/icons/socs-info';
import { InstallationGuideForm } from './components/installation-guide-form';
import { guide, saveFirmware } from './constants';
import { useLocation } from 'preact-iso';
import { socs } from '../supported-hardware/constants';
import { FormDataType } from './components/installation-guide-form/Installation-guide-form';
import { useState } from 'preact/hooks';
import icons from '../../../../assets/icons/social';

const sizeMapping = {
  'NOR 8M': '0x800000',
  'NOR 16M': '0x1000000',
  'NOR 32M': '0x2000000',
  'NAND': '',
}

export default function InstallationGuide() {
  const location = useLocation();
  const [ curVendor, curModel ] = location.path.split('/').slice(2);
  const [{ stage }] = socs.filter(({vendor, model}) =>
    vendor.toLowerCase() === curVendor.toLowerCase() &&
    model.toLowerCase() === curModel.toLowerCase()
  );
  const Stage = stageIcons[stage];
  const [ settings, setSettings ] = useState<FormDataType | null>(null);
  const Github = icons['Github'];

  function applyFormData(formData: FormDataType) {
    console.log('Installation form data: ', formData);
    setSettings(formData);
    window.scrollTo(0, 0);
  }

  function formStage() {
    return (
      <>
        <div className="py-4 flex flex-row justify-start items-center gap-x-4">
          <H1 content={`${curVendor} ${curModel}`} />
          <div className="*:w-[44px] *:h-[44px]">
            <Stage />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
          <div className="grow basis-1/3 order-1">
            <InformationBanner content={{h: guide.h, p: guide.p}} />
          </div>
          <div className="max-w-96 grow basis-1/3 border rounded p-2 shadow-md order-3 md:order-2">
            <InstallationGuideForm applyFormData={applyFormData}/>
          </div>
          <div className="grow basis-1/3 order-2 md:order-3">
            <InformationBanner content={{h: saveFirmware.h, p: saveFirmware.p}} type="warning" />
          </div>
        </div>
      </>
    );
  }

  function FirmwareSaving({ settings }: { settings: FormDataType}) {
    console.log(settings);
    const [{ address}] = socs.filter(({vendor, model}) =>
      vendor.toLowerCase() === curVendor.toLowerCase() &&
      model.toLowerCase() === curModel.toLowerCase()
    );

    return (
      <div className="w-full bg-warning-bg border-2 rounded border-warning-border p-4">
        <p className="text-3xl font-medium text-warning-text pb-2">Save the original firmware</p>
        <p className="text-xl font-medium text-warning-text pb-2">Back up your stock firmware, don't skip this part of the installation process!</p>
        <div className="flex flex-col gap-y-4 md:flex-row my-4">
          <p className="text-lg text-warning-text w-full md:w-[40%]">
            OpenIPC U-Boot overwrites the original crypto partition making it impossible to revert to the factory firmware unless you have a full flash backup for this particular camera! To create a full firmware backup start a TFTP server and run these commands in bootloader shell.
          </p>
          <div className="bg-wallet-bg w-full md:w-[60%] p-4 rounded-[4px]">
            <div className="w-full overflow-x-auto flex flex-col gap-y-1">
              <p className="text-nowrap text-red"># Enter commands line by line! Do not copy and paste multiple lines at once!</p>
              <p className="text-nowrap text-warning-text">setenv ipaddr {`${settings['ip-address']}`}; setenv serverip {`${settings['tftp-address']}`}</p>
              <p className="text-nowrap text-warning-text">mw.b {address} 0xff {sizeMapping[settings['mem-chip']]}</p>
              <p className="text-nowrap text-warning-text">sf probe 0; sf read {address} 0x0 {sizeMapping[settings['mem-chip']]}</p>
              <p className="text-nowrap text-warning-text">tftpput {address} {sizeMapping[settings['mem-chip']]} backup-{`${curModel.toLowerCase()}`}-{`${settings['mem-chip'].replace(' ', '').toLowerCase()}`}.bin</p>
              <p className="text-nowrap text-red"># If there is no tftpput but tftp then run this instead</p>
              <p className="text-nowrap text-warning-text pb-2">tftp {address} backup-{`${curModel.toLowerCase()}`}-{`${settings['mem-chip'].replace(' ', '').toLowerCase()}`}.bin {sizeMapping[settings['mem-chip']]}</p>
            </div>
          </div>
        </div>
        <p className="text-lg text-warning-text">
          Please refer to <a className="hover:cursor-pointer text-brand-blue hover:text-btn-blue-hover pt-4 text-right underline" href="https://github.com/openipc/wiki/blob/master/en/installation.md">Installation instructions</a> in the project's wiki for more information.
        </p>
      </div>
    );
  }

  function FirmwareFlashing({ settings }: { settings: FormDataType}) {
    const [{ address}] = socs.filter(({vendor, model}) =>
      vendor.toLowerCase() === curVendor.toLowerCase() &&
      model.toLowerCase() === curModel.toLowerCase()
    );

    return (
      <div className="w-full bg-input-bg-blue border-2 rounded border-light-blue p-4">
        <p className="text-3xl font-medium text-action-blue pb-2">Flash full OpenIPC Firmware image</p>
        <div className="flex flex-col gap-y-2 md:flex-row my-4">
          <div className="text-lg text-action-blue w-full md:w-[40%]">
            <div className="flex flex-row gap-x-3 mb-4">
              <div className="*:w-[40px] *:h-[40px] flex flex-col justify-center">
                <Github />
              </div>
              <div className="flex flex-col justify-center">
                <a className="hover:cursor-pointer text-brand-blue hover:text-btn-blue-hover underline"
                  href="https://github.com/openipc/wiki/blob/master/en/installation.md"
                >
                  Download OpenIPC Firmware ({`${settings['firmware-ver']}`}) image
                </a>
                for {`${curVendor} ${curModel}`} with {`${settings['mem-chip']}`} flash
              </div>
            </div>
            <p className="text-lg text-action-blue">
              The full firmware image consists of bootloader, kernel and root filesystem, and is also suitable for flashing memory chip using a programmer. Please note, the full image does not contain pre-set environment. You still need to add your own MAC address, IP address and other settings.
            </p>
          </div>
          <div className="bg-wallet-bg w-full md:w-[60%] p-4 rounded-[4px]">
            <div className="w-full overflow-x-auto flex flex-col gap-y-1">
              <p className="text-nowrap text-red"># Enter commands line by line! Do not copy and paste multiple lines at once!</p>
              <p className="text-nowrap text-action-blue">setenv ipaddr {`${settings['ip-address']}`}; setenv serverip {`${settings['tftp-address']}`}</p>
              <p className="text-nowrap text-action-blue">mw.b {address} 0xff {sizeMapping[settings['mem-chip']]}</p>
              <p className="text-nowrap text-action-blue">tftpboot {address} openipc-gk7205v210-lite-8mb.bin</p>
              <p className="text-nowrap text-red"># If there is no tftpput but tftp then run this instead</p>
              <p className="text-nowrap text-action-blue">tftp {address}  openipc-gk7205v210-lite-8mb.bin</p>
              <p className="text-nowrap text-action-blue">sf probe 0; sf lock 0;</p>
              <p className="text-nowrap text-action-blue">sf erase 0x0 {sizeMapping[settings['mem-chip']]} ; sf write {address} 0x0 {sizeMapping[settings['mem-chip']]}</p>
              <p className="text-nowrap text-action-blue">reset</p>
              <p className="text-nowrap text-red pb-2"># The camera will restart automatically.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Congrats({ settings }: { settings: FormDataType }) {
    return (
      <div className="w-full bg-input-bg-green border-2 rounded border-input-focus-bg-green p-4">
        <p className="text-3xl font-medium text-action-blue pb-2 text-center">
          Congratulations! At this moment, you have OpenIPC Firmware ({`${settings['firmware-ver']}`}) installed.
        </p>
        <p className="text-base text-action-blue pb-2">
          Open camera's web interface on http://{`${settings['ip-address']}`}/ and sign in using login <b>root</b> and password <b>12345</b>. You will be asked to set up your own secure password once signed in. To access the camera via ssh or UART use same login and password as above.
        </p>
      </div>
    );
  }

  function FirmwareStage(settings: FormDataType) {
    return (
      <>
        <div className="flex flex-col md:flex-row mb-8">
          <div className="grow">
            <div className="pt-4 pb-1 flex flex-row justify-start items-center gap-x-4">
              <H1 content={`Flashing OpenIPC Firmware (${settings['firmware-ver']})`} />
              <div className="*:w-[44px] *:h-[44px]">
                <Stage />
              </div>
            </div>
            <p className="font-bold text-xl">{`on a camera with ${curVendor} ${curModel} SoC and ${settings['mem-chip']} SPI flash chip`}</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="hover:cursor-pointer text-brand-blue hover:text-btn-blue-hover pt-4 text-right" onClick={() => setSettings(null)}>&larr; Go back to setting form</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <InformationBanner content="If you have any problems accessing downloadable files, please feel free to contact us on our [Telegram](https://t.me/OpenIPC) channel." />
        <FirmwareSaving {...{settings}} />
        <FirmwareFlashing {...{settings}} />
        <Congrats {...{settings}} />
      </div>
      </>
    );
  }
  
  return (
    settings
      ? FirmwareStage(settings) 
      : formStage()
  );

}

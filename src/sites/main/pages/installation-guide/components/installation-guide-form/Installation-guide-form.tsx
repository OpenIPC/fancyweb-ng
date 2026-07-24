import Input from '../../../../../../components/ui/form-elems/input';
import icons from '../../../../../../assets/icons/ui';
import MainButton from '../../../../../../components/ui/buttons/main-button';
import { generateRandomMacAddress } from '../../../../../../utils';
import useForm from '../../../../../../utils/hooks/useForm';
import { installationGuideFormSchema } from './form-schema';
import { installationGuideFormValidationSchema } from './form-validation-schema';
import { memChipOpts, firmwareVersOpts, netIfacesOpts, sdCardSlotsOpts } from '../../constants';
import CustomSelect from '../../../../../../components/ui/form-elems/customSelect/CustomSelect';

const { Atom } = icons;

//export type FormDataType = Record<keyof typeof installationGuideFormSchema, string>; 
export type FormDataType = {
  "ip-address": string,
  "tftp-address": string,
  "mem-chip": "NOR 8M" | "NOR 16M" | "NOR 32M" | "NAND",
  "firmware-ver": "Lite" | "Ultimate" | "FPV" | "Rubyfpv" | "VENC",
  "net-ifaces": string,
  "sd-card": string,
}

export default function InstallationGuideForm({ applyFormData }: { applyFormData: (formData: FormDataType) => void }) {
  const { handleOnChange, handelFormButtonClick, formElemsState, formState } = useForm(installationGuideFormSchema, installationGuideFormValidationSchema);

  function handleGenMacAddrIconClick(input: HTMLInputElement, _: Event) {
    input.value = generateRandomMacAddress();
    input.dispatchEvent(new Event('input'));
  }

  function handleFormSubmit(e: Event) {
    if (e.target instanceof HTMLFormElement) {
      e.preventDefault();
      handelFormButtonClick();
      if (formState === 'valid') {
        const formData = Object.entries(formElemsState).reduce((acc, [ name, { value }]) => ({...acc, [name]: value }), {}) as FormDataType;
        applyFormData(formData);
      }
    }
  }

  return (
    <form className="flex flex-col gap-y-1 max-w-96 items-center" onSubmit={handleFormSubmit}>
      <Input elemName="mac-address" type="text" label="Camera MAC address" required={true}
        state={formElemsState['mac-address'].state} placeholder="ff:ff:ff:ff:ff:ff" Icon={Atom} value={formElemsState['mac-address'].value}
        onInput={handleOnChange} iconClickHandler={handleGenMacAddrIconClick} errorText={formElemsState['mac-address'].error}
      />
      <Input elemName="ip-address" type="text" label="Camera IP address" required={true}
        state={formElemsState['ip-address'].state} placeholder="192.168.1.10" value={formElemsState['ip-address'].value}
        onInput={handleOnChange} errorText={formElemsState['ip-address'].error}
      />
      <Input elemName="tftp-address" type="text" label="TFTP server IP address" required={true}
        state={formElemsState['tftp-address'].state} placeholder="192.168.1.254" value={formElemsState['tftp-address'].value}
        onInput={handleOnChange} errorText={formElemsState['tftp-address'].error}
      />
      <CustomSelect state={formElemsState['mem-chip'].state} options={memChipOpts} value={memChipOpts[0].value}
        onChange={handleOnChange} open={false} size="md" elemName="mem-chip" label="Type and size of flash memory chip"
        description="If you are not sure, select NOR 8M"
      />
      <div className="w-full pb-4">
        <CustomSelect state={formElemsState['firmware-ver'].state} options={firmwareVersOpts} value={firmwareVersOpts[0].value}
          onChange={handleOnChange} open={false} size="md" elemName='firmware-ver' label="Firmware version"
        />
      </div>
      <div className="w-full pb-4">
        <CustomSelect state={formElemsState['net-ifaces'].state} options={netIfacesOpts} value={netIfacesOpts[0].value}
          onChange={handleOnChange} open={false} size="md" elemName="net-ifaces" label="Network interface"
        />
      </div>
      <div className="w-full pb-4">
        <CustomSelect state={formElemsState['sd-card'].state} options={sdCardSlotsOpts} value={sdCardSlotsOpts[0].value}
          onChange={handleOnChange} open={false} size="md" elemName="sd-card" label="SD card slot"
        />
      </div>
      <div className="pt-4 pb-2">
        <MainButton type='submit' caption="Generate Installation Guide" size='m' /> 
      </div>
    </form>
  );
}

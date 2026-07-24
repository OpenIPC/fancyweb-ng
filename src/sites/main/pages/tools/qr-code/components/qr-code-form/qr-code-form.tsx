import Input from '../../../../../../../components/ui/form-elems/input';
import MainButton from '../../../../../../../components/ui/buttons/main-button';
import icons from '../../../../../../../assets/icons/ui';
import { useState } from 'preact/hooks';
import useForm from '../../../../../../../utils/hooks/useForm';
import { QRCodeFormSchema } from './form-schema';
import { QRCodeFormValidationSchema } from './form-validation-schema';

export type FormDataType = Record<keyof typeof QRCodeFormSchema, string>; 

export default function QRCodeForm({ applyFormData }: { applyFormData: (formData: FormDataType) => void }) {
  const { ShowPassword, HidePassword } = icons;

  const [passInptType, setPassInptType] = useState('password');
  const { handleOnChange, handelFormButtonClick, formElemsState, formState } = useForm(QRCodeFormSchema, QRCodeFormValidationSchema);

  function handlePassInptIconClick() {
    setPassInptType(passInptType === 'password' ? 'text' : 'password');
  }

  function handleFormSubmit(e: Event) {
    if (e.target instanceof HTMLFormElement) {
      e.preventDefault();
      handelFormButtonClick();
      if (formState === 'valid') {
        const formData: FormDataType = Object.entries(formElemsState).reduce((acc, [ name, { value }]) => ({...acc, [name]: value }), {});
        applyFormData(formData);
      }
    }
  }

  return (
    <form className="flex flex-col w-full items-center" onSubmit={handleFormSubmit}>
      <Input elemName="ssid" type="text" label="SSID" errorText={formElemsState.ssid.error}
        state={formElemsState.ssid.state} placeholder="OpenIPC_HotSpot" onInput={handleOnChange} value={formElemsState.ssid.value} />
      <Input elemName="password" type={passInptType} label="Password" state={formElemsState.password.state} value={formElemsState.password.value}
        onInput={handleOnChange} Icon={passInptType === 'password' ? ShowPassword : HidePassword}
        iconPlace="right" iconClickHandler={handlePassInptIconClick} errorText={formElemsState.password.error}/>
      <div className="pt-3">
      </div>
      <MainButton type="submit" caption="Generate QR Code" size="m" />
    </form>
  );
}

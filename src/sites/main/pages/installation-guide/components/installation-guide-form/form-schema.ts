import type { FormSchema } from '../../../../../../utils/hooks/useForm-types';
import { memChipOpts, firmwareVersOpts, netIfacesOpts, sdCardSlotsOpts } from '../../constants';

export const installationGuideFormSchema: FormSchema = {
  'mac-address': {
    value: '',
    state: 'default',
    error: '',
  },
  'ip-address': {
    value: '192.168.1.10',
    state: 'valid',
    error: '',
  },
  'tftp-address': {
    value: '192.168.1.254',
    state: 'valid',
    error: '',
  },
  'mem-chip': {
    value: memChipOpts[0].value,
    state: 'valid',
    error: '',
  },
  'firmware-ver': {
    value: firmwareVersOpts[0].value,
    state: 'valid',
    error: '',
  },
  'net-ifaces': {
    value: netIfacesOpts[0].value,
    state: 'valid',
    error: '',
  },
  'sd-card': {
    value: sdCardSlotsOpts[0].value,
    state: 'valid',
    error: '',
  },
}

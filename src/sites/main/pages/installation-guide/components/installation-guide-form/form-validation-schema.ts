import type { FormValidationSchema } from '../../../../../../utils/hooks/useForm-types';
import { isNonEmpty, isValidMAC, isValidIP } from '../../../../../../utils/validators';

export const installationGuideFormValidationSchema: FormValidationSchema = {
  'mac-address': [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
    {
      fn: isValidMAC,
      error: 'Invalid MAC address',
    },
  ],
  'ip-address': [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
    {
      fn: isValidIP,
      error: 'Invalid IP address',
    },
  ],
  'tftp-address': [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
    {
      fn: isValidIP,
      error: 'Invalid TFTP IP address',
    },
  ],
  'mem-chip': [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
  ],
  'firmware-ver': [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
  ],
  'net-ifaces': [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
  ],
  'sd-card': [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
  ],
}

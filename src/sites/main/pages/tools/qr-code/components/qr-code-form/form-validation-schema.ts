import informationBanner from "../../../../../../../components/widgets/information-banner"
import {installationAlternatives} from "../../../../../../../components/widgets/soc-list-item/constants"
import type { FormValidationSchema } from "../../../../../../../utils/hooks/useForm-types"
import { isNonEmpty } from '../../../../../../../utils/validators'

export const QRCodeFormValidationSchema: FormValidationSchema = {
  ssid: [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
  ],
  password: [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
    {
      fn: (value: string) => value.length >= 8,
      error: 'The password must to be at least 8 charaters long',
    },
  ],
}

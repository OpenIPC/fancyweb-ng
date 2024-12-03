import { SoCItem } from 'components/widgets/soc-managed-list/types';

import { allwinnerSOCs } from './socs/allwinner';
import { ambarellaSOCs } from './socs/ambarella';
import { anykaSOCs } from './socs/anyka';
import { fullhanSOCs } from './socs/fullhan';
import { gokeSOCs } from './socs/goke';
import { grainMediaSOCs } from './socs/grainmedia';
import { hiSiliconSOCs } from './socs/hisilicon';
import { ingenicSOCs } from './socs/ingenic';
import { mStarSOCs } from './socs/mstar';
import { novatekSOCs } from './socs/novatek';
import { rockchipSOCs } from './socs/rockchip';
import { sigmaStarSOCs } from './socs/sigmastar';
import { tISOCs } from './socs/ti';
import { xiongmaiSOCs } from './socs/xiongmai';

export const socs: SoCItem[] = [
  ...allwinnerSOCs,
  ...ambarellaSOCs,
  ...anykaSOCs,
  ...fullhanSOCs,
  ...gokeSOCs,
  ...grainMediaSOCs,
  ...hiSiliconSOCs,
  ...ingenicSOCs,
  ...mStarSOCs,
  ...novatekSOCs,
  ...rockchipSOCs,
  ...sigmaStarSOCs,
  ...tISOCs,
  ...xiongmaiSOCs,
]

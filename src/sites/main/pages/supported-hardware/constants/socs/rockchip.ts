import { SoCItem } from 'components/widgets/soc-managed-list/types';

const vendor = 'Rockchip';
export const rockchipSOCs: SoCItem[] = [
  {
    vendor: vendor,
    group: 'RV11XX',
    model: 'RV1109',
    address: '',
    stage: 'NEQ',
    bootloader: '',
    firmware: '',
    featured: false,
    core: null,
    ai: null,
    package: null,
    encoder: null,
    memory: null,
  },
  {
    vendor: vendor,
    group: 'RV11XX',
    model: 'RV1126',
    address: '',
    stage: 'RND',
    bootloader: '',
    firmware: 'openipc.rv1126-nor-lite.tgz',
    featured: false,
    core: null,
    ai: null,
    package: null,
    encoder: null,
    memory: null,
  }
]

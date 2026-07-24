import { SoCItem } from 'components/widgets/soc-managed-list/types';

const vendor = 'MStar';
export const mStarSOCs: SoCItem[] = [

  {
    vendor: vendor,
    group: 'INFINITY3',
    model: 'MSC313E',
    address: '0x21000000',
    stage: 'WIP',
    bootloader: 'u-boot-msc313e-universal.bin',
    firmware: 'openipc.msc313e-nor-lite.tgz',
    featured: false,
    core: null,
    ai: null,
    package: null,
    encoder: null,
    memory: null,
  },
  {
    vendor: vendor,
    group: 'INFINITY3',
    model: 'MSC316DC',
    address: '0x21000000',
    stage: 'WIP',
    bootloader: '',
    firmware: 'openipc.msc316dc-nor-lite.tgz',
    featured: false,
    core: null,
    ai: null,
    package: null,
    encoder: null,
    memory: null,
  },
  {
    vendor: vendor,
    group: 'INFINITY3',
    model: 'MSC316DM',
    address: '0x21000000',
    stage: 'WIP',
    bootloader: '',
    firmware: 'openipc.msc316dm-nor-lite.tgz',
    featured: false,
    core: null,
    ai: null,
    package: null,
    encoder: null,
    memory: null,
  }
]

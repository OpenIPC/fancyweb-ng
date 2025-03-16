import { SoCItem } from 'components/widgets/soc-managed-list/types';

const vendor = 'GrainMedia';
export const grainMediaSOCs: SoCItem[] = [
  {
    vendor: vendor,
    group: 'GM8136',
    model: 'GM8135',
    address: '0x2000000',
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
    group: 'GM8136',
    model: 'GM8136',
    address: '0x2000000',
    stage: 'MVP',
    bootloader: '',
    firmware: 'openipc.gm8136-nor-lite.tgz',
    featured: false,
    core: null,
    ai: null,
    package: null,
    encoder: null,
    memory: null,
  }
]

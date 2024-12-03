import { SoCItem } from 'components/widgets/soc-managed-list/types';

const vendor = 'Ambarella';
export const ambarellaSOCs: SoCItem[] = [
  {
    vendor: vendor,
    group: 'S2L',
    model: 'S2L',
    address: '',
    stage: 'RND',
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
    group: 'S3L',
    model: 'S3L',
    address: '',
    stage: 'WIP',
    bootloader: '',
    firmware: 'openipc.ambarella-s3l-nor-lite.tgz',
    featured: false,
    core: null,
    ai: null,
    package: null,
    encoder: null,
    memory: null,
  }
]

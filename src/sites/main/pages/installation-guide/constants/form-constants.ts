export const memChipOpts = [
  {
    value: 'NOR 8M',
    option: 'NOR 8M',
    display: 'NOR 8M',
  },
  {
    value: 'NOR 16M',
    option: 'NOR 16M',
    display: 'NOR 16M',
  },
  {
    value: 'NOR 32M',
    option: 'NOR 32M',
    display: 'NOR 32M',
  },
  {
    value: 'NAND',
    option: 'NAND',
    display: 'NAND',
    disabled: true,
  },
];

export const firmwareVersOpts = [
  {
    value: 'Lite',
    option: 'Lite',
    display: 'Lite',
    disabled: false,
  },
  {
    value: 'Ultimate',
    option: 'Ultimate',
    display: 'Ultimate',
    disabled: true
  },
  {
    value: 'FPV',
    option: 'FPV',
    display: 'FPV',
    disabled: false,
  },
  {
    value: 'Rubyfpv',
    option: 'Rubyfpv',
    display: 'Rubyfpv',
    disabled: false,
  },
  {
    value: 'VENC',
    option: 'VENC',
    display: 'VENC',
    disabled: false,
  }
];

export const netIfacesOpts = [
  {
    value: 'Camera has only Ethernet interface',
    option:'Camera has only Ethernet interface',
    display:'Camera has only Ethernet interface',
    disabled: false,
  },
  {
    value: 'Camera has only wireless interface',
    option: 'Camera has only wireless interface',
    display: 'Camera has only wireless interface',
    disabled: false,
  },
  {
    value: 'Camera has both Ethernet and wireless interfaces',
    option: 'Camera has both Ethernet and wireless interfaces',
    display: 'Camera has both Ethernet and wireless interfaces',
    disabled: false,
  },
];
export const sdCardSlotsOpts = [
  {
    value: 'Camera does not have an SD card slot',
    option: 'Camera does not have an SD card slot',
    display: 'Camera does not have an SD card slot',
    disabled: false,
  },
  {
    value: 'Camera has an SD card slot',
    option: 'Camera has an SD card slot',
    display: 'Camera has an SD card slot',
    disabled: false,
  },
];

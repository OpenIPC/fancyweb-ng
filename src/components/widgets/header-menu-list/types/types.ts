import { Signal } from "@preact/signals";

type Title = {
  title: string,
}

export type Link = Title & {
  link: string,
}

export type Button = Title & {
  children: Link[],
  signal?: Signal,
}

type List = (Link | Button)[];

export type HeaderMenuProps = {
  list: List,
  isMobMenuVisible: boolean,
}

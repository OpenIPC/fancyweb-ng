export type CamData = {
  soc: string,
  date: string,
  firmware: string,
  uptime: number,
  socTemp?: number,
  resolution: string,
  size: number,
}

export type CameraSnapshotProps = {
  id: string,
}

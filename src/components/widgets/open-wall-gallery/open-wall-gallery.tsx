import CameraSnapshot from '../camera-snapshot/camera-snapshot';
import { OpenWallGalleryProps } from './types/open-wall-gallery';

export default function OpenWallGallery(props: OpenWallGalleryProps) {
  const { camIDs } = props;
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
      {camIDs.map(id => <CameraSnapshot id={id} />)}
    </div>
  );
}

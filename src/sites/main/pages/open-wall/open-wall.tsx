import H1 from '../../../../components/ui/headers/h1/h1';
import H2 from '../../../../components/ui/headers/h2/h2';
import OpenWallGallery from '../../../../components/widgets/open-wall-gallery/open-wall-gallery';
import { openWallConstants } from './constants';

export default function OpenWall() {
  return (
    <>
      <div className="py-4">
        <H1 content={openWallConstants.h1}/>
      </div>
      <div className="pt-5 pb-4">
        <H2 content={openWallConstants.h2} />
      </div>
      <OpenWallGallery camIDs={openWallConstants.camIDs} />
    </>
  );
}

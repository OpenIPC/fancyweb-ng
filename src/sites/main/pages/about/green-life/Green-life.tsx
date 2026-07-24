import H1 from '../../../../../components/ui/headers/h1';
import Paragraph from '../../../../../components/widgets/paragraph';
import pcbs from '../../../../../assets/pics/pcbs.webp';
import { greenLifeConstants } from './constants';

export default function GreenLife() {
  return (
    <>
      <div className="py-4">
        <H1 content={greenLifeConstants.h1}/>
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8">
        <div className="flex flex-col gap-y-4 md:basis-2/4">
          <Paragraph content={greenLifeConstants.p1} />
          <Paragraph content={greenLifeConstants.p2} />
          <Paragraph content={greenLifeConstants.p3} />
          <Paragraph content={greenLifeConstants.p4} />
        </div>
        <div className="flex flex-col gap-y-2 md:basis-2/4">
          <img src={pcbs}></img>
        </div>
      </div>
    </>
  );
}

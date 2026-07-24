import H1 from '../../../../../components/ui/headers/h1';
import H2 from '../../../../../components/ui/headers/h2';
import InformationBanner from '../../../../../components/widgets/information-banner';
import Paragraph from '../../../../../components/widgets/paragraph';
import { OurSoftwareConstants } from './constants';

export default function OurSoftware() {
  return (
    <>
      <div className="py-4">
        <H1 content={OurSoftwareConstants.h1}/>
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8">
        <div className="flex flex-col gap-y-2 md:basis-2/4">
          <H2 content={OurSoftwareConstants.h2_1} />
          <dl className="flex flex-col gap-y-2">
            <div>
              <Paragraph content={{...OurSoftwareConstants.p1, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p2, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p3, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p4, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p5, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p6, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p7, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p8, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p9, dl: true}} />
            </div>
          </dl>
        </div>
        <div className="flex flex-col gap-y-2 md:basis-2/4">
          <H2 content={OurSoftwareConstants.h2_2} />
          <div>
            <InformationBanner content={OurSoftwareConstants.inforBannerText} />
          </div>
          <dl className="flex flex-col gap-y-2">
            <div>
              <Paragraph content={{...OurSoftwareConstants.p10, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p11, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p12, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p13, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p14, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p15, dl: true}} />
            </div>
            <div>
              <Paragraph content={{...OurSoftwareConstants.p16, dl: true}} />
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}

import H1 from '../../../../../components/ui/headers/h1';
import H2 from '../../../../../components/ui/headers/h2';
import Paragraph from '../../../../../components/widgets/paragraph';
import InformationBanner from '../../../../../components/widgets/information-banner';
import { ourProjectsConstants } from './constants';

export default function OurProjects() {
  return (
    <>
      <div className="py-4">
        <H1 content={ourProjectsConstants.h1}/>
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8">
        <div className="flex flex-col gap-y-6 md:basis-2/4">
          <div>
            <H2 content={ourProjectsConstants.h2_1} />
            <Paragraph content={ourProjectsConstants.p_1} size='big' />
          </div>
          <div>
            <H2 content={ourProjectsConstants.h2_2} />
            <Paragraph content={ourProjectsConstants.p_2} size='big' />
          </div>
          <div>
            <H2 content={ourProjectsConstants.h2_3} />
            <Paragraph content={ourProjectsConstants.p_3} size='big' />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 md:basis-2/4">
          <H2 content={ourProjectsConstants.h2_4} />
          <InformationBanner content={ourProjectsConstants.inforBannerText} type='information' />
          <div>
            <Paragraph content={ourProjectsConstants.p_4} size='big' />
          </div>
        </div>
      </div>
    </>
  );
}

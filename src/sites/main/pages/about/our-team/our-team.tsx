import H1 from '../../../../../components/ui/headers/h1';
import H2 from '../../../../../components/ui/headers/h2';
import Paragraph from '../../../../../components/widgets/paragraph';
import Team from '../../../../../components/widgets/team';
import { ourTeamConstants, IPCCoreConstants, URLLCandFPVConstants } from './constants';

export default function OurTeam() {
  return (
    <>
      <div className="py-4">
        <H1 content={ourTeamConstants.h1}/>
      </div>
      <Paragraph content={ourTeamConstants.p1} />
      <div className="pt-5 pb-4">
        <H2 content={ourTeamConstants.h2_1} />
      </div>
      <Team members={IPCCoreConstants} />
      <div className="pt-10 pb-4">
        <H2 content={ourTeamConstants.h2_2} />
      </div>
      <Team members={URLLCandFPVConstants} />
      <div className="flex flex-row justify-center pt-8">
        <a href="https://github.com/orgs/OpenIPC/people" className="text-base md:text-lg font-medium underline text-brand-blue max-w-fit">
          View list of all GitHub contributors
        </a>
      </div>
    </>
  );
}

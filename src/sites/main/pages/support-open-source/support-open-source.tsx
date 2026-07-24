import H1 from '../../../../components/ui/headers/h1/h1';
import H2 from '../../../../components/ui/headers/h2/h2';
import Paragraph from '../../../../components/widgets/paragraph/paragraph';
import { supportOpenSourceConstants as constants} from './constants';
import DonateBanner from '../../../../components/widgets/donate-banner/donate-banner';
import donationNinjas from '../../../../assets/pics/donationNinjas.webp';

export default function SupportOpenSource() {
  return (
    <>
      <div className="py-4">
        <H1 content="Support Open Source" />
      </div>
      <div className="md:grid md:grid-cols-[3fr_7fr] md:gap-x-6">
        <div className="flex flex-col gap-y-5">
          <img src={donationNinjas} alt="Brave ninjas collect money" />
          <Paragraph content={constants.part1.p1} />
          <DonateBanner size="small" />
          <Paragraph content={constants.part1.p2} size="small" />
        </div>
        <div className="pt-6 md:pt-0 flex flex-col gap-y-4">
          <H2 content={constants.part2.h2_1} />
          <Paragraph content={constants.part2.p1} />
          <H2 content={constants.part2.h2_2} />
          <Paragraph content={constants.part2.p2} />
          <Paragraph content={constants.part2.p3} />
          <dl class="even:*:pb-4">
            <Paragraph content={constants.part2.p4} />
            <Paragraph content={constants.part2.p5} />
            <Paragraph content={constants.part2.p6} />
            <Paragraph content={constants.part2.p7} />
            <Paragraph content={constants.part2.p8} />
            <Paragraph content={constants.part2.p9} />
            <Paragraph content={constants.part2.p10} />
          </dl>
        </div>
      </div>
    </>
  );
}

import Header from '../../components/widgets/header';
import Footer from '../../components/widgets/footer/footer';
import InformationBanner from '../../components/widgets/information-banner';
import Paragraph from '../../components/widgets/paragraph';
import H2 from '../../components/ui/headers/h2';
import { warning, advice, h2_1, h2_2, genRes, projects } from './constants';
import './index.css';

export function App() {
  return (
    <>
      <Header />
      <main class="flex-auto mx-4 flex flex-col justify-start items-center">
        <div className="max-w-[1240px] w-full py-8">
          <InformationBanner content={warning} type='warning' />
          <div className="pt-4 pb-8">
            <Paragraph content={advice} size='small' />
          </div>
          <div className="flex flex-col sm:flex-row gap-x-20">
            <div className="grow basis-2/4">
              <div className="pb-2">
                <H2 content={h2_1} />
              </div>
              <dl className="[&>*:nth-child(even)]:pb-4">
                <Paragraph content={genRes.p1} />
                <Paragraph content={genRes.p2} />
                <Paragraph content={genRes.p3} />
                <Paragraph content={genRes.p4} />
                <Paragraph content={genRes.p5} />
              </dl>
            </div>
            <div className="grow basis-2/4">
              <div className="pb-2">
                <H2 content={h2_2} />
              </div>
              <dl className="[&>*:nth-child(even)]:pb-4">
                <Paragraph content={projects.p1} />
                <Paragraph content={projects.p2} />
                <Paragraph content={projects.p3} />
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

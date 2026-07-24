import H1 from '../../../../components/ui/headers/h1/h1';
import H2 from '../../../../components/ui/headers/h2/h2';
import Paragraph from '../../../../components/widgets/paragraph/paragraph';
import Alliance from '../../../../components/widgets/alliance/alliance';
import Supporters from '../../../../components/widgets/supporters/supporters';
import { introduction } from './constants';

export default function Introduction() {
  return (
      <>
        <div className="py-4">
          <H1 content={introduction.h1} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[11fr_5fr] gap-x-12">
          <section className="flex flex-col">
            <div className="py-2">
              <H2 content={introduction.h2_1} />
            </div>
            <div className="flex flex-col gap-y-4">
              <Paragraph content={introduction.p1} />
              <Paragraph content={introduction.p2} />
              <div className="flex flex-col gap-y-2 pt-6 pb-4">
                <H2 content='For quick dive into an OpenIPC project:' />
                <a href="https://github.com/OpenIPC/wiki/blob/master/en/installation.md" className="text-xl font-medium underline text-brand-blue max-w-fit">
                  Read installation instructions
                </a>
                <a href="https://openipc.org/supported-hardware" className="text-xl font-medium underline text-brand-blue max-w-fit">
                  Get precompiled binary files
                </a>
                <a href="https://github.com/OpenIPC" className="text-xl font-medium underline text-brand-blue max-w-fit">
                  View source code on GitHub
                </a>
              </div>
              <Paragraph content={introduction.p3} />
              <Paragraph content={introduction.p4} size="small" />
              <H2 content={introduction.h2_2} />
              <Paragraph content={introduction.p5} />
              <Paragraph content={introduction.p6} />
              <Paragraph content={introduction.p7} />
              <Paragraph content={introduction.p8} />
            </div>
          </section>
          <section className="flex flex-col gap-y-4">
            <div className="pt-4 md:pt-0">
              <H2 content="Alliance" />
            </div>
            <Alliance />
            <div className="pt-4 md:pt-0">
              <H2 content="Supporters" />
            </div>
            <Supporters />
          </section>
        </div>
      </>
  );
}

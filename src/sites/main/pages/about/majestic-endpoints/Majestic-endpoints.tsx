import H1 from '../../../../../components/ui/headers/h1';
import H2 from '../../../../../components/ui/headers/h2';
import Paragraph from '../../../../../components/widgets/paragraph/paragraph';
import { majesticEndpointsConstants } from './constants';

export default function MajesticEndpoints() {
  function split(text: string) {
    return text.split(/(\[.*?\]\(.*?\))/ig).filter(el => el);
  }

  function getTextLink(chunk: string) {
    return {
      text: Array.from(chunk.matchAll(/\[(.*?)\]\((.*?)\)/gi))[0][1],
      link: Array.from(chunk.matchAll(/\[(.*?)\]\((.*?)\)/gi))[0][2]
    };
  }

  function getFootnoteLink(chunk: string) {
    return {
      footnoteText: Array.from(chunk.matchAll(/\[\^(.*?)(,?)\]\((.*?)\)/gi))[0][1],
      footnoteComma: Array.from(chunk.matchAll(/\[\^(.*?)(,?)\]\((.*?)\)/gi))[0][2],
      footnoteLink: Array.from(chunk.matchAll(/\[(\^.*?)(,?)\]\((.*?)\)/gi))[0][3]
    };
  }

  function pText(text: string) {
    return split(text).map(chunk => {
      if (/\[\^(.*?)\]\((.*?)\)/gi.test(chunk)) {
        return (
          <sup>
            <a href={getFootnoteLink(chunk).footnoteLink} className="text-brand-blue">
              {getFootnoteLink(chunk).footnoteText}
            </a>
            {getFootnoteLink(chunk).footnoteComma && <span>, </span>}
          </sup>
        );
      } else if (/\[(.*?)\]\((.*?)\)/gi.test(chunk)) {
        return (
          <a href={getTextLink(chunk).link} className="text-brand-blue underline">{getTextLink(chunk).text}</a>
        );
      }
      else {
        return chunk;
      }
    });
  }

  return (
    <>
      <div className="py-4">
        <H1 content={majesticEndpointsConstants.h1}/>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-28">
        <div className="flex flex-col gap-y-4">
          <div className="text-brand-blue">
            <H2 content={majesticEndpointsConstants.h2_1} />
            <dl className="flex flex-col gap-y-2 text-black pt-2">
              {majesticEndpointsConstants.video.map(el =>
                <div>
                  <dt className="font-bold wrap-break-word">{pText(el.h)}</dt>
                  <dd>{pText(el.p)}</dd>
                </div>
              )}
            </dl>
          </div>
          <div className="text-brand-blue">
            <H2 content={majesticEndpointsConstants.h2_2} />
            <dl className="flex flex-col gap-y-2 text-black pt-2">
              {majesticEndpointsConstants.audio.map(el =>
                <div>
                  <dt className="font-bold">{el.h}</dt>
                  { el.m
                    ? <dd><p>{pText(el.p)}</p><p className="text-sm">{pText(el.m)}</p></dd>
                    : <dd>{pText(el.p)}</dd>
                  }
                </div>
              )}
            </dl>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 pt-4 md:pb-0">
          <div className="text-brand-blue">
            <H2 content={majesticEndpointsConstants.h2_3} />
            <dl className="flex flex-col gap-y-2 text-black pt-2">
              {majesticEndpointsConstants.stillImages.map(el =>
                <div>
                  <dt className="font-bold">{el.h}</dt>
                  { el.optParams
                    ? (
                      <dd>
                        <p>{el.p}</p>
                        <p className="text-sm">{pText(el.m)}</p>
                        <ul className="pl-8">
                          {el.optParams.map(param => <li className="text-sm list-disc">{param}</li>)}
                        </ul>
                      </dd>
                    )
                    : <dd>{pText(el.p)}</dd>
                  }
                </div>
              )}
            </dl>
          </div>
          <div className="text-brand-blue">
            <H2 content={majesticEndpointsConstants.h2_4} />
            <dl className="flex flex-col gap-y-2 text-black pt-2">
              {majesticEndpointsConstants.nightAPI.map(el =>
                <div>
                  <dt className="font-bold">{pText(el.h)}</dt>
                  <dd>{pText(el.p)}</dd>
                </div>
              )}
            </dl>
          </div>
          <div className="text-brand-blue">
            <H2 content={majesticEndpointsConstants.h2_5} />
            <dl className="flex flex-col gap-y-2 text-black pt-2">
              { majesticEndpointsConstants.monitoring.map(el => (
                <div>
                  <dt className="font-bold">{pText(el.h)}</dt>
                  <dd>{pText(el.p)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <ul className="pt-6">
        {majesticEndpointsConstants.footnotes.map((el, i) => <li id={`fn${i+1}`} className="text-sm wrap-break-word">{i + 1}. {el}</li>)}
      </ul>
      <div className="pt-6">
        <Paragraph content={majesticEndpointsConstants.wikiLink} />
      </div>
    </>
  );
}

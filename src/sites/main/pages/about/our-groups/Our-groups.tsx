import H1 from '../../../../../components/ui/headers/h1';
import InformationBanner from '../../../../../components/widgets/information-banner';
import Paragraph from '../../../../../components/widgets/paragraph';
import ChatChannel from '../../../../../components/widgets/chat-channel';
import WannabeKey from '../../../../../components/widgets/wannabe-key';
import ModalImage from '../../../../../components/widgets/modal-image';
import telegramTranslation from '../../../../../assets/pics/telegram-translation.webp';
import { useState } from 'preact/hooks';
import { ourGroupsConstants } from './constants';

export default function OurGroups() {
  const pic = { pic: telegramTranslation, alt: 'Telegram translation example' };

  const [ picToShow, setPicToShow ] = useState<{src: string, alt: string} | null>(null);
  function handleImgClick(e: Event) {
    if (e.target instanceof HTMLImageElement) {
      const src = e.target.getAttribute('src');
      const alt = e.target.getAttribute('alt');
      if (src && alt) setPicToShow({ src, alt });
    }
  }

  function closeModalImage() {
    setPicToShow(null);
  }

  return (
    <>
      <div className="py-4">
        <H1 content={ourGroupsConstants.h1}/>
      </div>
      <Paragraph content={ourGroupsConstants.p1} />
      <div className="py-4">
        <InformationBanner content={ourGroupsConstants.warnBanner} type="information" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
        { ourGroupsConstants.chats.map(chat => <ChatChannel header={chat.header} link={chat.link} text={chat.text} />) }
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8 pt-8">
        <div className="basis-1/2">
          <h2 className="text-xl text-brand-blue">Message Formatting</h2>
          <p className="py-1">Did you know that Telegram Messenger allows you to use formatting to emphasize important parts of the message and make information easier to grasp?</p>
          <p>Select a text fragment and press a key combo:</p>
          <dl className="max-w-60 flex flex-col gap-y-2 pt-3">
            <div className="flex flex-row items-center">
              <dt className="text-sm font-bold min-w-32">Bold</dt>
              <dd className="flex flex-row gap-x-1"><WannabeKey caption="Ctrl" /><WannabeKey caption="B" /></dd>
            </div>
            <div className="flex flex-row items-center">
              <dt className="text-sm font-bold min-w-32">Italic</dt>
              <dd className="flex flex-row gap-x-1"><WannabeKey caption="Ctrl" /><WannabeKey caption="I" /></dd>
            </div>
            <div className="flex flex-row items-center">
              <dt className="text-sm font-bold min-w-32">Underline</dt>
              <dd className="flex flex-row gap-x-1"><WannabeKey caption="Ctrl" /><WannabeKey caption="U" /></dd>
            </div>
            <div className="flex flex-row items-center">
              <dt className="text-sm font-bold min-w-32">Strikeout</dt>
              <dd className="flex flex-row gap-x-1"><WannabeKey caption="Ctrl" /><WannabeKey caption="Shift" /><WannabeKey caption="X" /></dd>
            </div>
            <div className="flex flex-row items-center">
              <dt className="text-sm font-bold min-w-32">Monospace</dt>
              <dd className="flex flex-row gap-x-1"><WannabeKey caption="Ctrl" /><WannabeKey caption="Shift" /><WannabeKey caption="M" /></dd>
            </div>
            <div className="flex flex-row items-center">
              <dt className="text-sm font-bold min-w-32">Hyperlink</dt>
              <dd className="flex flex-row gap-x-1"><WannabeKey caption="Ctrl" /><WannabeKey caption="K" /></dd>
            </div>
          </dl>
        </div>
        <div className="basis-1/2">
          <h2 className="text-xl text-brand-blue">Chat Translation</h2>
          <p className="py-1 pb-4">Did you know that Telegram messenger has a built-in translation engine that allows you to read messages written in foreign languages? Users with premium accounts can <a className="underline text-brand-blue" href="https://telegram.org/blog/profile-pics-emoji-translations#translating-entire-chats">translate entire chats</a> on the fly, but even a regular account can <a className="underline text-brand-blue" href="https://telegram.org/blog/reactions-spoilers-translations#message-translation">translate individual messages</a> with the click of a button.</p>
          <img src={pic.pic} alt={pic.alt} className="hover:cursor-zoom-in" onClick={handleImgClick}/>
        </div>
      </div>
      { picToShow && <ModalImage src={picToShow.src} alt={picToShow.alt} close={closeModalImage}/> }
    </>
  );
}

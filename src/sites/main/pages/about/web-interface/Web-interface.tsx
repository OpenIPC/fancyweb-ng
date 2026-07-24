import H1 from '../../../../../components/ui/headers/h1';
import ModalImage from '../../../../../components/widgets/modal-image';
import { useState } from 'preact/hooks';
import { webInerfaceContants } from './constants';
import pic1 from '../../../../../assets/pics/web-interface/1.jpg';
import pic2 from '../../../../../assets/pics/web-interface/2.jpg';
import pic3 from '../../../../../assets/pics/web-interface/3.jpg';
import pic4 from '../../../../../assets/pics/web-interface/4.jpg';
import pic5 from '../../../../../assets/pics/web-interface/5.jpg';
import pic6 from '../../../../../assets/pics/web-interface/6.jpg';
import pic7 from '../../../../../assets/pics/web-interface/7.jpg';
import pic8 from '../../../../../assets/pics/web-interface/8.jpg';
import pic9 from '../../../../../assets/pics/web-interface/9.jpg';
import pic10 from '../../../../../assets/pics/web-interface/10.jpg';
import pic11 from '../../../../../assets/pics/web-interface/11.jpg';
import pic12 from '../../../../../assets/pics/web-interface/12.jpg';

export default function WebInterface() {
  const pics = [
    { pic: pic1, alt: 'Device status' },
    { pic: pic2, alt: 'Camera preview' },
    { pic: pic3, alt: 'Majestic settings' },
    { pic: pic4, alt: 'Diagnostic messages' },
    { pic: pic5, alt: 'Network settings' },
    { pic: pic6, alt: 'Timezone' },
    { pic: pic7, alt: 'Telegram bot' },
    { pic: pic8, alt: 'Motion guard' },
    { pic: pic9, alt: 'Firmware' },
    { pic: pic10, alt: 'Majestic debugging' },
    { pic: pic11, alt: 'Send to email' },
    { pic: pic12, alt: 'Reset things' }
  ];
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
        <H1 content={webInerfaceContants.h1}/>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
        {
          pics.map(pic => <img src={pic.pic} alt={pic.alt} className="hover:cursor-zoom-in" onClick={handleImgClick}></img>)
        }
      </div>
      { picToShow && <ModalImage src={picToShow.src} alt={picToShow.alt} close={closeModalImage}/> }
    </>
  );
}

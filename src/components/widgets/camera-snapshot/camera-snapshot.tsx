import { CameraSnapshotProps, CamData } from './types';
import { useEffect, useState, useRef } from 'preact/hooks';
import UIIcons from '../../../assets/icons/ui';
import snapshot from '../../../assets/pics/snapshot.jpg';
import Hls from 'hls.js';

export default function CameraSnapshot(props: CameraSnapshotProps) {
  //const { id } = props;
  const { CameraPreloader } = UIIcons;
  const [camData, setCamData] = useState<CamData>({
    soc: '',
    date: '',
    firmware: '',
    uptime: 0,
    socTemp: 0,
    resolution: '',
    size: 0,
  });
  const [loading, setLoading] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    setCamData({...camData,
      soc: 'HI3518CV100 + MT9P006',
      date: '2024-05-30 16:45:05 UTC',
      firmware: 'OpenIPC 2.3.05.27-lite, majestic',
      uptime: 53,
      socTemp: 45.78,
      resolution: '1920x1080',
      size: 84624,
    });
    //setTimeout(() => setLoading(false), 2000);
    const videoSrc = 'http://localhost:4000/index.m3u8';
    if (Hls.isSupported()) {
      const config = {
        lowLatencyMode: false,
        enableWorker: true,
        backBufferLength: 60,
      };
      const hls = new Hls(config);
      hls.on(Hls.Events.MEDIA_ATTACHED, function() {
        console.log('Video tag and hls.js are attached');
      });
      hls.on(Hls.Events.MANIFEST_PARSED, function(_, data) {
        console.log('manifest loaded, found ' + data.levels.length + ' quality level');
      });
      hls.loadSource(videoSrc);
      hls.attachMedia(video.current);
    }
  });

  return (
    <div className="border-wallet-border border rounded-md">
      { loading
        ? <><div className={`min-w-40 aspect-video relative after:absolute after:inset-0 after:content-[''] after:bg-[url('/src/assets/icons/ui/camera-preview-background.svg')] after:bg-repeat after:bg-size-[20px_20px] after:opacity-25`}>
            <div className="flex flex-row justify-center items-center absolute inset-0 z-10 *:w-12 *:h-12">
              <CameraPreloader />
            </div>
          </div>
          <div className="p-2 pt-4 animate-pulse">
            <div className="flex flex-row flex-nowrap justify-between gap-x-2">
              <div className="w-[48%] h-[20px] rounded bg-wallet-border"></div>
              <div className="w-[48%] h-[20px] rounded bg-wallet-border"></div>
            </div>
            <div className="w-[48%] h-[14px] rounded bg-wallet-border mt-[2px]"></div>
            <div className="w-[48%] h-[20px] rounded bg-wallet-border my-[8px]"></div>
            <div className="w-[48%] h-[20px] rounded bg-wallet-border"></div>
          </div></>
        : <>
            <div className="min-w-40 aspect-video">
              <video className="min-w-40 w-full aspect-video" ref={video} autoplay></video>
            </div>
            <div className="p-2 pt-4">
              <div className="flex flex-row flex-nowrap justify-between gap-x-4">
                <div className="max-w-[48%] relative hover:after:content-[attr(data-descr)] hover:after:absolute hover:after:-top-8 hover:after:left-2 hover:after:font-bold hover:after:text-nowrap hover:after:border hover:after:p-1 hover:after:rounded hover:after:bg-white hover:after:text-xs" {...(camData.soc && {'data-descr': camData.soc})}>
                  <p className="font-bold text-sm w-full text-nowrap truncate">{camData.soc}</p>
                </div>
                <div className="max-w-[48%] relative hover:after:content-[attr(data-descr)] hover:after:absolute hover:after:-top-8 hover:after:right-2 hover:after:text-nowrap hover:after:border hover:after:p-1 hover:after:rounded hover:after:bg-white hover:after:text-xs" data-descr={camData.date}>
                  <p className="text-sm w-full text-nowrap truncate">{camData.date}</p>
                </div>
              </div>
              <p className="text-brand-blue text-xs">{camData.firmware}</p>
              <div className="max-w-max flex flex-row flex-nowrap justify-start gap-x-1 py-2 text-nowrap relative hover:after:content-[attr(data-descr)] hover:after:text-xs hover:after:absolute hover:after:-top-5 hover:after:right-2 hover:after:text-nowrap hover:after:border hover:after:p-1 hover:after:rounded hover:after:bg-white" {...(camData.socTemp && {'data-descr': `SoC temperature: ${camData.socTemp} °C`})}>
                <p className="text-sm">{`Uptime: ${camData.uptime} ${camData.uptime}${camData.socTemp ? ' ,' : ''}`}</p>
                {camData.socTemp && <p className="text-sm truncate">SoC temperature: {camData.socTemp} °C</p>}
              </div>
              <p className="text-sm">{camData.resolution}, {camData.size} bytes</p>
            </div>
          </>
      }
    </div>
  );
}

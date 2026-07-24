export const majesticEndpointsConstants = {
  h1: 'Majestic Endpoints',
  h2_1: 'Video',
  h2_2: 'Audio',
  h2_3: 'Still Images',
  h2_4: 'Night API',
  h2_5: 'Monitoring',
  video: [
    {
      h: 'http://192.168.1.10/mjpeg',
      p: 'MJPEG video stream.',
    },
    {
      h: 'http://192.168.1.10/video.mp4',
      p: 'fMP4 video stream.',
    },
    {
      h: 'rtsp://username:password@192.168.1.10/stream=0',
      p: 'RTSP main stream (video0).',
    },
    {
      h: 'rtsp://username:password@192.168.1.10/stream=1',
      p: 'RTSP substream (video1).',
    },
    {
      h: 'http://192.168.1.10/hls',
      p: 'HLS live-streaming in web browser.',
    },
    {
      h: 'http://192.168.1.10/webrtc',
      p: 'WebRTC live-streaming in web browser.',
    },
    {
      h: 'http://192.168.1.10/mjpeg.html',
      p: 'MJPEG & MP3 live-streaming in web browser.',
    },
  ],
  audio: [
    {
      h: 'http://192.168.1.10/audio.opus',
      p: 'Opus audio stream.',
    },
    {
      h: 'http://192.168.1.10/audio.pcm',
      p: 'Raw PCM audio stream.',
    },
    {
      h: 'http://192.168.1.10/audio.m4a',
      p: 'AAC audio stream.',
    },
    {
      h: 'http://192.168.1.10/audio.mp3',
      p: 'MP3 audio stream.',
    },
    {
      h: 'http://192.168.1.10/audio.alaw',
      p: 'A-law compressed audio stream.',
    },
    {
      h: 'http://192.168.1.10/audio.ulaw',
      p: 'μ-law compressed audio stream.',
    },
    {
      h: 'http://192.168.1.10/audio.g711a',
      p: 'G.711 A-law audio stream.',
    },
    {
      h: 'http://192.168.1.10/play_audio',
      p: 'Play audio file on camera\'s speaker.[^1,](#fn1)[^3](#fn3)',
      m: 'Accepts POST requests with audio file as a parameter.',
    },
  ],
  stillImages: [
    {
      h: 'http://192.168.1.10/image.jpg',
      p: 'Snapshot in JPEG format.',
      m: 'Optional parameters:[^2,](#fn2)[^4](#fn4)',
      optParams: [
        'width, height - size of resulting image',
        'qfactor - JPEG quality factor (1-99)',
        'color2gray - convert to grayscale',
        'crop - crop resulting image as 16x16x320x320',
      ],
    },
    {
      h: 'http://192.168.1.10/image.heif',
      p: 'Snapshot in HEIF format.',
    },
    {
      h: 'http://192.168.1.10/image.yuv420',
      p: 'Snapshot in YUV420 format.',
    },
    {
      h: 'http://192.168.1.10/image.dng',
      p: 'Snapshot in Adobe DNG format (raw).[^5](#fn5)',
    },
  ],
  nightAPI: [
    {
      h: 'http://192.168.1.10/night/on',
      p: 'Turn on night mode.',
    },
    {
      h: 'http://192.168.1.10/night/off',
      p: 'Turn off night mode.',
    },
    {
      h: 'http://192.168.1.10/night/toggle',
      p: 'Toggle current night mode.',
    },
  ],
  monitoring: [
    {
      h: 'http://192.168.1.10/api/v1/config.json',
      p: 'Actual Majestic config in JSON format.',
    },
    {
      h: 'http://192.168.1.10/metrics',
      p: 'Node exporter for [Prometheus](https://prometheus.io/)',
    },
  ],
  footnotes: [
    'Only HiSilicon and Goke SoCs.',
    'Only HiSilicon SoCs v2 and up.',
    'E.g. ffplay -ar 48000 -ac 1 -f s16le http://192.168.1.10/audio.pcm',
    'E.g. http://192.168.1.10/image.jpg?width=640&height=480&qfactor=50&color2gray=1&crop=80x32x512x400',
    'https://en.wikipedia.org/wiki/Digital_Negative',
  ],
  wikiLink: 'More examples available [in our wiki](https://github.com/OpenIPC/wiki/blob/master/en/majestic-streamer.md)',
}

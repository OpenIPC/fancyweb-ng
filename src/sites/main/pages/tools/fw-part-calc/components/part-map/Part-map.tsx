import type { SliceData, PartMapData } from './part-map-types';

export default function PartitionMap({ slices, freeSpace }: PartMapData) {
  
  function getStyle(slice: SliceData) {
    const { color } = slice;
    const bgs = {
      'partition0': 'bg-partition0',
      'partition1': 'bg-partition1',
      'partition2': 'bg-partition2',
      'partition3': 'bg-partition3',
      'partition4': 'bg-partition4', 
      'partition5': 'bg-partition5', 
      'partition6': 'bg-partition6',
      'partition7': 'bg-partition7',
    };

    return `${bgs[color]}`;
  }

  return (
    <div className="w-full h-8 bg-light-grey flex flex-row border-0 rounded-md overflow-hidden relative">
      {
        !!slices.length && slices.map((slice) => (<div className={`${getStyle(slice)}`} style={`width:${slice.width}%;`}></div>))
      }
      <div className="absolute inset-0 flex flex-row justify-center items-center">
        <span className="text-lg text-dark-grey">Free space: {freeSpace}</span>
      </div>
    </div>
  );
}

import H1 from '../../../../../components/ui/headers/h1';
import HighResTimer from '../../../../../components/widgets/high-res-timer';

export default function HighResolutionTimer() {
  return (
    <>
      <div className="py-4">
        <H1 content="High Resolution Timer" />
      </div>
      <HighResTimer />
    </>
  );
}

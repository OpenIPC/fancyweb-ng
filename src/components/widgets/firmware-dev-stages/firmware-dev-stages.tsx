import Paragraph from '../paragraph/paragraph';
import { firmwareDevStagesConstants, firmwareDevStagesConstantsH2 } from './constants';
import stageIcons from '../../../assets/icons/socs-info';
import { FunctionComponent } from 'preact';
import H2 from '../../ui/headers/h2';

const getIcon = (icon: keyof typeof stageIcons) => stageIcons[icon];

const FirmwareDevStages: FunctionComponent = () => {
  return (
    <div className="border rounded p-4 flex flex-col gap-y-4 bg-stages-bg border-stages-border">
      <H2 content={firmwareDevStagesConstantsH2} />
      <dl className="flex flex-col gap-y-4">
        {firmwareDevStagesConstants.map(stage => (<div className="flex flex-col gap-y-1"><Paragraph content={{...stage, dl: true, icon: getIcon(stage.stage)}} size="small" /></div>))}
      </dl>
    </div>
  );
}

export default FirmwareDevStages;

import { type Options } from 'react-markdown';
import ExpandableTab, {
  ExpandableTabProps,
} from '../ui/ExpandableTab/ExpandableTab';
import Markdown from '../ui/Markdown/Markdown';

interface MarkdownPreviewerProps
  extends Pick<Options, 'children'>,
    Pick<ExpandableTabProps, 'isExpanded' | 'setIsExpanded'> {}

const MarkdownPreviewer = ({
  isExpanded,
  setIsExpanded,
  children,
}: MarkdownPreviewerProps) => {
  return (
    <ExpandableTab
      label='Previewer'
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}>
      <div className='bg-columbia-blue px-4 py-2 shadow-md border-medium-jungle-green border min-h-[200px] flex-1'>
        <Markdown>{children}</Markdown>
      </div>
    </ExpandableTab>
  );
};

export default MarkdownPreviewer;

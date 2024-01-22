import React from 'react';
import ExpandableTab, {
  ExpandableTabProps,
} from '../ui/ExpandableTab/ExpandableTab';

interface MarkdownEditorProps
  extends Pick<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      'value' | 'onChange'
    >,
    Pick<ExpandableTabProps, 'isExpanded' | 'setIsExpanded'> {}

const MarkdownEditor = ({
  isExpanded,
  setIsExpanded,
  value,
  onChange,
}: MarkdownEditorProps) => {
  return (
    <ExpandableTab
      label='Editor'
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}>
      <textarea
        value={value}
        onChange={onChange}
        className='flex-1 min-h-[200px] px-4 py-2 border border-medium-jungle-green w-full bg-columbia-blue resize-y outline-none shadow-md'
      />
    </ExpandableTab>
  );
};

export default MarkdownEditor;

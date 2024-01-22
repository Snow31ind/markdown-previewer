import React from 'react';
import FreeCodeCampIcon from '../icons/FreeCodeCampIcon';
import CompressIcon from '../icons/CompressIcon';
import ExpandIcon from '../icons/Expandlcon';

export interface ExpandableTabProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  isExpanded: boolean;
  setIsExpanded: (isEpxanded: boolean) => void;
}

const ExpandableTab = ({
  label,
  children,
  isExpanded,
  setIsExpanded,
  className = '',
  ...props
}: ExpandableTabProps) => {
  const iconClassName = 'cursor-pointer hover:text-medium-aquamarine';

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCompress = () => {
    setIsExpanded(false);
  };

  return (
    <div
      {...props}
      className={`${isExpanded ? 'min-h-screen' : ''} flex flex-col`}>
      <div>
        <div className='flex items-center justify-between border border-medium-jungle-green bg-verdigris px-3 py-1 shadow-md'>
          <div>
            <FreeCodeCampIcon />
            <span className='ml-2 font-bold'>{label}</span>
          </div>
          {isExpanded ? (
            <CompressIcon onClick={handleCompress} className={iconClassName} />
          ) : (
            <ExpandIcon onClick={handleExpand} className={iconClassName} />
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default ExpandableTab;

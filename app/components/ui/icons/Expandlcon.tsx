import React from 'react';

interface ExpandIconProps extends React.HTMLAttributes<HTMLElement> {}

const ExpandIcon = ({ className, ...props }: ExpandIconProps) => {
  return <i {...props} className={`fa fa-arrows-alt ${className}`}></i>;
};

export default ExpandIcon;

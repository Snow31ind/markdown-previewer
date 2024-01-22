interface CompressIconProps extends React.HTMLAttributes<HTMLElement> {}

const CompressIcon = ({ className, ...props }: CompressIconProps) => {
  return <i {...props} className={`fa fa-compress ${className}`}></i>;
};

export default CompressIcon;

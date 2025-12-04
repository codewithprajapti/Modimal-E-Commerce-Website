import { cn } from '../../../utils/cn';

export default function H5({ className, children, ...props }) {
  return (
    <h5
      className={cn(
        'text-[12px] md:text-[20px] font-bold leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </h5>
  );
}

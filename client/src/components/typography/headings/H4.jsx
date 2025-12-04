import { cn } from '../../../utils/cn';

export default function H4({ className, children, ...props }) {
  return (
    <h4
      className={cn(
        'text-[14px] md:text-[24px] font-bold leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

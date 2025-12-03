import { cn } from '../../../utils/cn';

export default function H3({ className, children, ...props }) {
  return (
    <h3
      className={cn(
        'text-[16px] md:text-[32px] font-bold leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

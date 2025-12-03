import { cn } from '../../../utils/cn';

export default function H1({ className, children, ...props }) {
  return (
    <h1
      className={cn(
        'text-[24px] md:text-[44px] font-bold leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

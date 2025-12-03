import { cn } from '../../../utils/cn';

export default function Display2({ className, children, ...props }) {
  return (
    <h1
      className={cn('text-[56px] font-bold leading-tight', className)}
      {...props}
    >
      {children}
    </h1>
  );
}

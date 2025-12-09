import { cn } from '../../../utils/cn';

export default function BXS({ className, children, ...props }) {
  return (
    <p
      className={cn('font-normal text-[10px] md:text-xs', className)}
      {...props}
    >
      {children}
    </p>
  );
}

import { cn } from '../../../utils/cn';

export default function H6({ className, children, ...props }) {
  return (
    <h6
      className={cn('text-[16px] font-bold leading-tight', className)}
      {...props}
    >
      {children}
    </h6>
  );
}

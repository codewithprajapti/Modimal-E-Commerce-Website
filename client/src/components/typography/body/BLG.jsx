import { cn } from '../../../utils/cn';

export default function BLG({ className, children, ...props }) {
  return (
    <p className={cn('font-normal text-sm md:text-lg', className)} {...props}>
      {children}
    </p>
  );
}

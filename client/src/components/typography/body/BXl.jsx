import { cn } from '../../../utils/cn';

export default function BXl({ className, children, ...props }) {
  return (
    <p className={cn('font-normal md:text-xl', className)} {...props}>
      {children}
    </p>
  );
}

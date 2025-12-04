import { cn } from '../../../utils/cn';

export default function OLG({ className, children, ...props }) {
  return (
    <p className={cn('font-normal text-sm')} {...props}>
      {children}
    </p>
  );
}

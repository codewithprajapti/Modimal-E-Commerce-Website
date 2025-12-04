import { cn } from '../../../utils/cn';

export default function CLG({ className, children, ...props }) {
  return (
    <p className={cn('font-semibold md:text-sm text-xs', className)} {...props}>
      {children}
    </p>
  );
}

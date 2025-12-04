import { cn } from '../../../utils/cn';

export default function OSM({ className, children, ...props }) {
  return (
    <p className={cn('font-semibold text-xs'.className)} {...props}>
      {children}
    </p>
  );
}

import { cn } from '../../../utils/cn';

export default function BSM({ className, children, ...props }) {
  return <p className={cn('font-normal text-xs md:text-sm', className)}>{children}</p>;
}

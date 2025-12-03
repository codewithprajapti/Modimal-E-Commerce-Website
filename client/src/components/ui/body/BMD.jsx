import { cn } from '../../../utils/cn';

export default function BMD({ className, children, ...props }) {
  return <p className={cn('font-normal text-sm md:text-base', className)}>{children}</p>;
}
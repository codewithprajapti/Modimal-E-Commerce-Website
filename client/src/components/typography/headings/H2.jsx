import { cn } from '../../../utils/cn';

export default function H2({ className, children, ...props }) {
  return (
    <h2
      className={cn('text-[20px] md:text-[40px] font-bold leading-tight', className)}
      {...props}
    >
      {children}
    </h2>
  );
}



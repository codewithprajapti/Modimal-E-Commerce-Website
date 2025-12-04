import { cn } from '../../../utils/cn';
export default function ButtonSM({ className, children, ...props }) {
  return (
    <button className={cn('font-normal text-sm cursor-pointer px-2 py-2',className)} {...props}>
      {children}
    </button>
  );
}

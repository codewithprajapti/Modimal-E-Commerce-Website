import { cn } from '../../../utils/cn';

export default function ButtonLG({ className, children, ...props }) {
  return <button className={cn('font-normal text-base cursor-pointer px-2 py-2',className)} {...props}> {children} </button>;
}

import { cn } from "../../../utils/cn"

export default function CMD({ className, children, ...props }) {
  return <p className={cn('font-semibold md:text-xs text-xs',className)} {...props}>{children}</p>;
}

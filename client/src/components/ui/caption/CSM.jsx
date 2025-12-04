import { cn } from "../../../utils/cn"

export default function CSM({ className, children, ...props }) {
  return <p className={cn('font-semibold md:text-[10px] text-xs',className)} {...props}>{children}</p>;
}

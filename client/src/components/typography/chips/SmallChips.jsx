import { cn } from '../../../utils/cn';
import { BSM } from '../body/';
export default function SmallChips({ className, lbel, ...props }) {
  return (
    <span className={cn('bg-white px-6 py-1.5 ', className)} {...props}>
      <BSM> {lbel} </BSM>
    </span>
  );
}

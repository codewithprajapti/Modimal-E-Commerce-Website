import { cn } from '../../../utils/cn';
import { BSM } from '../body/';
export default function SmallChips({ className, lbel, icon,...props }) {
  return (
    <span className={cn('bg-white px-6 py-1.5 ', className)} {...props}>
      <BSM className={'flex justify-between'}> {lbel} {icon} </BSM>
    </span>
  );
}

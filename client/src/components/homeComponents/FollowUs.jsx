import followUs from '../../assets/Landing Images/Follow Us.png';
import { H3 } from '../typography/headings';


export default function FollowUs() {
  return (
    <div className="flex flex-col gap-5">
      <H3> Follow us @modimal </H3>
      <img src={followUs} alt="followUs" />
    </div>
  );
}

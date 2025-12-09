import heroImg from '../../assets/hero.png';
import { ButtonLG } from '../typography/buttons';

export default function Hero() {
  return (
    <div
      className="w-full h-[87vh] bg-cover bg-center flex flex-col px-20 pt-60"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div>
        <p className="text-black font-lato italic text-[34px] flex flex-col gap-1">
          <span> Elegance In </span>
          <span> Simplicity, Earth's </span>
          <span> Harmony </span>
        </p>

        <ButtonLG className="bg-white px-16 mt-10 text-black hover:bg-gray-ededed active:bg-gray-dfdfdf">
          New In
        </ButtonLG>
      </div>
    </div>
  );
}

import Image from '../assets/RegisterImage.png';
import { H3 } from '../components/typography/headings';
import { ButtonSM } from '../components/typography/buttons';
import { BSM } from '../components/typography/body';
import Apple from '../assets/icons/AppleIcon.svg';
import Google from '../assets/icons/GoogleIcon.svg';
import Facebook from '../assets/icons/FacebookIcon.svg';
import Input from '../components/ui/Input';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const registerNavigate = () => {
    navigate('/register');
  };
  return (
    <div className="flex flex-wrap h-fit px-20 mt-7 gap-10">
      <div className="w-[40vw]  border-0 border-red-500">
        <img src={Image} alt="Left Image" />
      </div>
      <div className="w-[40vw] flex flex-col items-center py-20 border-0 border-green-500">
        <div className="px-20">
          <H3 className="text-black">Login</H3>
        </div>
        <div className="border-0 w-full px-20 mt-10 flex flex-col gap-5 items-start">
          <Input id={'email'} label={'Email'} type="email" />
          <Input id={'password'} label={'Password'} type="password" />

          <ButtonSM className="text-primary-500 hover:text-primary-600 cursor-pointer px-0 py-0">
            Forgot Your Password?
          </ButtonSM>
          <ButtonSM className="bg-primary-600 w-full text-white hover:bg-primary-700 active:bg-primary-750">
            Log In
          </ButtonSM>
        </div>

        <p className="text-xs mt-5">Or</p>

        <div className="flex border-0 mt-5 gap-5">
          <img className="cursor-pointer" src={Apple} alt="Apple" />
          <img className="cursor-pointer" src={Google} alt="Google" />
          <img className="cursor-pointer" src={Facebook} alt="Facebook" />
        </div>
        <BSM className="mt-5 px-18 text-center leading-6">
          New To Modimal? <span> </span>
          <span
            className="text-primary-500 cursor-pointer"
            onClick={registerNavigate}
          >
            Create An Account
          </span>
        </BSM>
      </div>
    </div>
  );
}

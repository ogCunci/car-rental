import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 bg-white border-b border-b-slate-400">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Cunci Cars Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div className="flex justify-center items-center gap-2">
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white border border-primary-blue min-w-[120px]"
          />
          <CustomButton
            title="Register"
            btnType="button"
            containerStyles="text-white rounded-full bg-primary-blue min-w-[120px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

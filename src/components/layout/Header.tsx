import Link from "next/link";
import Logo from "/public/Logo.ico";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
  return (
    <header className="static top-0 ">
      <Wrapper>
        <div className="flex justify-between bg-white sticky top-0 py-4 items-center">
          {/* Logo */}
          <div>
            <Image src={Logo} alt="Panaverse Dao Logo" height={70} />
          </div>
          {/* Navigation Bar */}
          <ul className="flex space-x-8 font-semibold ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href="/Courses">Courses</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

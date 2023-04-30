import Link from "next/link"
import Logo from "/public/Logo.ico"
import Image from "next/image"
import Wrapper from "@/components/shared/Wrapper"

const Header = () => {
  return (
    <Wrapper>
      <header className="flex justify-between max-w-screen-xl mx-auto bg-white py-4 sticky top-0 items-center">
        {/* Logo */}
        <div>
          {/* <h2 className="text-xl font-bold ">Panaverse Dao</h2> */}
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
      </header>
    </Wrapper>
  )
}

export default Header

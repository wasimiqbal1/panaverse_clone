import Link from "next/link";
import Logo from "/public/Logo.ico";
import Image from "next/image";

const Header = () => {
  return (
  
  <header className="flex justify-between max-w-screen-xl mx-auto bg-white py-6 px-2 sticky top-0 items-center">

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
        <li>Courses</li>
    </ul>



       
    </header>
  )
};

export default Header;

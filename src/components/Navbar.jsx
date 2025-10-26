import Logo from "./Logo"; // import your own component
const Navbar = () => {
    return (
        <div className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
            <Logo />
            <nav>
                <ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-16 ">
                    <li className="">
                        <a
                        href="#"
                        className="border-b-3 border-[#FCB700] py-1 duration-200 hover:font-bold"
                        >
                        Orders
                        </a>
                    </li>
                    <li className="">
                        <a
                        href="#"
                        className="border-b-3 border-[#FCB700] py-1 duration-200 hover:font-bold"
                        >
                        Foods
                        </a>
                    </li>
                    <li className="">
                        <a
                        href="#"
                        className="border-b-3 border-[#FCB700] py-1 duration-200 hover:font-bold"
                        >
                        Tables
                        </a>
                    </li>
                    <li className="">
                        <a
                        href="#"
                        className="border-b-3 border-[#FCB700] py-1 duration-200 hover:font-bold"
                        >
                        Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
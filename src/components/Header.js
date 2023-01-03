import React, {useState} from 'react';

const Header = () => {
    const [menu, setMenu] = useState(false)

    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <img src="./img/logo.svg" alt="Logo"/>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className={"hover:text-darkGrayishBlue"}>Pricing</a>
                    <a href="#" className={"hover:text-darkGrayishBlue"}>Product</a>
                    <a href="#" className={"hover:text-darkGrayishBlue"}>About Us</a>
                    <a href="#" className={"hover:text-darkGrayishBlue"}>Careers</a>
                    <a href="#" className={"hover:text-darkGrayishBlue"}>Community</a>
                </div>
                <a href="#"
                   className="hidden md:block  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                    Get Started
                </a>

                <button className={`${menu ? 'open' : ''} block hamburger md:hidden focus:outline-none`}
                        onClick={() => setMenu(prev => !prev)}>
                    <span className="hamburger-top"/>
                    <span className="hamburger-middle"/>
                    <span className="hamburger-bottom"/>
                </button>
            </div>

            <div className="md:hidden">
                <div
                    className={`${menu ? 'flex' : 'hidden'} absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                    <a href="#">Pricing</a>
                    <a href="#">Product</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Community</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
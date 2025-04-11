
import { useState, useRef, useEffect } from 'react';

function Logo() {
    return (
        <div className="font-[Ribeye_Marrow] text-2xl text-center col-span-2 p-3 ">BOOKNIE</div>
    )
}

function Search() {
    return (
        <>
            <div className="col-start-3 col-end-7 mt-2 mb-2">
                <div className="flex rounded-md border-1 border-oat overflow-hidden max-w-md mx-auto">
                    <input type="email" placeholder="Search in library..."
                        className="w-full outline-none bg-oat text-olive text-sm px-4 py-3 placeholder-olive" />
                    <button type='button' className="flex items-center justify-center bg-olive px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-oat">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}


function Lists() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="col-start-9 col-end-10 relative" ref={dropdownRef}>
            <button
                type="button"
                className="px-3 py-2 rounded-md text-m font-medium text-oat transition-colors focus:bg-oat focus:text-olive hover:bg-oat hover:text-olive focus:relative"
                aria-label="Menu"
                onClick={handleToggle}
            >
                Lists
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <ul className="py-2 text-sm text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Избранное</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Коллекция 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Коллекция 2</li>
                    </ul>
                    <div className="border-t border-gray-200">
                        <button className="w-full px-4 py-2 text-left text-sm text-blue-600 hover:bg-gray-100">
                            Редактировать
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function Friends() {
    return (
        <>
            <div className="col-start-10 col-end-11 relative">
                <button
                    type="button"
                    className="px-3 py-2 rounded-md text-m font-medium text-oat transition-colors focus:bg-oat focus:text-olive hover:bg-oat hover:text-olive focus:relative"
                    aria-label="Menu"
                    onClick={() => { }}
                >
                    Friends
                </button>
            </div >
        </>
    )
}

function Favourite() {
    return (
        <>
            <div className="col-start-8 col-end-9 relative">
                <button
                    type="button"
                    className="px-3 py-2 rounded-md text-m font-medium text-oat transition-colors focus:bg-oat focus:text-olive hover:bg-oat hover:text-olive focus:relative"
                    onClick={() => { }}
                >
                    Favourite
                </button>
            </div >
        </>
    )
}

function Profile() {
    return (
        <>
            <div className="col-start-7 col-end-8 relative">
                <button
                    type="button"
                    className="px-3 py-2 rounded-md text-m font-medium text-oat transition-colors focus:bg-oat focus:text-olive hover:bg-oat hover:text-olive focus:relative"
                    aria-label="Menu"
                    onClick={() => { }}
                >
                    Profile
                </button>
            </div >
        </>
    )
}

function Login() {
    return (
        <></>
    )
}

function Logout() {
    return (
        <>
            <div className="col-start-12 col-end-13 relative">
                <button
                    type="button"
                    className="px-3 py-2 rounded-md text-m font-medium text-oat transition-colors focus:bg-oat focus:text-olive hover:bg-oat hover:text-olive focus:relative"
                    aria-label="Menu"
                    onClick={() => { }}
                >
                    Logout
                </button>
            </div >
        </>
    )
}



function Navbar() {
    return (
        <>
            <Logo />
            <Search />
            <Profile />
            <Favourite />
            <Lists />
            <Friends />
            <Logout />
        </>
    )
}

function Header() {
    return (
        <div className="bg-olive text-oat col-span-full items-center grid grid-cols-12 gap-x-4">
            <Navbar />
        </div>
    )
}

export default Header;

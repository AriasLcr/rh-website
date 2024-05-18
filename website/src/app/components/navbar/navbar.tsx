
export default function Navbar() {
    return (
        <header className="flex  w-full h-20 top-0 sticky bg-white"> 
            <nav className="flex items-center grow">
                <ul className="flex grow px-7">
                    {/* <li className="p-2"><a href="">Home</a></li> */}
                    <li className="py-2 px-5"><a href="">Merch</a></li>
                    <li className="py-2 px-5"><a href="">About</a></li>
                </ul>
            </nav>
            <div className="flex items-centerjustify-evenly">
                
            </div>
        </header>
    );
}

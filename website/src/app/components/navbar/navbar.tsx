
export default function Navbar() {
    return (
        <>
            <header className="flex bg-green-500 w-full h-20 top-0 sticky">
                <div className="flex p-5 w-1/6 items-center">
                    <p>RH Logo</p>
                </div>
                <nav className="flex items-center grow">
                    <ul className="flex justify-evenly grow">
                        <li className="p-2"><a href="">Home</a></li>
                        <li className="p-2"><a href="">Art</a></li>
                        <li className="p-2"><a href="">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

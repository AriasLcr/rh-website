import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavbarProps {
    className?: string;
}


const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const currentPath = usePathname();

    return (
        <header className={className}> 
            <nav className="flex items-center grow justify-evenly">
                {currentPath !== "/" &&(
                    <Link href="/">Home</Link>
                )}
                <Link href="/Merch">Merch</Link>
                <Link href="/About">About</Link>
            </nav>
            <div className="flex items-center grow justify-evenly">
                <div className="flex items-center">
                    <Link href="/Contact">
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
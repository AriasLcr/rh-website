import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavbarProps {
    className?: string;
}


const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const currentPath = usePathname();

    return (
        <header className={className}> 
            <nav className="flex items-center grow justify-start">
                {currentPath !== "/" &&(
                    <Link href="/" className="mx-10">Home</Link>
                )}
                <Link href="/Merch" className="mx-10">Merch</Link>
                <Link href="/About" className="mx-10">About</Link>
            </nav>
            <div className="flex items-center grow justify-end mx-10">
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
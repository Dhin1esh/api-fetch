import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white flex items-center justify-between py-2 px-5">
            <div>
                <h1>logo</h1>
            </div>
            <div>
                <ul className="flex items-center gap-10">
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/contact"> Contact</Link></li>
                    <li><Link to="/about"> about</Link></li>
                    <li><Link to="/skills"> skills</Link></li>
                </ul>
            </div>
        </nav>
    );
}
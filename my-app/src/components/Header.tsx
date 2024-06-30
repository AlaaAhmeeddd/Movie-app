import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
    return (
        <div className="lg:px-10 px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex gap-4'>
                    <MenuItem title="Home" href="/" Icon={AiFillHome} />
                    <MenuItem title="About" href="/about" Icon={BsFillInfoCircleFill} />
                </div>
                <Link href="/" className="flex gap-1 items-center">
                    <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
                    <span className="text-xl hidden sm:inline">Clone</span>
                </Link>
            </div>
        </div>
        
    )
}

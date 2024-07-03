"use client";
import Link from "next/link"
import { useSearchParams } from "next/navigation";

type navbarItemType = {
    title: string,
    param: string,
}
export default function NavBarItem({title , param}: navbarItemType) {
    const searchParam = useSearchParams();
    const searchName = searchParam.get("genre")
    return (
        <div>
            <Link href={`/?genre=${param}`} 
                className={`font-semibold lg:text-lg hover:text-amber-500 transition-colors duration-300 
                ${searchName === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''}`}>
                {title}
            </Link>
        </div>
    )
}

import Link from 'next/link';
import { IconType } from 'react-icons';

type propsType = {
    title: string,
    href: string,
    Icon: IconType,
}
export default function MenuItem({title, href, Icon}: propsType) {
    return (
        <div>
            <Link href={href} className='hover:text-amber-500 transition-all'>
                <p className='uppercase sm:block hidden text-sm'>{title}</p>
                <Icon className='sm:hidden text-2xl'/>
            </Link>
        </div>
    )
}

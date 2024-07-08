import Image from "next/image";

export default function loading() {
    return (
        <div className="flex items-center justify-center">
            <Image src="spinner.svg" alt="loading..." width={50} height={50} />
        </div>
    )
}

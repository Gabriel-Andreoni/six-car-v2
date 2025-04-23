import Link from "next/link"

export function Header() {
    return (
        <header className="w-full flex items-center justify-center">
            <nav className="w-[50%] h-[50px] mt-4 flex items-center justify-center rounded-2xl shadow-2xl border border-gray-100">
                <ul className="w-full h-full flex items-center gap-4">
                    <li className="p-4 hover:bg-violet-500 cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4 hover:bg-violet-500 cursor-pointer">
                        <Link href="/carros">Carros</Link>
                    </li>
                    <li className="p-4 hover:bg-violet-500 cursor-pointer">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
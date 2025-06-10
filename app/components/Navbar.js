// components/Navbar.js
import Link from "next/link";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hey Chef!", href: "/chef" },
  { label: "Developer Chef!", href: "/software" },
  { label: "Trader Chef", href: "/trader" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-[#18181b] text-white shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* <span className="text-2xl font-bold text-green-500">Zeki Mert Dik</span> */}
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors duration-200 hover:text-green-400 hover:scale-105"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

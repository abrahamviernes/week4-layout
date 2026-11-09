
import Link from "next/link";

const navigation = [
  {
    href: "/",
    label: "Home",
    icon: "M3 10l9-7 9 7v11h-6v-7H9v7H3z",
  },
  {
    href: "/about",
    label: "About",
    icon: "M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10",
  },
  {
    href: "/#projects",
    label: "Projects",
    icon: "M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: "M3 5h18v14H3zM3 6l9 7 9-7",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-full shrink-0 bg-green-900 text-white md:w-52">
      <nav
        aria-label="Sidebar navigation"
        className="flex flex-wrap gap-2 p-4 md:flex-col md:gap-3"
      >
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            >
              <path d={item.icon} />
            </svg>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

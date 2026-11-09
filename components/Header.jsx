export default function Header() {
  return (
    <header className="bg-green-900 px-8 py-5 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-2xl font-bold">Laurus Studio</h1>

        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:text-green-200">Home</a>
          <a href="#" className="hover:text-green-200">About</a>
          <a href="#" className="hover:text-green-200">Projects</a>
          <a href="#" className="hover:text-green-200">Contact</a>
        </nav>
      </div>
    </header>
  );
}
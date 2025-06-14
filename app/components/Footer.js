export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800/60 bg-[#18181b] py-6 mt-12">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zekimert Dik. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

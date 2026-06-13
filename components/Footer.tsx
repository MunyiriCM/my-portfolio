export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-6 px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-gray-500">
        <p>© {year} Mark Munyiri</p>
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
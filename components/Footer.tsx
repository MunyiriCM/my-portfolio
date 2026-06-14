export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-700 py-6 px-6 bg-gray-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-gray-400">
        <p>© {year} Mark Munyiri</p>
        <div className="flex gap-4">
          <a href="https://github.com/MunyiriCM" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/mark-ciira-1a1a332a4/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
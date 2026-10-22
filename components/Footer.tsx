export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid #E8E4DD", padding: "28px 24px", backgroundColor: "#F7F5F2" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", fontSize: "14px", color: "#78716C" }}>
        <p>© {year} Mark Ciira · Nairobi, Kenya</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="https://github.com/MunyiriCM" target="_blank" rel="noopener noreferrer" className="hover-link" style={{ color: "#44403C", textDecoration: "none" }}>GitHub</a>
          <a href="https://www.linkedin.com/in/mark-ciira-1a1a332a4/" target="_blank" rel="noopener noreferrer" className="hover-link" style={{ color: "#44403C", textDecoration: "none" }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
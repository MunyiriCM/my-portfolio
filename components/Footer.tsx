export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid #E8E4DD", padding: "24px", backgroundColor: "#F7F5F2" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px", color: "#78716C" }}>
        <p>© {year} Mark Ciira</p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="https://github.com/MunyiriCM" target="_blank" rel="noopener noreferrer" style={{ color: "#78716C", textDecoration: "none" }}>GitHub</a>
          <a href="https://linkedin.com/in/markmunyiri" target="_blank" rel="noopener noreferrer" style={{ color: "#78716C", textDecoration: "none" }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
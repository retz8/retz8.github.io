import ThumbFrame from "./ThumbFrame";

// Pastiche: fact, knowledge and wisdom docs, and the UI an agent builds from them.
// Drawn on the portfolio redesign canvas; markup kept as drawn.
export default function PasticheThumb() {
  return (
    <ThumbFrame tone="light" style={{ padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", fontFamily: "'Geist Mono', monospace", fontSize: "11px" }}>
      <div style={{ position: "relative", width: "150px", height: "104px", flex: "none" }}>
        <div style={{ position: "absolute", left: "0", top: "0", width: "118px", height: "62px", background: "#ffffff", border: "1px solid #d6d3d1", borderRadius: "6px", padding: "8px 10px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ color: "#78716c" }}>fact</span>
          <span style={{ width: "70%", height: "5px", borderRadius: "3px", background: "#e7e5e4" }} />
        </div>
        <div style={{ position: "absolute", left: "16px", top: "21px", width: "118px", height: "62px", background: "#ffffff", border: "1px solid #d6d3d1", borderRadius: "6px", padding: "8px 10px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ color: "#78716c" }}>knowledge</span>
          <span style={{ width: "60%", height: "5px", borderRadius: "3px", background: "#e7e5e4" }} />
        </div>
        <div style={{ position: "absolute", left: "32px", top: "42px", width: "118px", height: "62px", background: "#ffffff", border: "1px solid #a8a29e", borderRadius: "6px", padding: "8px 10px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ color: "#1c1917" }}>wisdom</span>
          <span style={{ width: "80%", height: "5px", borderRadius: "3px", background: "#d6d3d1" }} />
          <span style={{ width: "55%", height: "5px", borderRadius: "3px", background: "#e7e5e4" }} />
        </div>
      </div>
      <span aria-hidden="true" style={{ fontFamily: "Geist, sans-serif", fontSize: "16px", color: "#a8a29e" }}>→</span>
      <div style={{ width: "150px", height: "96px", flex: "none", background: "#ffffff", border: "1px solid #d6d3d1", borderRadius: "6px", padding: "12px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "8px" }}>
        <span style={{ width: "60%", height: "7px", borderRadius: "4px", background: "#1c1917" }} />
        <span style={{ width: "85%", height: "5px", borderRadius: "3px", background: "#e7e5e4" }} />
        <span style={{ width: "70%", height: "5px", borderRadius: "3px", background: "#e7e5e4" }} />
        <div style={{ display: "flex", gap: "6px", marginTop: "auto" }}>
          <span style={{ width: "44px", height: "16px", borderRadius: "4px", background: "#1c1917" }} />
          <span style={{ width: "44px", height: "16px", borderRadius: "4px", border: "1px solid #d6d3d1", boxSizing: "border-box" }} />
        </div>
      </div>
    </ThumbFrame>
  );
}

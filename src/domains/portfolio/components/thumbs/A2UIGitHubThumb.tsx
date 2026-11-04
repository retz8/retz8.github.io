import ThumbFrame from "./ThumbFrame";

// A2UI GitHub: a stack of generated GitHub pages, the front one answering a prompt.
// Drawn on the portfolio redesign canvas; markup kept as drawn.
export default function A2UIGitHubThumb() {
  return (
    <ThumbFrame style={{ background: "#eaeef2", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="max-sm:[zoom:.82]" style={{ position: "relative", width: "400px", height: "116px", flex: "none" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "-28px", top: "14px", width: "400px", height: "102px", borderRadius: "8px", background: "#ffffff", border: "1px solid #d0d7de", opacity: "0.45" }} />
        <div aria-hidden="true" style={{ position: "absolute", left: "-14px", top: "7px", width: "400px", height: "109px", borderRadius: "8px", background: "#ffffff", border: "1px solid #d0d7de", opacity: "0.75" }} />
        <div style={{ position: "absolute", inset: "0", borderRadius: "8px", background: "#ffffff", border: "1px solid #d0d7de", boxShadow: "0 8px 24px rgba(31, 35, 40, 0.10)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ height: "28px", flex: "none", display: "flex", alignItems: "center", gap: "8px", padding: "0 8px", borderBottom: "1px solid #d0d7de", background: "#f6f8fa" }}>
            <span aria-hidden="true" style={{ fontSize: "12px", color: "#59636e" }}>←</span>
            <span style={{ flex: "1", minWidth: "0", height: "18px", borderRadius: "6px", background: "#ffffff", border: "1px solid #d0d7de", display: "flex", alignItems: "center", gap: "6px", padding: "0 6px", boxSizing: "border-box" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: "9px", color: "#59636e", border: "1px solid #d0d7de", borderRadius: "3px", padding: "0 3px", lineHeight: "11px" }}>⌘K</span>
              <span style={{ fontSize: "10px", color: "#1f2328", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>which of these are ready to merge?</span>
            </span>
          </div>
          <div style={{ flex: "1", padding: "8px 12px", display: "flex", flexDirection: "column", gap: "7px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10px", color: "#1f2328" }}>
              <span style={{ color: "#0969da" }}>a2ui-project/a2ui</span>
              <span style={{ color: "#59636e" }}>/</span>
              <span style={{ fontWeight: "600" }}>Pull Requests</span>
              <span style={{ fontSize: "9px", padding: "0 5px", borderRadius: "999px", background: "#d1d9e0" }}>11</span>
              <span style={{ marginLeft: "auto", fontSize: "9px", color: "#9a6700", border: "1px solid #d4a72c", borderRadius: "999px", padding: "0 6px" }}>Needs Review</span>
            </div>
            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", border: "2px solid #1a7f37", boxSizing: "border-box", flex: "none" }} />
              <span style={{ width: "62%", height: "5px", borderRadius: "3px", background: "#d1d9e0" }} />
              <span style={{ marginLeft: "auto", width: "34px", height: "4px", borderRadius: "2px", background: "#eaeef2" }} />
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", border: "2px solid #1a7f37", boxSizing: "border-box", flex: "none" }} />
              <span style={{ width: "48%", height: "5px", borderRadius: "3px", background: "#d1d9e0" }} />
              <span style={{ marginLeft: "auto", width: "28px", height: "4px", borderRadius: "2px", background: "#eaeef2" }} />
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", border: "2px solid #1a7f37", boxSizing: "border-box", flex: "none" }} />
              <span style={{ width: "56%", height: "5px", borderRadius: "3px", background: "#d1d9e0" }} />
              <span style={{ marginLeft: "auto", width: "38px", height: "4px", borderRadius: "2px", background: "#eaeef2" }} />
            </span>
          </div>
        </div>
      </div>
    </ThumbFrame>
  );
}

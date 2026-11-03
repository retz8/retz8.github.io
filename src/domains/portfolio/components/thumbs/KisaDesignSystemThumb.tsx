import ThumbFrame from "./ThumbFrame";

// KISA Design System: tokens, into the component library, into umichkisa.com.
// Drawn on the portfolio redesign canvas; markup kept as drawn.
export default function KisaDesignSystemThumb() {
  return (
    <ThumbFrame style={{ background: "#f1f2f4", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div className="max-sm:[zoom:.54]" style={{ position: "relative", width: "612px", height: "124px", flex: "none" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "150px", zIndex: "1" }}>
          <div style={{ height: "104px", borderRadius: "10px", boxSizing: "border-box", boxShadow: "0 6px 18px rgba(0, 21, 44, 0.10)", background: "#00152c", padding: "14px 12px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }}>
            <span style={{ borderRadius: "4px", background: "#f4c000" }} />
            <span style={{ borderRadius: "4px", background: "#fff1c4" }} />
            <span style={{ borderRadius: "4px", background: "#00365c" }} />
            <span style={{ borderRadius: "4px", background: "#ffffff" }} />
            <span style={{ borderRadius: "4px", background: "#e3e4e7" }} />
            <span style={{ borderRadius: "4px", background: "#7d8088" }} />
            <span style={{ borderRadius: "4px", background: "#df2225" }} />
            <span style={{ borderRadius: "4px", background: "#37a643" }} />
          </div>
          <span style={{ display: "block", marginTop: "7px", paddingLeft: "2px", fontSize: "11px", color: "#7d8088", whiteSpace: "nowrap" }}>oklch tokens</span>
        </div>
        <div style={{ position: "absolute", left: "186px", top: "0px", width: "190px", zIndex: "2" }}>
          <div style={{ height: "104px", borderRadius: "10px", boxSizing: "border-box", boxShadow: "0 6px 18px rgba(0, 21, 44, 0.10)", background: "#ffffff", border: "1px solid #d2d4d8", overflow: "hidden", display: "flex" }}>
            <span style={{ width: "72px", flex: "none", borderRight: "1px solid #e3e4e7", padding: "10px 6px", display: "flex", flexDirection: "column", gap: "3px", fontSize: "10px", color: "#7d8088" }}>
              <span style={{ padding: "2px 6px", borderRadius: "4px", background: "#fff1c4", color: "#00152c", fontWeight: "600" }}>Button</span>
              <span style={{ padding: "2px 6px" }}>Input</span>
              <span style={{ padding: "2px 6px" }}>Dialog</span>
              <span style={{ padding: "2px 6px" }}>Toast</span>
            </span>
            <span style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f8fa" }}>
              <span style={{ height: "28px", padding: "0 16px", borderRadius: "6px", background: "#00152c", color: "#f4c000", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center" }}>Apply</span>
            </span>
          </div>
          <span style={{ display: "block", marginTop: "7px", paddingLeft: "2px", fontSize: "11px", color: "#7d8088", whiteSpace: "nowrap" }}>@umichkisa-ds/web</span>
        </div>
        <div style={{ position: "absolute", left: "412px", top: "0px", width: "200px", zIndex: "3" }}>
          <div style={{ height: "104px", borderRadius: "10px", boxSizing: "border-box", boxShadow: "0 6px 18px rgba(0, 21, 44, 0.10)", background: "#ffffff", border: "1px solid #d2d4d8", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <span style={{ height: "22px", flex: "none", background: "#00152c", display: "flex", alignItems: "center", gap: "10px", padding: "0 10px" }}>
              <span style={{ fontSize: "10px", fontWeight: "700", color: "#ffffff" }}>KISA</span>
              <span style={{ marginLeft: "auto", fontSize: "9px", color: "#c7ccd4" }}>Board</span>
              <span style={{ fontSize: "9px", color: "#f4c000" }}>Pocha</span>
            </span>
            <span style={{ flex: "1", padding: "9px 12px 10px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#0c0f17", letterSpacing: "-0.4px", whiteSpace: "nowrap" }}>UMich KISA</span>
              <span style={{ width: "85%", height: "4px", borderRadius: "2px", background: "#e3e4e7" }} />
              <span style={{ width: "60%", height: "4px", borderRadius: "2px", background: "#e3e4e7" }} />
              <span style={{ alignSelf: "flex-start", marginTop: "auto", height: "20px", padding: "0 10px", borderRadius: "6px", background: "#00152c", color: "#f4c000", fontSize: "10px", fontWeight: "600", display: "flex", alignItems: "center" }}>Join KISA</span>
            </span>
          </div>
          <span style={{ display: "block", marginTop: "7px", paddingLeft: "2px", fontSize: "11px", color: "#7d8088", whiteSpace: "nowrap" }}>umichkisa.com</span>
        </div>
        <span aria-hidden="true" style={{ position: "absolute", left: "158px", top: "46px", width: "20px", height: "12px" }}>
          <span style={{ position: "absolute", left: "0", right: "2px", top: "5px", height: "2px", borderRadius: "1px", background: "#00152c" }} />
          <span style={{ position: "absolute", right: "1px", top: "1px", width: "7px", height: "7px", borderTop: "2px solid #00152c", borderRight: "2px solid #00152c", transform: "rotate(45deg)" }} />
        </span>
        <span aria-hidden="true" style={{ position: "absolute", left: "384px", top: "46px", width: "20px", height: "12px" }}>
          <span style={{ position: "absolute", left: "0", right: "2px", top: "5px", height: "2px", borderRadius: "1px", background: "#00152c" }} />
          <span style={{ position: "absolute", right: "1px", top: "1px", width: "7px", height: "7px", borderTop: "2px solid #00152c", borderRight: "2px solid #00152c", transform: "rotate(45deg)" }} />
        </span>
      </div>
    </ThumbFrame>
  );
}

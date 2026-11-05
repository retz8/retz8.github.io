import ThumbFrame from "./ThumbFrame";
import { useLocale } from "@/lib/locale";

// The diagram's words, per language.
const TEXT = {
  en: {
    prompt: "prompt",
    request: "Book a table for two at 7pm",
    restaurant: "Han Il Kwan",
    book: "Book",
  },
  ko: {
    prompt: "프롬프트",
    request: "7시에 두 명 예약해 줘",
    restaurant: "한일관",
    book: "예약",
  },
};

// Spectra: a prompt, the stream of A2UI messages Spectra checks, and the surface they draw.
// Drawn on the portfolio redesign canvas; markup kept as drawn.
export default function SpectraThumb() {
  const t = TEXT[useLocale()];
  return (
    <ThumbFrame tone="dark" style={{ background: "#0c0a09", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
      <div className="max-sm:hidden!" style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "0 1 190px", minWidth: "0" }}>
        <span style={{ fontFamily: "'Geist Mono', 'Noto Sans KR', monospace", fontSize: "10px", color: "#78716c" }}>{t.prompt}</span>
        <span style={{ padding: "9px 12px", borderRadius: "10px 10px 10px 2px", background: "#292524", color: "#e7e5e4", fontSize: "12px", lineHeight: "16px" }}>{t.request}</span>
      </div>
      <span className="max-sm:hidden!" aria-hidden="true" style={{ flex: "0 0 24px", borderTop: "1px solid #44403c" }} />
      <div style={{ position: "relative", flex: "0 1 230px", minWidth: "0", padding: "14px 12px 10px", border: "1px dashed #57534e", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "7px", fontFamily: "'Geist Mono', 'Noto Sans KR', monospace", fontSize: "11px", color: "#d6d3d1" }}>
        <span style={{ position: "absolute", top: "-7px", left: "10px", padding: "0 6px", background: "#0c0a09", fontSize: "10px", lineHeight: "12px", color: "#a8a29e" }}>spectra</span>
        <span style={{ display: "flex", gap: "8px", whiteSpace: "nowrap" }}>
          <span style={{ color: "#4ade80" }}>✓</span>
          createSurface
        </span>
        <span style={{ display: "flex", gap: "8px", whiteSpace: "nowrap", color: "#fca5a5" }}>
          <span style={{ color: "#f87171" }}>✕</span>
          updateComponents
          <span style={{ color: "#78716c" }}>colour</span>
        </span>
        <span style={{ display: "flex", gap: "8px", whiteSpace: "nowrap" }}>
          <span style={{ color: "#4ade80" }}>✓</span>
          updateDataModel
        </span>
      </div>
      <span className="max-sm:hidden!" aria-hidden="true" style={{ flex: "0 0 24px", borderTop: "1px solid #44403c" }} />
      <div className="max-sm:hidden!" style={{ flex: "0 0 168px", height: "104px", boxSizing: "border-box", padding: "12px", borderRadius: "8px", background: "#fafaf9", display: "flex", flexDirection: "column", gap: "7px" }}>
        <span style={{ fontSize: "12px", fontWeight: "600", color: "#1c1917" }}>{t.restaurant}</span>
        <span style={{ height: "16px", border: "1px solid #d6d3d1", borderRadius: "4px", boxSizing: "border-box" }} />
        <span style={{ height: "16px", border: "1px solid #d6d3d1", borderRadius: "4px", boxSizing: "border-box" }} />
        <span style={{ marginTop: "auto", alignSelf: "flex-start", padding: "3px 10px", borderRadius: "4px", background: "#1c1917", color: "#fafaf9", fontSize: "10px" }}>{t.book}</span>
      </div>
    </ThumbFrame>
  );
}

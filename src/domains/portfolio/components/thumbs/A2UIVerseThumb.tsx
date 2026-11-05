import ThumbFrame from "./ThumbFrame";
import { useLocale } from "@/lib/locale";

// The diagram's words, per language.
const TEXT = {
  en: {
    store: "Store",
    publish: "↑ publish",
    install: "install",
    request: "Plan my evening around my calendar and inbox.",
  },
  ko: {
    store: "스토어",
    publish: "↑ 배포",
    install: "설치",
    request: "캘린더랑 메일 보고 오늘 저녁 계획 좀 짜 줘",
  },
};

// A2UIVerse: apps published to the store, installed into one canvas that runs them together.
// Drawn on the portfolio redesign canvas; markup kept as drawn.
export default function A2UIVerseThumb() {
  const t = TEXT[useLocale()];
  return (
    <ThumbFrame style={{ backgroundColor: "#f5f5f4", backgroundImage: "radial-gradient(#d6d3d1 1px, transparent 1px)", backgroundSize: "14px 14px", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="max-sm:hidden!" style={{ flex: "0 0 auto", padding: "9px 10px 10px", borderRadius: "10px", background: "#ffffff", border: "1px solid #e7e5e4", display: "flex", flexDirection: "column", gap: "7px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "10px", fontWeight: "600", color: "#1c1917" }}>{t.store}</span>
          <span style={{ fontFamily: "'Geist Mono', 'Noto Sans KR', monospace", fontSize: "9px", color: "#57534e" }}>{t.publish}</span>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <span style={{ width: "26px", height: "26px", borderRadius: "7px", background: "#ffffff", color: "#ea4335", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", flex: "none", boxSizing: "border-box", border: "1px solid #e7e5e4" }}>M</span>
          <span style={{ width: "26px", height: "26px", borderRadius: "7px", background: "#1f2328", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", flex: "none", boxSizing: "border-box" }}>G</span>
          <span style={{ width: "26px", height: "26px", borderRadius: "7px", background: "#5e6ad2", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", flex: "none", boxSizing: "border-box" }}>L</span>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <span style={{ width: "26px", height: "26px", borderRadius: "7px", background: "#1a73e8", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", flex: "none", boxSizing: "border-box" }}>31</span>
          <span style={{ width: "26px", height: "26px", borderRadius: "7px", background: "#161616", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", flex: "none", boxSizing: "border-box" }}>C</span>
          <span style={{ width: "26px", height: "26px", borderRadius: "7px", background: "#f5f5f4", color: "#44403c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "600", flex: "none", boxSizing: "border-box", boxShadow: "0 0 0 2px #ffffff, 0 0 0 3.5px #3b5bdb" }}>R</span>
        </div>
      </div>
      <div className="max-sm:hidden!" style={{ flex: "0 0 64px", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
        <span style={{ fontFamily: "'Geist Mono', 'Noto Sans KR', monospace", fontSize: "10px", color: "#57534e" }}>{t.install}</span>
        <span aria-hidden="true" style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <span style={{ flex: "1", borderTop: "1px dashed #a8a29e" }} />
          <span style={{ width: "0", height: "0", borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid #a8a29e" }} />
        </span>
      </div>
      <div className="max-sm:[zoom:.82]" style={{ flex: "0 1 330px", minWidth: "0", height: "120px", boxSizing: "border-box", padding: "10px", borderRadius: "10px", background: "#ffffff", border: "1px solid #e7e5e4", display: "flex", flexDirection: "column", gap: "7px" }}>
        <span style={{ fontSize: "10px", fontWeight: "600", color: "#1c1917", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.request}</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingBottom: "6px", borderBottom: "1px solid #e7e5e4" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#1a73e8", flex: "none" }} />
            <span style={{ width: "88%", height: "4px", borderRadius: "2px", background: "#d6d3d1" }} />
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#ea4335", flex: "none" }} />
            <span style={{ width: "72%", height: "4px", borderRadius: "2px", background: "#d6d3d1" }} />
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a8a29e", flex: "none" }} />
            <span style={{ width: "80%", height: "4px", borderRadius: "2px", background: "#d6d3d1" }} />
          </span>
        </div>
        <div style={{ flex: "1", display: "flex", gap: "6px" }}>
          <span style={{ flex: "1", borderRadius: "6px", background: "#eef4fe", padding: "6px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ width: "55%", height: "4px", borderRadius: "2px", background: "#1a73e8" }} />
            <span style={{ height: "7px", borderRadius: "3px", background: "#c6dafc" }} />
          </span>
          <span style={{ flex: "1", borderRadius: "6px", border: "1px solid #e7e5e4", padding: "6px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ width: "55%", height: "4px", borderRadius: "2px", background: "#ea4335" }} />
            <span style={{ height: "7px", borderRadius: "3px", background: "#f1f1f1" }} />
          </span>
          <span style={{ flex: "1", borderRadius: "6px", border: "1px dashed #3b5bdb", background: "#eef1fd", padding: "6px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span style={{ width: "11px", height: "11px", borderRadius: "3px", background: "#f5f5f4", border: "1px solid #d6d3d1", boxSizing: "border-box", fontSize: "6px", fontWeight: "600", color: "#44403c", display: "flex", alignItems: "center", justifyContent: "center" }}>R</span>
              <span style={{ width: "45%", height: "4px", borderRadius: "2px", background: "#a5b4fc" }} />
            </span>
            <span style={{ height: "7px", borderRadius: "3px", background: "#dfe3fb" }} />
          </span>
        </div>
      </div>
    </ThumbFrame>
  );
}

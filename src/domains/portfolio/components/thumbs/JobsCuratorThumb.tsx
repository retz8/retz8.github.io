import ThumbFrame from "./ThumbFrame";
import wantedLogo from "@/domains/portfolio/assets/wanted-logo.svg";
import { useLocale } from "@/lib/locale";

// Jobs Curator: Wanted's whole feed, narrowed to what an overseas student can take.
// Drawn on the portfolio redesign canvas; markup kept as drawn.
// The faded wall behind: Wanted's feed as rows of ghost postings.
const GHOST_WIDTHS = [
  [70, 30],
  [54, 40],
  [82, 22],
  [60, 34],
  [46, 44],
  [76, 28],
  [64, 20],
];

// The diagram's words, per language.
const TEXT = {
  en: {
    source: "every posting, via API",
    korea: "Korea",
    internship: "Internship",
    overseas: "Overseas-degree track",
    apply: "Apply",
  },
  ko: {
    source: "모든 공고를 API로",
    korea: "한국",
    internship: "인턴십",
    overseas: "해외 학위자",
    apply: "지원",
  },
};

export default function JobsCuratorThumb() {
  const t = TEXT[useLocale()];
  return (
    <ThumbFrame style={{ background: "#f8f8fa", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div className="max-sm:[zoom:.54]" style={{ position: "relative", width: "560px", height: "128px", flex: "none" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: "0", display: "flex", gap: "22px", padding: "6px 0 0 4px", WebkitMaskImage: "linear-gradient(90deg, #000 0%, #000 45%, transparent 92%)", maskImage: "linear-gradient(90deg, #000 0%, #000 45%, transparent 92%)" }}>
          {[0, 1, 2, 3].map((column) => (
            <span key={column} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {[0, 1, 2, 3, 4, 5, 6].map((row) => {
                const [title, meta] = GHOST_WIDTHS[(row + column) % GHOST_WIDTHS.length];
                return (
                  <span key={row} style={{ display: "flex", alignItems: "center", gap: "6px", height: "16px" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#e3e4e7", flex: "none" }} />
                    <span style={{ width: `${title}px`, height: "4px", borderRadius: "2px", background: "#e3e4e7" }} />
                    <span style={{ width: `${meta}px`, height: "4px", borderRadius: "2px", background: "#eceef1" }} />
                  </span>
                );
              })}
            </span>
          ))}
        </div>
        <div style={{ position: "absolute", left: "0", top: "40px", display: "flex", flexDirection: "column", gap: "6px", padding: "10px 12px", borderRadius: "10px", background: "#ffffff", border: "1px solid #e3e4e7" }}>
          <img src={wantedLogo} alt="wanted" width="98" height="28" style={{ display: "block" }} />
          <span style={{ fontSize: "10px", color: "#7d8088", whiteSpace: "nowrap" }}>{t.source}</span>
        </div>
        <span aria-hidden="true" style={{ position: "absolute", left: "136px", top: "64px", width: "150px", height: "12px" }}>
          <span style={{ position: "absolute", left: "0", right: "2px", top: "5px", borderTop: "2px dashed #a4a8ae" }} />
          <span style={{ position: "absolute", right: "1px", top: "1px", width: "7px", height: "7px", borderTop: "2px solid #a4a8ae", borderRight: "2px solid #a4a8ae", transform: "rotate(45deg)" }} />
        </span>
        <div style={{ position: "absolute", right: "0", top: "0", width: "300px", borderRadius: "10px", background: "#ffffff", border: "1px solid #d2d4d8", boxShadow: "0 10px 28px rgba(0, 21, 44, 0.12)", padding: "10px 12px 3px", boxSizing: "border-box" }}>
          <span style={{ display: "flex", gap: "4px", paddingBottom: "8px" }}>
            <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "5px", background: "#00152c", color: "#f4c000", fontWeight: "600" }}>{t.korea}</span>
            <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "5px", background: "#00152c", color: "#f4c000", fontWeight: "600" }}>{t.internship}</span>
            <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "5px", background: "#00152c", color: "#f4c000", fontWeight: "600" }}>{t.overseas}</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 0", borderTop: "1px solid #eceef1" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
              <span style={{ fontSize: "9px", color: "#7d8088" }}>Inertia</span>
              <span style={{ fontSize: "11px", fontWeight: "600", color: "#0c0f17", whiteSpace: "nowrap" }}>US TikTok Growth</span>
            </span>
            <span style={{ marginLeft: "auto", flex: "none", fontSize: "10px", fontWeight: "600", padding: "3px 10px", borderRadius: "6px", border: "1px solid #d2d4d8", color: "#00152c" }}>{t.apply}</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 0", borderTop: "1px solid #eceef1" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
              <span style={{ fontSize: "9px", color: "#7d8088" }}>KREAM</span>
              <span style={{ fontSize: "11px", fontWeight: "600", color: "#0c0f17", whiteSpace: "nowrap" }}>Offline Business AMD</span>
            </span>
            <span style={{ marginLeft: "auto", flex: "none", fontSize: "10px", fontWeight: "600", padding: "3px 10px", borderRadius: "6px", border: "1px solid #d2d4d8", color: "#00152c" }}>{t.apply}</span>
          </span>
        </div>
      </div>
    </ThumbFrame>
  );
}

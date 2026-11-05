import ThumbFrame from "./ThumbFrame";
import kisaLogo from "@/domains/portfolio/assets/kisa-logo.png";
import { useLocale } from "@/lib/locale";

// The diagram's words, per language.
const TEXT = {
  en: {
    info: "Info",
    boards: "Boards",
    everyKisa: "Every KISA",
    careerGuide: "Career guide",
    signIn: "Sign in",
    jobBoard: "Job board",
    community: "Community",
    calendar: "Calendar",
    tools: "Tools",
  },
  ko: {
    info: "소개",
    boards: "게시판",
    everyKisa: "역대 KISA",
    careerGuide: "커리어 가이드",
    signIn: "로그인",
    jobBoard: "구인 게시판",
    community: "커뮤니티",
    calendar: "캘린더",
    tools: "도구",
  },
};

// umichkisa.com: the site's own header over the hub it runs.
// Drawn on the portfolio redesign canvas; markup kept as drawn.
export default function UMichKisaThumb() {
  const t = TEXT[useLocale()];
  return (
    <ThumbFrame style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ height: "44px", flex: "none", display: "flex", alignItems: "center", gap: "22px", padding: "0 22px", background: "linear-gradient(90deg, #192c41 0%, #0e2238 25%, #00152c 50%, #102439 72%, #26384c 100%)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "9px", flex: "none" }}>
          <img src={kisaLogo} alt="KISA logo" width="28" height="28" style={{ borderRadius: "50%", background: "#ffffff" }} />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.15" }}>
            <span style={{ fontSize: "9px", fontWeight: "600", color: "#ffffff" }}>University of Michigan</span>
            <span style={{ fontSize: "13px", fontWeight: "700", color: "#ffffff" }}>한인 학생회</span>
          </span>
        </span>
        <span className="max-sm:hidden!" style={{ display: "flex", gap: "16px", fontSize: "11px", color: "#e3e6ea", whiteSpace: "nowrap" }}>
          <span>KISA</span>
          <span>{t.info}</span>
          <span>{t.boards}</span>
          <span>{t.everyKisa}</span>
          <span>{t.careerGuide}</span>
        </span>
        <span style={{ marginLeft: "auto", flex: "none", fontSize: "10px", fontWeight: "600", color: "#0c0f17", background: "#f1f2f4", borderRadius: "5px", padding: "4px 9px" }}>{t.signIn}</span>
      </div>
      <div style={{ flex: "1", display: "flex", gap: "10px", padding: "12px 22px 0", background: "#f8f8fa" }}>
        <div style={{ flex: "1", minWidth: "0", borderRadius: "8px", background: "#ffffff", border: "1px solid #e3e4e7", padding: "9px 10px", display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "11px", fontWeight: "700", color: "#0c0f17", whiteSpace: "nowrap" }}>{t.jobBoard}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "78%", height: "4px", borderRadius: "2px", background: "#e3e4e7" }} />
            <span style={{ marginLeft: "auto", width: "18px", height: "4px", borderRadius: "2px", background: "#eceef1" }} />
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "62%", height: "4px", borderRadius: "2px", background: "#e3e4e7" }} />
            <span style={{ marginLeft: "auto", width: "18px", height: "4px", borderRadius: "2px", background: "#eceef1" }} />
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "70%", height: "4px", borderRadius: "2px", background: "#e3e4e7" }} />
            <span style={{ marginLeft: "auto", width: "18px", height: "4px", borderRadius: "2px", background: "#eceef1" }} />
          </span>
        </div>
        <div style={{ flex: "1", minWidth: "0", borderRadius: "8px", background: "#ffffff", border: "1px solid #e3e4e7", padding: "9px 10px", display: "flex", flexDirection: "column", gap: "6px" }} className="max-sm:hidden!">
          <span style={{ fontSize: "11px", fontWeight: "700", color: "#0c0f17", whiteSpace: "nowrap" }}>{t.community}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "66%", height: "4px", borderRadius: "2px", background: "#e3e4e7" }} />
            <span style={{ marginLeft: "auto", width: "18px", height: "4px", borderRadius: "2px", background: "#eceef1" }} />
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "80%", height: "4px", borderRadius: "2px", background: "#e3e4e7" }} />
            <span style={{ marginLeft: "auto", width: "18px", height: "4px", borderRadius: "2px", background: "#eceef1" }} />
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "54%", height: "4px", borderRadius: "2px", background: "#e3e4e7" }} />
            <span style={{ marginLeft: "auto", width: "18px", height: "4px", borderRadius: "2px", background: "#eceef1" }} />
          </span>
        </div>
        <div style={{ flex: "1", minWidth: "0", borderRadius: "8px", background: "#ffffff", border: "1px solid #e3e4e7", padding: "9px 10px", display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "11px", fontWeight: "700", color: "#0c0f17", whiteSpace: "nowrap" }}>{t.calendar}</span>
          <span style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "3px" }}>
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#fff1c4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
            <span style={{ height: "9px", borderRadius: "2px", background: "#f1f2f4" }} />
          </span>
        </div>
        <div style={{ flex: "1", minWidth: "0", borderRadius: "8px", background: "#ffffff", border: "1px solid #e3e4e7", padding: "9px 10px", display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "11px", fontWeight: "700", color: "#0c0f17", whiteSpace: "nowrap" }}>{t.tools}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 7px", borderRadius: "6px", border: "1px solid #e3e4e7" }}>
            <span style={{ fontSize: "10px", fontWeight: "600", color: "#0c0f17", whiteSpace: "nowrap" }}>Pocha</span>
            <span style={{ marginLeft: "auto", fontSize: "10px", color: "#7d8088" }}>→</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 7px", borderRadius: "6px", border: "1px solid #e3e4e7" }}>
            <span style={{ fontSize: "10px", fontWeight: "600", color: "#0c0f17", whiteSpace: "nowrap" }}>Jobs Curator</span>
            <span style={{ marginLeft: "auto", fontSize: "10px", color: "#7d8088" }}>→</span>
          </span>
        </div>
      </div>
    </ThumbFrame>
  );
}

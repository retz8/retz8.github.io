import ThumbFrame from "./ThumbFrame";
import { useLocale } from "@/lib/locale";

// The diagram's words, per language.
const TEXT = {
  en: {
    tteokbokki2: "Tteokbokki ×2",
    kimbap1: "Kimbap ×1",
    odeng3: "Odeng ×3",
    tteokbokki: "Tteokbokki",
    odeng: "Odeng",
    orders: "Orders",
    paid: "Paid",
    preparing: "Preparing",
    ready: "Ready",
    pay: "Pay $14 ",
    live: "live",
  },
  ko: {
    tteokbokki2: "떡볶이 ×2",
    kimbap1: "김밥 ×1",
    odeng3: "어묵 ×3",
    tteokbokki: "떡볶이",
    odeng: "어묵",
    orders: "주문",
    paid: "결제 완료",
    preparing: "조리 중",
    ready: "준비 완료",
    pay: "$14 결제 ",
    live: "실시간",
  },
};

// Pocha: an order paid on a phone lands live on the kitchen board over a WebSocket.
// Drawn on the portfolio redesign canvas; markup kept as drawn.
export default function PochaThumb() {
  const t = TEXT[useLocale()];
  return (
    <ThumbFrame style={{ background: "#f5f5f4", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div className="max-sm:[zoom:.54]" style={{ display: "flex", alignItems: "center", flex: "none" }}>
        <div style={{ flex: "none", width: "112px", height: "128px", borderRadius: "18px", background: "#0c0f17", padding: "5px", boxSizing: "border-box", boxShadow: "0 8px 22px rgba(12, 15, 23, 0.16)" }}>
          <div style={{ height: "100%", borderRadius: "14px", background: "#ffffff", overflow: "hidden", display: "flex", flexDirection: "column", padding: "11px 9px 6px", boxSizing: "border-box", gap: "6px" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#0c0f17" }}>Pocha</span>
            <span style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#0c0f17" }}>
              <span>{t.tteokbokki}</span>
              <span style={{ color: "#7d8088" }}>×2</span>
            </span>
            <span style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#0c0f17" }}>
              <span>{t.odeng}</span>
              <span style={{ color: "#7d8088" }}>×1</span>
            </span>
            <span style={{ marginTop: "auto", height: "24px", borderRadius: "7px", background: "#635bff", color: "#ffffff", fontSize: "10px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", gap: "3px" }}>
              {t.pay}
              <span style={{ fontWeight: "400", opacity: "0.8" }}>· Stripe</span>
            </span>
            <span style={{ alignSelf: "center", width: "34px", height: "3px", borderRadius: "2px", background: "#d2d4d8" }} />
          </div>
        </div>
        <div style={{ flex: "none", width: "92px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
          <span className="max-sm:hidden!" style={{ fontSize: "10px", color: "#7d8088" }}>WebSocket</span>
          <span aria-hidden="true" style={{ position: "relative", width: "68px", height: "12px" }}>
            <span style={{ position: "absolute", left: "0", right: "2px", top: "5px", borderTop: "2px dashed #a4a8ae" }} />
            <span style={{ position: "absolute", right: "1px", top: "1px", width: "7px", height: "7px", borderTop: "2px solid #a4a8ae", borderRight: "2px solid #a4a8ae", transform: "rotate(45deg)" }} />
          </span>
          <span className="max-sm:hidden!" aria-hidden="true" style={{ fontSize: "10px", color: "transparent" }}>WebSocket</span>
        </div>
        <div style={{ flex: "none", width: "320px", borderRadius: "12px", background: "#ffffff", border: "1px solid #e3e4e7", boxShadow: "0 8px 22px rgba(12, 15, 23, 0.10)", overflow: "hidden" }}>
          <span style={{ height: "26px", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px", borderBottom: "1px solid #eceef1" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#0c0f17" }}>{t.orders}</span>
            <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "5px", fontSize: "10px", color: "#2e8a38" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#37a643", boxShadow: "0 0 0 3px #dff3e1" }} />
              {t.live}
            </span>
          </span>
          <span style={{ display: "flex", gap: "6px", padding: "8px" }}>
            <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "5px", padding: "6px", borderRadius: "8px", background: "#f4f4f5" }}>
              <span style={{ fontSize: "10px", fontWeight: "600", color: "#474b53" }}>{t.paid}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "1px", padding: "5px 7px", borderRadius: "6px", background: "#ffffff", border: "1.5px solid #635bff" }}>
                <span style={{ fontSize: "9px", color: "#7d8088" }}>#043</span>
                <span style={{ fontSize: "10px", fontWeight: "600", color: "#0c0f17", whiteSpace: "nowrap" }}>{t.tteokbokki2}</span>
              </span>
            </span>
            <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "5px", padding: "6px", borderRadius: "8px", background: "#f4f4f5" }}>
              <span style={{ fontSize: "10px", fontWeight: "600", color: "#474b53" }}>{t.preparing}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "1px", padding: "5px 7px", borderRadius: "6px", background: "#ffffff", border: "1px solid #e3e4e7" }}>
                <span style={{ fontSize: "9px", color: "#7d8088" }}>#042</span>
                <span style={{ fontSize: "10px", fontWeight: "600", color: "#0c0f17", whiteSpace: "nowrap" }}>{t.kimbap1}</span>
              </span>
            </span>
            <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "5px", padding: "6px", borderRadius: "8px", background: "#f4f4f5" }}>
              <span style={{ fontSize: "10px", fontWeight: "600", color: "#474b53" }}>{t.ready}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "1px", padding: "5px 7px", borderRadius: "6px", background: "#ffffff", border: "1px solid #e3e4e7" }}>
                <span style={{ fontSize: "9px", color: "#7d8088" }}>#041</span>
                <span style={{ fontSize: "10px", fontWeight: "600", color: "#0c0f17", whiteSpace: "nowrap" }}>{t.odeng3}</span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </ThumbFrame>
  );
}

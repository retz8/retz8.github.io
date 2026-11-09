import { Link } from "react-router-dom";

import SiteLayout from "@/components/SiteLayout";
import { localePath } from "@/lib/locale";

const home = "font-medium text-[#1c1917] underline underline-offset-4";

// The one page served for every missing address, so it speaks both
// languages. Written to 404.html by the build; rendered under the English
// header.
export default function NotFoundPage() {
  return (
    <SiteLayout
      intro={
        <div className="flex flex-col gap-2.5">
          <p className="m-0 font-geist-mono text-[14px] text-[#78716c]">404</p>
          <p className="m-0 text-[20px] leading-[30px]">
            There is no page at this address.{" "}
            <Link to={localePath("en", "/")} className={home}>
              Go to the home page
            </Link>
          </p>
          <p lang="ko" className="m-0 text-[20px] leading-[30px] break-keep">
            이 주소에는 페이지가 없습니다.{" "}
            <Link to={localePath("ko", "/")} className={home}>
              홈으로 가기
            </Link>
          </p>
        </div>
      }
    >
      {null}
    </SiteLayout>
  );
}

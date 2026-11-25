import { tr, type Lang } from "@/lib/i18n";
import { announce } from "@/lib/content";

/** Thin turquoise marquee above the header. */
export function Announce({ lang }: { lang: Lang }) {
  const items = announce.map((a) => tr(a, lang));
  return (
    <div className="announce" aria-hidden="true">
      <div className="announce__track">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i}>
            <i /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-base-mid bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-base-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-base-black md:text-4xl">{title}</h2>
      {description ? (
        <p
          className={`mt-4 max-w-3xl text-base leading-8 text-base-dark ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
      {action ? <div className={`mt-7 ${align === "center" ? "flex justify-center" : ""}`}>{action}</div> : null}
    </div>
  );
}

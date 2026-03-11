import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Badge className={centered ? "mx-auto" : ""}>{eyebrow}</Badge> : null}
      <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-[2.65rem]">{title}</h2>
      {description ? <p className="text-body mt-4 text-base leading-relaxed sm:text-lg">{description}</p> : null}
    </div>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/reveal";

export type TeamOrganigramMember = {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  email?: string;
  phone?: string;
  featured?: boolean;
};

type TeamOrganigramProps = {
  members: TeamOrganigramMember[];
  phoneLabel: string;
  organigramLink?: {
    href: string;
    label: string;
    eyebrow?: string;
  };
};

function TeamCard({
  member,
  phoneLabel,
  featured = false
}: {
  member: TeamOrganigramMember;
  phoneLabel: string;
  featured?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-brand-purple/20 bg-white transition hover:-translate-y-1 hover:shadow-soft">
      <div className={`relative ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className={member.imageFit === "contain" ? "object-contain bg-white" : "object-cover"}
          style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
          loading="lazy"
          sizes={featured ? "(min-width: 768px) 48vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"}
        />
      </div>
      <div className="space-y-1 bg-brand-yellow p-5">
        <h3 className={`${featured ? "text-xl" : "text-lg"} font-semibold text-base-black`}>{member.name}</h3>
        <p className="text-sm text-base-dark">{member.role}</p>
        {member.phone ? <p className="text-sm font-medium text-base-black">{phoneLabel}: {member.phone}</p> : null}
        {member.email ? (
          <a
            href={`mailto:${member.email}`}
            className="inline-block text-sm font-medium text-base-black underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
          >
            {member.email}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function TeamOrganigram({ members, phoneLabel, organigramLink }: TeamOrganigramProps) {
  const featuredMembers = members.filter((member) => member.featured);
  const gridMembers = members.filter((member) => !member.featured);

  return (
    <>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {featuredMembers.map((member) => (
          <Reveal key={member.name}>
            <TeamCard member={member} phoneLabel={phoneLabel} featured />
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gridMembers.map((member) => (
          <Reveal key={member.name}>
            <TeamCard member={member} phoneLabel={phoneLabel} />
          </Reveal>
        ))}
      </div>

      {organigramLink ? (
        <Reveal>
          <article className="mt-8 rounded-[2rem] bg-brand-purple px-6 py-7 shadow-soft sm:px-8 sm:py-9">
            {organigramLink.eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-yellow sm:text-sm">
                {organigramLink.eyebrow}
              </p>
            ) : null}
            <a
              href={organigramLink.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-base-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-8 sm:py-4 sm:text-base"
            >
              {organigramLink.label}
            </a>
          </article>
        </Reveal>
      ) : null}
    </>
  );
}

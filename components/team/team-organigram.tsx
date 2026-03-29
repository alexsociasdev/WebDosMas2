import Image from "next/image";
import { Reveal } from "@/components/reveal";

export type TeamOrganigramMember = {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  email?: string;
  phone?: string;
  featured?: boolean;
};

type TeamOrganigramProps = {
  members: TeamOrganigramMember[];
  phoneLabel: string;
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
          className="object-cover"
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

export function TeamOrganigram({ members, phoneLabel }: TeamOrganigramProps) {
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
    </>
  );
}

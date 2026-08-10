import Image from 'next/image';
import Link from 'next/link';

type Props = {
  slug: string;
  name: string;
  description: string;
  image: { src: string; alt: string };
};

/**
 * Service card.
 *
 * Single source of truth for the service card visual. Used by the
 * homepage services overview and any future page that needs to list
 * services (e.g. /services hub).
 */
export default function ServiceCard({ slug, name, description, image }: Props) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="h3-default text-balance">{name}</h3>
        <p className="mt-3 text-body text-muted text-pretty">{description}</p>
        <div className="mt-5">
          <Link
            href={`/services/${slug}`}
            className="link-arrow"
            aria-label={`Learn more about ${name}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
}

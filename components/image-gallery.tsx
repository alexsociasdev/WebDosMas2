import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
  label: string;
};

export function ImageGallery({ images, label }: ImageGalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {images.map((image, index) => (
        <article
          key={`${image}-${index}`}
          className="group overflow-hidden rounded-xl border border-base-mid bg-white transition hover:-translate-y-1 hover:shadow-soft"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={image}
              alt={`${label} ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </article>
      ))}
    </div>
  );
}

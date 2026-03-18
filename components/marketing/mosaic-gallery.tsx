import Image from "next/image";

type MosaicGalleryProps = {
  images: string[];
  label: string;
};

export function MosaicGallery({ images, label }: MosaicGalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => {
        return (
          <article
            key={`${image}-${index}`}
            className="group relative overflow-hidden rounded-2xl border border-base-mid bg-white"
          >
            <div className={`${index % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"} relative`}>
              <Image
                src={image}
                alt={`${label} ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}

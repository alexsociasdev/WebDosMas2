import Image from "next/image";

type MosaicGalleryProps = {
  images: string[];
  label: string;
};

export function MosaicGallery({ images, label }: MosaicGalleryProps) {
  return (
    <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
      {images.map((image, index) => {
        const featured = index % 5 === 0 || index % 5 === 3;
        return (
          <article
            key={`${image}-${index}`}
            className={`group relative overflow-hidden rounded-2xl border border-base-mid bg-base-light ${
              featured ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            }`}
          >
            <Image
              src={image}
              alt={`${label} ${index + 1}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </article>
        );
      })}
    </div>
  );
}

import Image from "next/image";

type ImageCollageProps = {
  images: string[];
  label: string;
};

export function ImageCollage({ images, label }: ImageCollageProps) {
  const collageImages = images.slice(0, 4);

  return (
    <div className="grid aspect-[16/10] grid-cols-2 gap-1.5 bg-brand-gray p-1.5">
      {collageImages.map((image, index) => (
        <div key={`${image}-${index}`} className="relative overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={`${label} ${index + 1}`}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(min-width: 1024px) 14vw, (min-width: 768px) 22vw, 45vw"
          />
        </div>
      ))}
    </div>
  );
}

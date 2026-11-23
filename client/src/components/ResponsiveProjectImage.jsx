const optimizedImages = {
  "/projects/p1.webp": { widths: [360, 480, 720, 960, 1280, 1440], width: 8192, height: 5998 },
  "/projects/p2.png": { widths: [360, 480, 720], width: 940, height: 640 },
  "/projects/p3.png": { widths: [360, 480, 720], width: 766, height: 1558 },
  "/projects/p6.png": { widths: [360, 480, 720, 960, 1280], width: 1344, height: 768 }
};

function createSourceSet(base, widths, format) {
  return widths.map((width) => `/projects/optimized/${base}-${width}.${format} ${width}w`).join(", ");
}

export default function ResponsiveProjectImage({
  src,
  alt,
  className,
  pictureClassName = "block h-full w-full",
  sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 32vw",
  loading = "lazy",
  decoding = "async",
  ...imageProps
}) {
  const image = optimizedImages[src];
  if (!image) {
    return <img src={src} alt={alt} className={className} loading={loading} decoding={decoding} {...imageProps} />;
  }

  const base = src.split("/").pop().replace(/\.(?:png|webp)$/i, "");
  return (
    <picture className={pictureClassName}>
      <source type="image/avif" srcSet={createSourceSet(base, image.widths, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={createSourceSet(base, image.widths, "webp")} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={image.width}
        height={image.height}
        className={className}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
        {...imageProps}
      />
    </picture>
  );
}

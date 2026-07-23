const VERY_NARROW_IMAGES = new Set([
  "/projects/comuni/01-inicio.png",
]);

const NARROW_IMAGES = new Set([
  "/projects/mobile-store/01-home.png",
  "/projects/mobile-store/02-cart.png",
  "/projects/mobile-store/03-map.png",
  "/projects/chambita/01-dashboard.png",
  "/projects/chambita/02-learning-path.png",
  "/projects/chambita/03-ai-mentor.png",
]);

export function getProjectImageSizes(
  src: string,
  desktopContainerWidth: number,
): string {
  if (VERY_NARROW_IMAGES.has(src)) {
    return `(max-width: 768px) 22vw, ${Math.ceil(desktopContainerWidth * 0.22)}px`;
  }

  if (NARROW_IMAGES.has(src)) {
    return `(max-width: 768px) 32vw, ${Math.ceil(desktopContainerWidth * 0.32)}px`;
  }

  return `(max-width: 768px) 100vw, ${desktopContainerWidth}px`;
}

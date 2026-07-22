export default function BackgroundTexture() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="grain absolute inset-0" />
    </div>
  );
}

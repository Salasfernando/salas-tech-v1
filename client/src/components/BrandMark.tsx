export default function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <img
      className={`official-mark ${small ? "official-mark--small" : ""}`}
      src={
        small
          ? "/assets/salas-tech-mark-192.png"
          : "/assets/salas-tech-mark-512.png"
      }
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  );
}

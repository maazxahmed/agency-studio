/**
 * Site-wide decorative layer: soft blurred color blobs (no linear gradient sweep).
 * Fixed behind UI; pointer-events none.
 */
export function AmbientBlobs() {
  return (
    <div className="ambient-blobs" aria-hidden>
      <div className="ambient-blob ambient-blob-1" />
      <div className="ambient-blob ambient-blob-2" />
      <div className="ambient-blob ambient-blob-3" />
      <div className="ambient-blob ambient-blob-4" />
      <div className="ambient-blob ambient-blob-5" />
      <div className="ambient-blob ambient-blob-6" />
    </div>
  );
}

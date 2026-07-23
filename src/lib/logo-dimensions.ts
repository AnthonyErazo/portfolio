const logoDimensions: Record<string, { width: number; height: number }> = {
  "/logos/atu.png": { width: 330, height: 204 },
  "/logos/cientifica.png": { width: 500, height: 169 },
  "/logos/fiis.png": { width: 300, height: 120 },
  "/logos/flyboard.png": { width: 512, height: 512 },
  "/logos/guiadefe.png": { width: 692, height: 692 },
  "/logos/hanyang-seal.png": { width: 181, height: 181 },
  "/logos/labiar-mark.png": { width: 106, height: 114 },
  "/logos/nucleo-symbol.png": { width: 102, height: 98 },
  "/logos/pnp.png": { width: 330, height: 405 },
  "/logos/turuta.png": { width: 1019, height: 1074 },
  "/logos/uni-red.png": { width: 500, height: 629 },
  "/logos/yango.png": { width: 500, height: 165 },
};

export function getLogoDimensions(
  src: string,
  fallback: { width: number; height: number },
) {
  return logoDimensions[src] ?? fallback;
}

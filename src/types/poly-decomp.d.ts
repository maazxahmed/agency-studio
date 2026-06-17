declare module "poly-decomp" {
  const decomp: {
    decomp: (polygon: number[][]) => number[][][];
    quickDecomp: (polygon: number[][]) => number[][][];
    isSimple: (polygon: number[][]) => boolean;
  };
  export default decomp;
}

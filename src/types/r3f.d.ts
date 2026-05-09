// R3F Type Augmentation for Next.js strict mode
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

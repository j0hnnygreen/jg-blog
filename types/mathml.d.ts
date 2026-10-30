import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  SVGProps,
} from "react";

type MathMLElement = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      math: MathMLElement & { xmlns?: string; display?: string };
      mi: MathMLElement;
      mn: MathMLElement;
      mo: MathMLElement;
      ms: MathMLElement;
      mtext: MathMLElement;
      mspace: MathMLElement;
      mrow: MathMLElement;
      mfrac: MathMLElement;
      msqrt: MathMLElement;
      mroot: MathMLElement;
      msup: MathMLElement;
      msub: MathMLElement;
      msubsup: MathMLElement;
      mtable: MathMLElement;
      mtr: MathMLElement;
      mtd: MathMLElement;
      mstyle: SVGProps<HTMLElement> & HTMLAttributes<HTMLElement>;
      menclose: MathMLElement;
      mpadded: MathMLElement;
      mphantom: MathMLElement;
      merror: MathMLElement;
      munder: MathMLElement;
      mover: MathMLElement;
      munderover: MathMLElement;
      mmultiscripts: MathMLElement;
      mprescripts: MathMLElement;
      maction: AnchorHTMLAttributes<HTMLElement>;
    }
  }
}

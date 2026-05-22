export type Animations = "default" | "fade-in" | "pop-up" | "slide-in" | "slide-in2";
export type Positions = "bottom-right" | "top-right" | "top-left" | "bottom-left" | "center";
export interface ToastInt {
    text: string;
    color?: string;
    background?: string;
    timer?: number;
    animate?: Animations;
    position?: Positions;
}
export default function Toast({ text, color, background, timer, animate, position }: ToastInt): void;

interface ToastInt {
    text: string;
    color?: string;
    background?: string;
    timer?: number;
    animate?: string;
    position?: string;
}
export default function Toast({ text, color, background, timer, animate, position }: ToastInt): void;
export {};

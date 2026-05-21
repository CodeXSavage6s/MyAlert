type Status = "success" | "error" | "warning";
type Animations = "default" | "fade-in" | "pop-up" | "slide-in";
interface AlertInt {
    title?: string;
    body?: string;
    background?: string;
    color?: string;
    icon: Status;
    showCancelButton?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;
    confirmButtonColor?: string;
    cancelButtonColor?: string;
    confirmButtonBackground?: string;
    cancelButtonBackground?: string;
    writeOut?: boolean;
    animate?: Animations;
}
export default function Alert(config: AlertInt): Promise<boolean>;
export {};

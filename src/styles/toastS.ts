export type ToastPosition =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left"
  | "center";

export function applyToastPosition(
  container: HTMLElement,
  position: ToastPosition = "bottom-right"
): void {
  // Remove any existing position classes
  container.classList.remove(
    "toast-bottom-right",
    "toast-bottom-left",
    "toast-top-right",
    "toast-top-left",
    "toast-center"
  );
  container.classList.add(`toast-${position}`);
}

export default function ToastStyle() {
  const style = document.createElement("style");
  style.innerText = `
    .my-toast-Container {
      position: fixed;
      height: auto;
      max-height: 30vh;
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      pointer-events: none;
      z-index: 9999;
    }

    /* ── Positions ── */
    .my-toast-Container.toast-bottom-right {
      bottom: 20px;
      right: 30px;
      align-items: flex-end;
    }

    .my-toast-Container.toast-bottom-left {
      bottom: 20px;
      left: 30px;
      align-items: flex-start;
    }

    .my-toast-Container.toast-top-right {
      top: 20px;
      right: 30px;
      align-items: flex-end;
    }

    .my-toast-Container.toast-top-left {
      top: 20px;
      left: 30px;
      align-items: flex-start;
    }

    .my-toast-Container.toast-center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      align-items: center;
    }

    /* ── Toast box ── */
    .my-toast-Box {
      padding: 10px;
      text-align: center;
      border-radius: 10px;
      background: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      pointer-events: auto;
    }

    /* ── Animations ── */
    .slide-in {
      animation: slide-in .5s ease;
    }
    .slide-in2 {
      animation: slide-in2 .7s ease;
    }
    .pop-up {
      animation: pop-up .5s ease;
    }
    .fade-in {
      animation: fade-in 1s ease;
    }

    @keyframes slide-in {
      from { opacity: 0; transform: translateX(-200px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes slide-in2 {
      from { opacity: 0; transform: translateX(200px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes pop-up {
      from { opacity: 0; transform: translateY(200px) scale(0.5); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

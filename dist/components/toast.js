import ToastStyle from '../styles/toastS.js';
let stylesInjected = false;
let toastContainer = null;
function getToastContainer() {
    if (!toastContainer) {
        toastContainer = document.createElement("div");
        document.body.appendChild(toastContainer);
    }
    return toastContainer;
}
export default function Toast({ text, color = "white", background = "#2a223d", timer = 2000, animate = "slide-in2", position = "bottom-right" }) {
    if (!stylesInjected) {
        ToastStyle();
        stylesInjected = true;
    }
    const container = getToastContainer();
    const toastBox = document.createElement("div");
    const toastText = document.createElement("span");
    container.className = 'my-toast-Container toast-' + position;
    toastBox.className = 'my-toast-Box ' + animate;
    toastText.textContent = text;
    toastBox.style.background = background;
    toastBox.style.color = color;
    toastBox.appendChild(toastText);
    container.appendChild(toastBox);
    const fadeDuration = 500;
    setTimeout(() => {
        toastBox.style.transition = `opacity ${fadeDuration / 1000}s ease`;
        toastBox.style.opacity = '0';
        setTimeout(() => {
            if (container.contains(toastBox)) {
                container.removeChild(toastBox);
            }
            if (container.children.length === 0) {
                container.remove();
                toastContainer = null;
            }
        }, fadeDuration);
    }, timer);
}

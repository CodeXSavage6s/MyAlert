import ToastStyle from '../styles/toastS.js';
export default function Toast({ text, color = "white", background = "#2a223d", timer = 2000, animate = "slide-in2", position = "bottom-right" }) {
    ToastStyle();
    const toastContainer = document.createElement("div");
    const toastBox = document.createElement("div");
    const toastText = document.createElement("span");
    toastContainer.className = 'my-toast-Container';
    toastBox.className = 'my-toast-Box ' + animate;
    toastText.textContent = text;
    toastBox.style.background = background;
    toastBox.style.color = color;
    toastBox.appendChild(toastText);
    toastContainer.appendChild(toastBox);
    document.body.appendChild(toastContainer);
    const time = timer / 1000;
    setTimeout(() => {
        toastBox.style.transition = `opacity ${time}s ease`;
        toastBox.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toastContainer);
        }, timer);
    }, timer);
}

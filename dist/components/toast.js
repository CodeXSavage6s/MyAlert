/*import ToastStyle from '../styles/toastS.js'

interface ToastInt {
  text: string,
  color?: string,
  background?: string,
  timer?: number,
  animate?: string,
  position?: string
}
const toastContainer = document.createElement("div");
  document.body.appendChild(toastContainer)

export default function Toast({
  text,
  color = "white",
  background = "#2a223d",
  timer = 2000,
  animate = "slide-in2",
  position = "bottom-right"
}: ToastInt) {
  
  ToastStyle();
  
  const toastBox = document.createElement("div");
  const toastText = document.createElement("span");
    
  toastContainer.className = 'my-toast-Container';
  toastBox.className = 'my-toast-Box ' + animate
  toastText.textContent = text
  
  toastBox.style.background = background
  toastBox.style.color = color
  
  toastBox.appendChild(toastText)
  toastContainer.appendChild(toastBox)
  
  const time = timer / 1000
  setTimeout(() => {
    toastBox.style.transition = `opacity ${time}s ease`;
    toastBox.style.opacity = '0'
    setTimeout(() => {
     toastContainer.removeChild(toastBox)
    }, timer)
  }, timer)
}
*/
import ToastStyle from '../styles/toastS.js';
// Bug fix #3: inject styles only once
let stylesInjected = false;
// toastContainer is created lazily so DOM is ready
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
    container.className = 'my-toast-Container';
    toastBox.className = 'my-toast-Box ' + animate;
    toastText.textContent = text;
    toastBox.style.background = background;
    toastBox.style.color = color;
    toastBox.appendChild(toastText);
    container.appendChild(toastBox);
    // Bug fix #2: fade duration separate from display timer
    // Show for `timer` ms, then fade over 500ms, then remove
    const fadeDuration = 500;
    setTimeout(() => {
        toastBox.style.transition = `opacity ${fadeDuration / 1000}s ease`;
        toastBox.style.opacity = '0';
        setTimeout(() => {
            if (container.contains(toastBox)) {
                container.removeChild(toastBox);
            }
        }, fadeDuration); // wait only the fade duration, not the full timer again
    }, timer);
}

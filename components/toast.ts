import ToastStyle from '../styles/toastS.js'

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
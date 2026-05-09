export default function ToastStyle() {
  const style = document.createElement("style");
  style.innerText = `
    .my-toast-Container {
      position: fixed;
      display: flex;
      bottom: 10px;
      right: 20px;
      max-width: 300px;
      justify-content: center;
      align-items: center;;
      z-index: 999;
      padding: 5px;
      font-family: Georgia, 'Times New Roman', Times, serif
    }
    .my-toast-Box {
      padding: 10px;
      text-align: center;
      border-radius: 10px;
    }
    .slide-in {
      animation: slide-in .5s ease
    }
    .slide-in2 {
      animation: slide-in2 .7s ease
    }
    .pop-up {
      animation: pop-up .5s ease
    }
    .fade-in {
      animation: fade-in 1s ease
    }
    @keyframes slide-in {
      from {opacity: 0; transform: translateX(-200px)}
      to {opacity: 1; transform: translateX(0)}
    }
    @keyframes slide-in2 {
      from {opacity: 0; transform: translateX(200px)}
      to {opacity: 1; transform: translateX(0)}
    }
    @keyframes pop-up {
      from {opacity: 0; transform: translateY(200px) scale(0.5)}
      to {opacity: 1; transform: translateY(0) scale(1)}
    }
    @keyframes fade-in {
      from {opacity: 0;}
      to {opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

export default function ToastStyle() {
    const style = document.createElement("style");
    style.innerText = `
    .my-toast-Container {
      position: fixed;
      bottom: 20px;
      right: 30px;
      height: auto;
      max-height: 30vh;
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      pointer-events: none;
    }

    .my-toast-Box {
      padding: 10px;
      text-align: center;
      border-radius: 10px;
      background: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      pointer-events: auto;
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

export default function AlertStyle() {
    const style = document.createElement("style");
    style.innerText = `
    .my-alert-Container {
      position: fixed;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,0.5);
      z-index: 999;
      padding: 10%;
      font-family: Georgia, 'Times New Roman', Times, serif
    }
    .my-alert-Box {
      padding: 20px;
      text-align: center;
      border-radius: 20px;
    }
    .my-alert-Btns {
      display: flex;
      justify-content: space-between;
      height: 30px;
      width: 100%;
      gap: 20px
    }
    .my-alert-Btns button {
      width: 50%;
      font-weight: bold;
      font-family: serif;
    }
    button {
      border: none
    }
    .slide-in {
      animation: slide-in .5s ease
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

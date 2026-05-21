
//import * as lottie from 'lottie-web';
import AlertStyle from '../styles/style.js';

type Status = "success" | "error" | "warning";
type Animations = "default" | "fade-in" | "pop-up" | "slide-in";

const animMap: Record<Status, string> = {
  success: new URL('../../public/success.json', import.meta.url).toString(),
  error: new URL('../../public/error.json', import.meta.url).toString(),
  warning: new URL('../../public/warning.json', import.meta.url).toString()
};

// Lazily resolved when the CDN script first loads; null in SSR/non-browser environments.
let _lottieReady: Promise<boolean> | null = null;

function lottieReady(): Promise<boolean> {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return Promise.resolve(false);
  }
  if ((window as any).lottie) {
    return Promise.resolve(true);
  }
  if (!_lottieReady) {
    _lottieReady = new Promise<boolean>((resolve) => {
      const lottieScript = document.createElement('script');
      lottieScript.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
      lottieScript.onload = () => resolve(true);
      lottieScript.onerror = () => {
        console.error("MyAlert: failed to load Lottie from CDN — animations will be skipped.");
        resolve(false);
      };
      document.head.appendChild(lottieScript);
    });
  }
  return _lottieReady;
}


// Inject styles only once
let stylesInjected = false;

interface AlertInt {
  title?: string,
  body?: string,
  background?: string,
  color?: string,
  icon: Status,
  showCancelButton?: boolean,
  confirmButtonText?: string,
  cancelButtonText?: string,
  confirmButtonColor?: string,
  cancelButtonColor?: string,
  confirmButtonBackground?: string,
  cancelButtonBackground?: string,
  writeOut?: boolean,
  animate?: Animations,
}

let alertQueue: Promise<any> = Promise.resolve();

export default async function Alert(config: AlertInt): Promise<boolean> {
  const result = alertQueue.then(() => renderAlert(config));
  alertQueue = result.catch(() => {});
  return result;
}

async function renderAlert({
  title = "Alert Box",
  body = "",
  background = "#2a223d",
  color = "#f2f2f2",
  icon,
  showCancelButton = true,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  confirmButtonBackground = "#076407",
  cancelButtonBackground = "#a30000",
  cancelButtonColor = "white",
  confirmButtonColor = "white",
  writeOut,
  animate = "default"
}: AlertInt): Promise<boolean> {
  
  // Bug fix #3: inject styles only once, not on every call
  if (!stylesInjected) {
    AlertStyle();
    stylesInjected = true;
  }

  await lottieReady();

  return new Promise<boolean>((resolve) => {
    const alertContainer = document.createElement("div");
    const alertBox = document.createElement("div");
    const alertIcon = document.createElement("span")
    const alertTitle = document.createElement("h1");
    const alertBody = document.createElement("p");
    const btnContainer = document.createElement("div");

    alertContainer.className = 'my-alert-Container';
    alertBox.className = "my-alert-Box " + animate;
    alertTitle.className = 'my-alert-Title';
    btnContainer.className = 'my-alert-Btns';
    
    alertBox.style.backgroundColor = background;
    alertBox.style.color = color;
    alertIcon.style.width = "100%"
    alertIcon.style.height = "200px"
    alertIcon.style.display = "flex"
    alertIcon.style.padding = "0px"
    alertIcon.style.margin = "0px"
    alertIcon.style.justifyContent = "center"

    alertTitle.textContent = title;
    alertBody.textContent = body;
    
    const confirmBtn = document.createElement("button");
      confirmBtn.style.background = confirmButtonBackground;
      confirmBtn.style.color = confirmButtonColor;
      confirmBtn.style.border = `1px solid ${confirmButtonColor}`;
      confirmBtn.textContent = confirmButtonText;
      confirmBtn.onclick = () => {
        alertContainer.remove();
        resolve(true);
      };
      btnContainer.appendChild(confirmBtn);
    if (showCancelButton) {
      const cancelBtn = document.createElement("button");
      cancelBtn.style.background = cancelButtonBackground;
      cancelBtn.style.color = cancelButtonColor;
      cancelBtn.style.border = `1px solid ${cancelButtonColor}`;
      cancelBtn.textContent = cancelButtonText;
      cancelBtn.className = "cancel-btn"; 
      cancelBtn.onclick = () => {
        alertContainer.remove();
        resolve(false);
      };
      btnContainer.appendChild(cancelBtn);
    }

    if (typeof window !== 'undefined' && (window as any).lottie) {
      (window as any).lottie.loadAnimation({
        container: alertIcon,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: animMap[icon]
      });
    }

    alertBox.append(alertIcon, alertTitle, alertBody, btnContainer);
    alertContainer.appendChild(alertBox);
    document.body.appendChild(alertContainer);
  });
}
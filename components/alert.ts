import AlertStyle from '../styles/style.js';

type Status = "success" | "failed" | "pending";
type Animations = "default" | "fade-in" | "pop-up" | "slide-in";

interface AlertInt {
  title?: string,
  body?: string,
  background?: string,
  color?: string,
  icon?: Status,
  showConfirmButton?: boolean,
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

export default async function Alert({
  title = "Alert Box",
  body = "",
  background = "#2a223d",
  color = "#f2f2f2",
  icon,
  showConfirmButton = true,
  showCancelButton = true,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  confirmButtonBackground = "#076407",
  cancelButtonBackground = "#a30000",
  cancelButtonColor = "white",
  confirmButtonColor = "white",
  writeOut,
  animate
}: AlertInt): Promise<boolean> {
  
  AlertStyle();

  const alertPromise = new Promise<boolean>((resolve) => {
    const alertContainer = document.createElement("div");
    const alertBox = document.createElement("div");
    const alertTitle = document.createElement("h1");
    const alertBody = document.createElement("p");
    const btnContainer = document.createElement("div");

    alertContainer.className = 'my-alert-Container';
    alertBox.className = "my-alert-Box " + animate;
    alertTitle.className = 'my-alert-Title';
    btnContainer.className = 'my-alert-Btns';
    
    
    alertBox.style.backgroundColor = background;
    alertBox.style.color = color;

    alertTitle.textContent = title;
    alertBody.textContent = body;
    
    if (showConfirmButton) {
      const confirmBtn = document.createElement("button");
      confirmBtn.style.background = confirmButtonBackground
      confirmBtn.style.color = confirmButtonColor
      confirmBtn.style.border = `1px solid ${confirmButtonColor}`
      confirmBtn.textContent = confirmButtonText;
      confirmBtn.onclick = () => {
        alertContainer.remove();
        resolve(true);
      };
      btnContainer.appendChild(confirmBtn);
    }

    if (showCancelButton) {
      const cancelBtn = document.createElement("button");
      cancelBtn.style.background = cancelButtonBackground
      cancelBtn.style.color = cancelButtonColor
      cancelBtn.style.border = `1px solid ${cancelButtonColor}`
      cancelBtn.textContent = cancelButtonText;
      cancelBtn.className = "cancel-btn"; 
      cancelBtn.onclick = () => {
        alertContainer.remove();
        resolve(false);
      };
      btnContainer.appendChild(cancelBtn);
    }
    
    alertBox.append(alertTitle, alertBody, btnContainer);
    alertContainer.appendChild(alertBox);
    document.body.appendChild(alertContainer);
  });
  
  return alertPromise
}



async function handleDelete() {
  try {
    const confirmed = await Alert({
      title: "Confirm Action",
      body: "Are you sure?",
    });

    if (confirmed) {
      console.log("Action confirmed");
    } else {
      console.log("Action cancelled");
    }
  } catch (error) {
    console.error("Alert failed to render", error);
  }
}

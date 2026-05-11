import AlertStyle from '../styles/style.js';
let alertQueue = Promise.resolve();
export default async function Alert(config) {
    const result = alertQueue.then(() => renderAlert(config));
    alertQueue = result.catch(() => { });
    return result;
}
async function renderAlert({ title = "Alert Box", body = "", background = "#2a223d", color = "#f2f2f2", icon, showConfirmButton = true, showCancelButton = true, confirmButtonText = "Confirm", cancelButtonText = "Cancel", confirmButtonBackground = "#076407", cancelButtonBackground = "#a30000", cancelButtonColor = "white", confirmButtonColor = "white", writeOut, animate = "default" }) {
    AlertStyle();
    return new Promise((resolve) => {
        const alertContainer = document.createElement("div");
        const alertBox = document.createElement("div");
        const alertIcon = document.createElement("div");
        const alertTitle = document.createElement("h1");
        const alertBody = document.createElement("p");
        const btnContainer = document.createElement("div");
        alertContainer.className = 'my-alert-Container';
        alertBox.className = "my-alert-Box " + animate;
        alertTitle.className = 'my-alert-Title';
        btnContainer.className = 'my-alert-Btns';
        alertBox.style.backgroundColor = background;
        alertBox.style.color = color;
        alertIcon.style.width = "100%";
        alertIcon.style.height = "100px";
        alertIcon.style.display = "flex";
        alertIcon.style.padding = "0px";
        alertIcon.style.margin = "0px";
        alertIcon.style.justifyContent = "center";
        alertTitle.textContent = title;
        alertBody.textContent = body;
        if (showConfirmButton) {
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
        }
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
        lottie.loadAnimation({
            container: alertIcon,
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: `../animation/${icon}.json`
        });
        alertBox.append(alertIcon, alertTitle, alertBody, btnContainer);
        alertContainer.appendChild(alertBox);
        document.body.appendChild(alertContainer);
    });
}

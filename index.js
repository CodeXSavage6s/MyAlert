import Alert from './components/alert.js';
function Run() {
    Alert({
        title: "Connection Lost",
        body: "Please check your internet settings and try again.",
        status: "failed",
        showCancelButton: true,
        animate: "fade-in"
    }).then((result) => {
        // Check if the user actually confirmed
        if (result) {
            console.log("Confirmed");
        }
        else {
            console.log("Canceled");
        }
    })
        .catch((err) => {
        console.error("Alert failed to render:", err);
    });
}
const btn = document.getElementById('runBtn');
if (btn) {
    btn.addEventListener('click', Run);
}
else {
    console.error("Button 'runBtn' not found in the DOM");
}

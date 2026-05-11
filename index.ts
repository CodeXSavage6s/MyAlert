import Alert from './components/alert.js';
import Toast from './components/toast.js';

function Run() {
    Alert({
        title: "Connection Lost",
        body: "Please check your internet settings and try again.",
        icon: "failed",
        showCancelButton: true,
        animate: "slide-in"
    }).then((result) => {
    // Check if the user actually confirmed
    if (result) {
      console.log("Confirmed");
    } else {
      console.log("Canceled")
    }
  })
  .catch((err) => {
    console.error("Alert failed to render:", err);
  });
  
}
    
function Test() {
  Toast({
    text: "testing"
  })
}
    
const btn = document.getElementById('runBtn');
if (btn) {
    btn.addEventListener('click', Run);
} else {
    console.error("Button 'runBtn' not found in the DOM");
}

const btn2 = document.getElementById('test');
if (btn2) {
    btn2.addEventListener('click', Test);
} else {
    console.error("Button 'runBtn' not found in the DOM");
}

window.addEventListener('load', () => {
  alert("tegsgsyu")
  setInterval(() => {
    Alert({
        title: "Connection Lost",
        body: "Please check your internet settings and try again.",
        icon: "failed",
        showCancelButton: true,
        animate: "slide-in"
    })
  }, 1000)
})

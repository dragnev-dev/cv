// dark mode toggle
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle('dark-theme');
}

// touch device check 
var isTouchDevice = "ontouchstart" in document.documentElement;

// hotkey event listener
document.addEventListener('keyup', event => {
    if (event.code === 'KeyD') {
        toggleDarkMode();
    }
});

// dark mode toast
function darkModeToast() {
    var toast = document.getElementById('toast');
    toast.innerHTML += "Press 'D' to toggle dark mode";
    toast.className = 'show';
    setTimeout(function () { toast.className = toast.className.replace('show', ''); }, 3000);
}

// show the toast on non-touch devices
if (!isTouchDevice) {
    darkModeToast();
}

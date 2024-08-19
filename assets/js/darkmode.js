

function darkMode() {
    var element = document.getElementById("main");
    element.classList.toggle("light-mode");
    document.body.classList.toggle("light-mode");
    var element1 = document.getElementById("sidebar");
    element1.classList.toggle("light-mode");

    // Check if the dark mode is enabled or not
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// Check localStorage and apply the saved theme on page load
function applySavedTheme() {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.getElementById("main").classList.add("light-mode");
        document.body.classList.add("light-mode");
        document.getElementById("sidebar").classList.add("light-mode");
    }
}

// Apply the theme on page load
applySavedTheme();
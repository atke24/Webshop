const variables = document.getElementById("variables-style");
const toggle = document.getElementById("mode-toggle");

// filenames must match your CSS files
const LIGHT = "variables.css";
const DARK = "variables-dark.css";

function applyMode(mode) {
    variables.setAttribute("href", mode);
    localStorage.setItem("mode", mode);
    toggle.checked = (mode === DARK);
}

toggle.addEventListener("change", () => {
    applyMode(toggle.checked ? DARK : LIGHT);
});

// on load: restore saved mode or default to LIGHT
const saved = localStorage.getItem("mode") || LIGHT;
applyMode(saved);

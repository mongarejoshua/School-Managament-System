const roleSelect = document.getElementById("roleSelect");
const regNumberField = document.getElementById("regNumberField");
const regNumberInput = document.getElementById("regNumberInput");
const teacherIdField = document.getElementById("teacherIdField");
const teacherIdInput = document.getElementById("teacherIdInput");

roleSelect.addEventListener("change", function () {
    const role = this.value;

    if (role === "teacher") {
        // Show teacher ID, hide reg number
        teacherIdField.style.display = "block";
        teacherIdInput.setAttribute("required", "true");

        regNumberField.style.display = "none";
        regNumberInput.removeAttribute("required");
        regNumberInput.value = "";
    }
    else if (role === "student" || role === "parent") {
        // Show reg number, hide teacher ID
        regNumberField.style.display = "block";
        regNumberInput.setAttribute("required", "true");

        teacherIdField.style.display = "none";
        teacherIdInput.removeAttribute("required");
        teacherIdInput.value = "";
    }
    else {
        // Hide both if no role selected
        regNumberField.style.display = "none";
        teacherIdField.style.display = "none";
        regNumberInput.removeAttribute("required");
        teacherIdInput.removeAttribute("required");
    }
});

// Initialize on load (hide both until role is chosen)
document.addEventListener("DOMContentLoaded", () => {
    regNumberField.style.display = "none";
    teacherIdField.style.display = "none";
});
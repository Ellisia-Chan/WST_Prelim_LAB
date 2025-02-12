document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle("show");

            // Close other dropdowns
            document.querySelectorAll(".dropdown-content").forEach(content => {
                if (content !== dropdownContent) {
                    content.classList.remove("show");
                }
            });
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.matches(".dropdown-btn")) {
            document.querySelectorAll(".dropdown-content").forEach(content => {
                content.classList.remove("show");
            });
        }
    });
});

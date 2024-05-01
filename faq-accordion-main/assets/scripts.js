const __ = (s) => document.querySelectorAll(s);
const ENTER_KEY = "Enter";
const SPACE_KEY = " ";

document.addEventListener("DOMContentLoaded", () => {
    __(".faq-list-checkbox").forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
            const content = e.currentTarget.parentNode.parentNode.querySelector(".faq-list-content");
            if (content) {
                content.classList.toggle("expanded");
            }
        })
    });

    __(".faq-list-header").forEach((li) => {
        li.addEventListener("keydown", (e) => {
            if ([ENTER_KEY, SPACE_KEY].includes(e.key)) {
                e.currentTarget.querySelector('.faq-list-checkbox').click();
            }
        });
    })
});

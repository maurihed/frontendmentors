const VARIANTS = ["danger", "info", "success", "primary"];

document.addEventListener("DOMContentLoaded", async () => {
    const categoriesContainer = document.querySelector(".summary-card__categories");
    const totalEl = document.querySelector("#summary-total");
    const categories = await (await fetch("data.json")).json();

    if (categories.length > 0) {
        const result = categories.reduce((total, category) => total + category.score, 0) / categories.length;
        categories.forEach((category, idx) => {
            const item = document.createElement("div");
            item.classList.add("categories-item", VARIANTS[idx % VARIANTS.length]);
            item.innerHTML = `
                <div class="categories-item__text">
                    <img src="${category.icon}" alt="${category.category}">
                    <p>${category.category}</p>
                </div>
                <p class="categories-item__score">
                    <span class="categories-item__score-number">${category.score}</span> / 100
                </p>
            `;
            categoriesContainer.appendChild(item);
        });
        totalEl.innerText = result.toFixed(0);
    }
});

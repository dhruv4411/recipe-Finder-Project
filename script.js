async function searchMeal() {
    const searchQuery = document.getElementById("search").value;
    if (!searchQuery) return;
    const response = await fetch(`/search?search=${searchQuery}`);
    const data = await response.json();
    
    const mealList = document.getElementById("meal-list");
    mealList.innerHTML = "";
    data.meals.forEach(meal => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong><a href="meal.html?id=${meal.idMeal}" target="_blank">${meal.strMeal}</a></strong><br>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        `;
        mealList.appendChild(listItem);
    });
}

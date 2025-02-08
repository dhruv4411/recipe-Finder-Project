async function fetchMealDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const mealId = urlParams.get("id");

    if (!mealId) return;

    const response = await fetch(`/meal?id=${mealId}`);
    const data = await response.json();
    
    if (data.meals) {
        const meal = data.meals[0];
        document.getElementById("meal-title").innerText = meal.strMeal;
        document.getElementById("meal-image").src = meal.strMealThumb;
        document.getElementById("meal-instructions").innerText = meal.strInstructions;
    }
}

fetchMealDetails();

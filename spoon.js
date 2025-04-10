console.log("dgsdgdsg");
//dietary, intolerances, maxcalories(a field you type in)

let queryParams = {
    cuisine: '',
    diet: '',
    intolerances: '',
    type: '',
    maxCalories: '',
    minCalories: '',
    minServings: '',
    maxServings: '',
};

//CUISINE APIS!!!!!!!!
document.getElementById("mexicanButton").addEventListener("click", function() {
    
    if(queryParams.cuisine === "Mexican"){

        queryParams.cuisine = "";
        console.log("Removed Mexican Cuisine");

    }else{
        queryParams.cuisine = "Mexican";
        console.log("Added Mexican Cuisine");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("italianButton").addEventListener("click", function() {
    if(queryParams.cuisine === "Italian"){

        queryParams.cuisine = "";
        console.log("Removed Italian Cuisine");
    }else{
        queryParams.cuisine = "Italian";
        console.log("Added Italian Cuisine");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("asianButton").addEventListener("click", function() {
    if(queryParams.cuisine === "Asian"){

        queryParams.cuisine = "";
        console.log("Removed Asian Cuisine");
    }else{
        queryParams.cuisine = "Asian";
        console.log("Added Asian Cuisine");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("americanButton").addEventListener("click", function() {
    if(queryParams.cuisine === "American"){

        queryParams.cuisine = "";
        console.log("Removed American Cuisine");
    }else{
        queryParams.cuisine = "American";
        console.log("Added American Cuisine");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("europeanButton").addEventListener("click", function() {
    if(queryParams.cuisine === "European"){

        queryParams.cuisine = "";
        console.log("Removed European Cuisine");
    }else{
        queryParams.cuisine = "European";
        console.log("Added European Cuisine");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("southernButton").addEventListener("click", function() {
    if(queryParams.cuisine === "Southern"){

        queryParams.cuisine = "";
        console.log("Removed Southern Cuisine");
    }else{
        queryParams.cuisine = "Southern";
        console.log("Added Southern Cuisine");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});



//DIETARY APIS!!!!!!!!
document.getElementById("vegetarianButton").addEventListener("click", function () {
    if (queryParams.diet.includes("Vegetarian")) {
        queryParams.diet = queryParams.diet.replace("Vegetarian", "").replace(/,,/g, ",").trim();
        if (queryParams.diet.endsWith(",")) queryParams.diet = queryParams.diet.slice(0, -1);
        console.log("Removed Vegetarian Diet");
    } else {
        queryParams.diet += (queryParams.diet ? "," : "") + "Vegetarian";
        console.log("Added Vegetarian Diet");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("veganButton").addEventListener("click", function () {
    if (queryParams.diet.includes("Vegan")) {
        queryParams.diet = queryParams.diet.replace("Vegan", "").replace(/,,/g, ",").trim();
        if (queryParams.diet.endsWith(",")) queryParams.diet = queryParams.diet.slice(0, -1);
        console.log("Removed Vegan Diet");
    } else {
        queryParams.diet += (queryParams.diet ? "," : "") + "Vegan";
        console.log("Added Vegan Diet");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("pescButton").addEventListener("click", function () {
    if (queryParams.diet.includes("Pescatarian")) {
        queryParams.diet = queryParams.diet.replace("Pescatarian", "").replace(/,,/g, ",").trim();
        if (queryParams.diet.endsWith(",")) queryParams.diet = queryParams.diet.slice(0, -1);
        console.log("Removed Pescatarian Diet");
    } else {
        queryParams.diet += (queryParams.diet ? "," : "") + "Pescatarian";
        console.log("Added Pescatarian Diet");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("paleoButton").addEventListener("click", function () {
    if (queryParams.diet.includes("Keto")) {
        queryParams.diet = queryParams.diet.replace("Paleo", "").replace(/,,/g, ",").trim();
        if (queryParams.diet.endsWith(",")) queryParams.diet = queryParams.diet.slice(0, -1);
        console.log("Removed Paleo Diet");
    } else {
        queryParams.diet += (queryParams.diet ? "," : "") + "Paleo";
        console.log("Added Paleo Diet");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});



//INTOLERANCES APIS!!!!!!!!
document.getElementById("glutenButton").addEventListener("click", function(){
    if(queryParams.intolerances.includes("Gluten")){
        queryParams.intolerances = queryParams.intolerances.replace("Gluten", "").replace(/,,/g, ",").trim();
        if (queryParams.intolerances.endsWith(",")) queryParams.intolerances = queryParams.intolerances.slice(0, -1);
        console.log("Removed Gluten Intolerance");

    }else{

        queryParams.intolerances += (queryParams.intolerances ? "," : "") + "Gluten";
        console.log("Added Gluten Intolerance");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});

document.getElementById("dairyButton").addEventListener("click", function(){
    if(queryParams.intolerances.includes("Dairy")){
        queryParams.intolerances = queryParams.intolerances.replace("Dairy", "").replace(/,,/g, ",").trim();
        if (queryParams.intolerances.endsWith(",")) queryParams.intolerances = queryParams.intolerances.slice(0, -1);
        console.log("Removed Dairy Intolerance");

    }else{

        queryParams.intolerances += (queryParams.intolerances ? "," : "") + "Dairy";
        console.log("Added Dairy Intolerance");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("peanutButton").addEventListener("click", function(){
    if(queryParams.intolerances.includes("Peanut")){
        queryParams.intolerances = queryParams.intolerances.replace("Peanut", "").replace(/,,/g, ",").trim();
        if (queryParams.intolerances.endsWith(",")) queryParams.intolerances = queryParams.intolerances.slice(0, -1);
        console.log("Removed Peanut Intolerance");

    }else{

        queryParams.intolerances += (queryParams.intolerances ? "," : "") + "Peanut";
        console.log("Added Peanut Intolerance");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});

document.getElementById("wheatButton").addEventListener("click", function(){
    if(queryParams.intolerances.includes("Wheat")){
        queryParams.intolerances = queryParams.intolerances.replace("Wheat", "").replace(/,,/g, ",").trim();
        if (queryParams.intolerances.endsWith(",")) queryParams.intolerances = queryParams.intolerances.slice(0, -1);
        console.log("Removed Wheat Intolerance");

    }else{

        queryParams.intolerances += (queryParams.intolerances ? "," : "") + "Wheat";
        console.log("Added Wheat Intolerance");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});

document.getElementById("soyButton").addEventListener("click", function(){
    if(queryParams.intolerances.includes("Soy")){
        queryParams.intolerances = queryParams.intolerances.replace("Soy", "").replace(/,,/g, ",").trim();
        if (queryParams.intolerances.endsWith(",")) queryParams.intolerances = queryParams.intolerances.slice(0, -1);
        console.log("Removed Soy Intolerance");

    }else{

        queryParams.intolerances += (queryParams.intolerances ? "," : "") + "Soy";
        console.log("Added Soy Intolerance");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});

document.getElementById("eggButton").addEventListener("click", function(){
    if(queryParams.intolerances.includes("Egg")){
        queryParams.intolerances = queryParams.intolerances.replace("Egg", "").replace(/,,/g, ",").trim();
        if (queryParams.intolerances.endsWith(",")) queryParams.intolerances = queryParams.intolerances.slice(0, -1);
        console.log("Removed Egg Intolerance");

    }else{

        queryParams.intolerances += (queryParams.intolerances ? "," : "") + "Egg";
        console.log("Added Egg Intolerance");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});


//TYPES OF DISHES!!!!!!!!!
document.getElementById("mainButton").addEventListener("click", function(){
    if(queryParams.type === "Main Course"){

        queryParams.type = "";
        console.log("Removed Main Course");
    }else{
        queryParams.type = "Main Course";
        console.log("Added Main Course");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("sideButton").addEventListener("click", function(){
    if(queryParams.type === "Side Dish"){

        queryParams.type = "";
        console.log("Removed Side Dish");
    }else{
        queryParams.type = "Side Dish";
        console.log("Added Side Dish");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("dessertButton").addEventListener("click", function(){
    if(queryParams.type === "Dessert"){

        queryParams.type = "";
        console.log("Removed Dessert");
    }else{
        queryParams.type = "Dessert";
        console.log("Added Dessert");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("breakfastButton").addEventListener("click", function(){
    if(queryParams.type === "Breakfast"){

        queryParams.type = "";
        console.log("Removed Breakfast");
    }else{
        queryParams.type = "Breakfast";
        console.log("Added Breakfast");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("appetizerButton").addEventListener("click", function(){
    if(queryParams.type === "Appetizer"){

        queryParams.type = "";
        console.log("Removed Appetizer");
    }else{
        queryParams.type = "Appetizer";
        console.log("Added Appetizer");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});
document.getElementById("soupButton").addEventListener("click", function(){
    if(queryParams.type === "Soup"){

        queryParams.type = "";
        console.log("Removed Soup");
    }else{
        queryParams.type = "Soup";
        console.log("Added Soup");
    }
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
});

//CALORIES AND SERVINGS!!!!!!!
document.getElementById("minCaloriesSubmit").addEventListener("click", function(){

    const minCalories = document.getElementById("minCalories").value;
    if(minCalories){

        queryParams.minCalories = minCalories;
        console.log(`Set Min Calories to ${minCalories}`);
        console.log("Current queryParams:", queryParams);
        fetchRecipes();

    }else{

        console.log("Min Calories input is empty");
    }
});

document.getElementById("maxCaloriesSubmit").addEventListener("click", function(){

    const maxCalories = document.getElementById("maxCalories").value;
    if(maxCalories){

        queryParams.maxCalories = maxCalories;
        console.log(`Set Max Calories to ${maxCalories}`);
        console.log("Current queryParams:", queryParams);
        fetchRecipes();

    }else{

        console.log("Max Calories input is empty");
    }
});

document.getElementById("minServingsSubmit").addEventListener("click", function(){

    const minServings = document.getElementById("minServings").value;
    if(minServings){

        queryParams.minServings = minServings;
        console.log(`Set Min Servings to ${minServings}`);
        console.log("Current queryParams:", queryParams);
        fetchRecipes();

    }else{

        console.log("Min Servings input is empty");
    }
});
document.getElementById("maxServingsSubmit").addEventListener("click", function(){

    const maxServings = document.getElementById("maxServings").value;
    if(maxServings){

        queryParams.maxServings = maxServings;
        console.log(`Set Max Servings to ${maxServings}`);
        console.log("Current queryParams:", queryParams);
        fetchRecipes();

    }else{

        console.log("Max Servings input is empty");
    }
});

async function fetchRecipes(query) {
    const apiKey = '75c14d686cb74a4ea9f5072008adb97f';
    const url = `https://api.spoonacular.com/recipes/complexSearch?` + 
    `cuisine=${encodeURIComponent(queryParams.cuisine)}` +
    `&diet=${encodeURIComponent(queryParams.diet)}` +
    `&intolerances=${encodeURIComponent(queryParams.intolerances)}` +
    `&addRecipeInformation=true&apiKey=${apiKey}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Recipes:', data);
      console.log(data);
      document.getElementById("pasta").innerHTML = `
        <h2>Recipes for ${query}</h2>
        
        <ul>
          ${data.results.map(recipe => `
            <li>
              <strong>${recipe.title}</strong> - Cuisine: ${recipe.cuisines.join(', ') || 'Unspecified'}
            </li>
          `).join('')}
        </ul>
        `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

// Global query parameters object
let queryParams = {
    cuisine: '',
    diet: '',          // Comma-separated string for dietary selections
    intolerances: '',  // Comma-separated string for intolerance selections
    type: '',
    maxCalories: '',
    minCalories: '',
    minServings: '',
    maxServings: '',
  };
  
  // ----------------- FETCH RECIPES FUNCTION -----------------
  
  async function fetchRecipes() {
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
      
      const suggestionPage = document.getElementById("suggestionPage");
      suggestionPage.innerHTML = `
        <h2>Recipes Based on Your Preferences</h2>
        <ul>
          ${data.results.map(recipe => {
            const cuisines = recipe.cuisines && recipe.cuisines.length > 0 
              ? recipe.cuisines.join(', ')
              : 'Unspecified';
            return `
              <li>
                <strong>${recipe.title}</strong> - Cuisine: ${cuisines}
              </li>
            `;
          }).join('')}
        </ul>
      `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // ----------------- CUISINE SECTION (ONLY ONE SELECTED) -----------------
  
  const cuisines = ["Asian", "American", "European", "Italian", "Mexican", "Southern"];
  
  function updateCuisineUI(selectedCuisine) {
    cuisines.forEach(cuisine => {
      const btn = document.getElementById(cuisine.toLowerCase() + "Button");
      if (btn) {
        if (selectedCuisine === cuisine) {
          btn.classList.add("active");
          btn.setAttribute("data-selected", "true");
        } else {
          btn.classList.remove("active");
          btn.setAttribute("data-selected", "false");
        }
      }
    });
  }
  
  function handleCuisineButtonClick(cuisineName) {
    if (queryParams.cuisine === cuisineName) {
      queryParams.cuisine = "";
      console.log(`Removed ${cuisineName} Cuisine`);
    } else {
      queryParams.cuisine = cuisineName;
      console.log(`Added ${cuisineName} Cuisine`);
    }
    updateCuisineUI(queryParams.cuisine);
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
  }
  
  // Attach event listeners for cuisine buttons
  cuisines.forEach(cuisine => {
    const btnId = cuisine.toLowerCase() + "Button";
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener("click", () => handleCuisineButtonClick(cuisine));
    } else {
      console.warn(`Button with ID "${btnId}" not found.`);
    }
  });
  
  // ----------------- DIETARY SECTION (MULTIPLE SELECTIONS) -----------------
  
  const diets = ["Vegetarian", "Vegan", "Pescetarian", "Paleo"];
  
  function updateDietUI() {
    diets.forEach(diet => {
      const btn = document.getElementById(diet.toLowerCase() + "Button");
      if (btn) {
        // Check if the diet appears in the comma-separated string
        if (queryParams.diet.split(',').map(d => d.trim()).includes(diet)) {
          btn.classList.add("active");
          btn.setAttribute("data-selected", "true");
        } else {
          btn.classList.remove("active");
          btn.setAttribute("data-selected", "false");
        }
      }
    });
  }
  
  function handleDietButtonClick(dietName) {
    // Convert current diet string to an array for easier manipulation
    let dietArr = queryParams.diet ? queryParams.diet.split(',').map(d => d.trim()) : [];
    
    if (dietArr.includes(dietName)) {
      dietArr = dietArr.filter(d => d !== dietName);
      console.log(`Removed ${dietName} Diet`);
    } else {
      dietArr.push(dietName);
      console.log(`Added ${dietName} Diet`);
    }
    queryParams.diet = dietArr.join(',');
    updateDietUI();
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
  }
  
  // Attach event listeners for diet buttons
  diets.forEach(diet => {
    const btnId = diet.toLowerCase() + "Button";
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener("click", () => handleDietButtonClick(diet));
    } else {
      console.warn(`Diet button with ID "${btnId}" not found.`);
    }
  });
  
  // ----------------- INTOLERANCES SECTION (MULTIPLE SELECTIONS) -----------------
  
  const intolerancesList = ["Dairy", "Peanut", "Gluten", "Wheat", "Soy", "Egg"];
  
  function updateIntolerancesUI() {
    intolerancesList.forEach(item => {
      const btn = document.getElementById(item.toLowerCase() + "Button");
      if (btn) {
        if (queryParams.intolerances.split(',').map(t => t.trim()).includes(item)) {
          btn.classList.add("active");
          btn.setAttribute("data-selected", "true");
        } else {
          btn.classList.remove("active");
          btn.setAttribute("data-selected", "false");
        }
      }
    });
  }
  
  function handleIntoleranceButtonClick(itemName) {
    let intoleranceArr = queryParams.intolerances ? queryParams.intolerances.split(',').map(t => t.trim()) : [];
    
    if (intoleranceArr.includes(itemName)) {
      intoleranceArr = intoleranceArr.filter(t => t !== itemName);
      console.log(`Removed ${itemName} Intolerance`);
    } else {
      intoleranceArr.push(itemName);
      console.log(`Added ${itemName} Intolerance`);
    }
    queryParams.intolerances = intoleranceArr.join(',');
    updateIntolerancesUI();
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
  }
  
  // Attach event listeners for intolerance buttons
  intolerancesList.forEach(item => {
    const btnId = item.toLowerCase() + "Button";
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener("click", () => handleIntoleranceButtonClick(item));
    } else {
      console.warn(`Intolerance button with ID "${btnId}" not found.`);
    }
  });
  
  // ----------------- MEAL TYPE SECTION (ONLY ONE SELECTED) -----------------
  
  const mealTypes = ["Breakfast", "Main Course", "Side Dish", "Dessert", "Appetizer", "Soup"];
  
  function updateMealTypeUI(selectedType) {
    mealTypes.forEach(type => {
      const btnId = type.toLowerCase().replace(/ /g, "") + "Button"; 
      // e.g., "Main Course" becomes "maincourseButton"
      const btn = document.getElementById(btnId);
      if (btn) {
        if (selectedType === type) {
          btn.classList.add("active");
          btn.setAttribute("data-selected", "true");
        } else {
          btn.classList.remove("active");
          btn.setAttribute("data-selected", "false");
        }
      }
    });
  }
  
  function handleMealTypeButtonClick(typeName) {
    if (queryParams.type === typeName) {
      queryParams.type = "";
      console.log(`Removed ${typeName}`);
    } else {
      queryParams.type = typeName;
      console.log(`Added ${typeName}`);
    }
    updateMealTypeUI(queryParams.type);
    console.log("Current queryParams:", queryParams);
    fetchRecipes();
  }
  
  // Attach event listeners for meal type buttons
  mealTypes.forEach(type => {
    const btnId = type.toLowerCase().replace(/ /g, "") + "Button";
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener("click", () => handleMealTypeButtonClick(type));
    } else {
      console.warn(`Meal type button with ID "${btnId}" not found.`);
    }
  });
  
  // ----------------- NUMERIC INPUTS FOR CALORIES AND SERVINGS -----------------
  
  // Assuming you have buttons with these IDs in your HTML
  document.getElementById("minCaloriesSubmit")?.addEventListener("click", function() {
    const value = document.getElementById("minCalorie").value;
    if (value) {
      queryParams.minCalories = value;
      console.log(`Set Min Calories to ${value}`);
      fetchRecipes();
    } else {
      console.log("Min Calories input is empty");
    }
  });
  
  document.getElementById("maxCaloriesSubmit")?.addEventListener("click", function() {
    const value = document.getElementById("maxCalorie").value;
    if (value) {
      queryParams.maxCalories = value;
      console.log(`Set Max Calories to ${value}`);
      fetchRecipes();
    } else {
      console.log("Max Calories input is empty");
    }
  });
  
  document.getElementById("minServingsSubmit")?.addEventListener("click", function() {
    const value = document.getElementById("minServingSize").value;
    if (value) {
      queryParams.minServings = value;
      console.log(`Set Min Servings to ${value}`);
      fetchRecipes();
    } else {
      console.log("Min Servings input is empty");
    }
  });
  
  document.getElementById("maxServingsSubmit")?.addEventListener("click", function() {
    const value = document.getElementById("maxServingSize").value;
    if (value) {
      queryParams.maxServings = value;
      console.log(`Set Max Servings to ${value}`);
      fetchRecipes();
    } else {
      console.log("Max Servings input is empty");
    }
  });
  
  // ----------------- DROPDOWN TOGGLING AND PAGE NAVIGATION -----------------
  
  document.addEventListener("DOMContentLoaded", function () {
    function setupToggle(toggleId, optionsId) {
      const toggle = document.getElementById(toggleId);
      const options = document.getElementById(optionsId);
      toggle.addEventListener("change", function () {
        if (toggle.checked) {
          options.classList.remove("hidden");
          options.style.display = "block";
          options.style.animation = "fadeDown 0.5s ease-out";
        } else {
          options.style.animation = "fadeUp 0.5s ease-out";
          setTimeout(() => {
            options.style.display = "none";
            options.classList.add("hidden");
          }, 300);
        }
      });
      // Initialize options visibility
      if (toggle.checked) {
        options.style.display = "block";
      } else {
        options.style.display = "none";
        options.classList.add("hidden");
      }
    }
  
    setupToggle("cuisineToggle", "cuisineOptions");
    setupToggle("dietaryToggle", "dietaryOptions");
    setupToggle("intolerancesToggle", "intolerancesOptions");
    setupToggle("typeToggle", "typeOptions");
  
    // Page navigation (assuming the HTML contains the page select buttons)
    const preferencePage = document.getElementById("preferencePage");
    const suggestionPage = document.getElementById("suggestionPage");
    const preferenceButton = document.getElementById("preferencePageButton");
    const suggestionButton = document.getElementById("suggestionPageButton");
    const pageButtons = document.querySelectorAll(".pageSelectButton");
    const pageSelection = document.querySelector(".pageSelection");
  
    function showPage(page) {
      if (page === "preference") {
        preferencePage.style.display = "block";
        suggestionPage.style.display = "none";
      } else if (page === "suggestion") {
        preferencePage.style.display = "none";
        suggestionPage.style.display = "block";
      }
    }
    
    function setActivePageButton(activeButton) {
      pageButtons.forEach(button => button.classList.remove("active"));
      activeButton.classList.add("active");
      pageSelection.classList.add("active");
    }
  
    preferenceButton.addEventListener("click", function () {
      showPage("preference");
      setActivePageButton(preferenceButton);
    });
  
    suggestionButton.addEventListener("click", function () {
      showPage("suggestion");
      setActivePageButton(suggestionButton);
    });
  
    // Set initial page view
    showPage("preference");
    setActivePageButton(preferenceButton);
  });
  
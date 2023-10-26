import Recipes from "./Recipes";

const categories = [
  {
    id: 1,
    title: "Pizza",
    recipes: Recipes.slice(1, 3),
  },
  {
    id: 2,
    title: "Lunch and Desert",
    recipes: Recipes.slice(5, 7),
  },
  {
    id: 3,
    title: "Drinks",
    recipes: Recipes.slice(9, 11),
  },
  {
    id: 4,
    title: "Hookah",
    recipes: Recipes.slice(13, 16),
  },
];

export default categories;

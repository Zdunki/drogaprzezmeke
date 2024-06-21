import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import { theme } from "./Themes/theme.js";
import { SearchBar } from "./Components/SearchBar/SearchBar.js";
import { useState } from "react";
import { RecipesList } from "./Components/RecipesList/RecipesList.js";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <SearchBar setRecipes={setRecipes} />
        <RecipesList recipes={recipes} />
      </ThemeProvider>
    </div>
  );
}
// Dodać spojny theme

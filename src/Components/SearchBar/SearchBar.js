import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

export const SearchBar = ({ setRecipes }) => {
  const [query, setQuery] = useState("Tomato");

  async function getRecipes() {
    const result = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=42e498d3&app_key=50881bff153024d1ccde89dc7db27469`,
    );
    const resultData = await result.json();
    setRecipes(resultData.hits);
  }

  useEffect(() => {
    getRecipes();
  }, [query]);

  function handleEnterPress(keyPressed) {
    if (keyPressed === "Enter") getRecipes();
  }

  function handleTextInput(input) {
    setQuery(input.target.value);
  }

  return (
    <TextField
      onKeyDown={handleEnterPress}
      onChange={handleTextInput}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={getRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

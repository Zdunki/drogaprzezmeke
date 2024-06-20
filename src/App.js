import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import { theme } from "./Themes/theme.js";

export default function App() {
  //const [recepies, setRecepies] = useState([]);
  return (
    <div className="App">
      <Header />
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  );
}
// Dodać spojny theme

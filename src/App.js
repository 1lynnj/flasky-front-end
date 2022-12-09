// import logo from "./logo.svg";
import "./App.css";
import BreakfastList from "./components/BreakfastList";

function App() {
  const name = "Cheetahs";

  return (
    <div>
      <h1>{name} Breakfast App</h1>
      <BreakfastList />
      <BreakfastList />
    </div>
  );
}

export default App;

// created the BreakfastList component because the goal
// is to keep the app component as small as possible.

import "./App.css";
import GameOfLife from "./component/GameOfLife";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-3xl font-bold">Game of Life</h1>
        <GameOfLife />
      </div>
    </>
  );
}

export default App;

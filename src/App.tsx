import { Attribution } from "./components/Attribution";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="h-screen bg-pale-blue flex flex-col items-center justify-center px-5">
      <Card />
      <Attribution />
    </div>
  );
}

export default App;

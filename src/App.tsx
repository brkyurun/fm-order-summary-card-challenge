import { Attribution } from "./components/Attribution";
import { Card } from "./components/Card";

const styles = {
  wrapper: "h-screen bg-pale-blue flex flex-col items-center justify-center px-5",
};

function App() {
  return (
    <div className={styles.wrapper}>
      <Card />
      <Attribution />
    </div>
  );
}

export default App;

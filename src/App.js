import { NumberProvider } from "./component/NumberProvider";
import RandomNumber from "./RandomNumber";
export default function App() {
  return (
    <NumberProvider>
      <div className="App">
        <RandomNumber />
      </div>
    </NumberProvider>
  );
}

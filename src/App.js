import KeyboardShortcut from "./components/KeyboardShortcut";
import { GlobalProvider } from "./GlobalContext";
import ActiveListHoc from "./components/ActiveList";

function App() {
  const turnGreen = (description) => {
    console.log("this turns green", description);
  };
  const turnYellow = (description) => {
    console.log("this turns yellow", description);
  };
  return (
    <div className="App">
      <GlobalProvider>
        <KeyboardShortcut
          combos={"shift s"}
          description="Shift + s is pressed"
          callback={turnGreen}
        />
        <KeyboardShortcut
          combos={"shift y"}
          description="Shift + y is pressed"
          callback={turnYellow}
        />
        <KeyboardShortcut
          combos={"shift Z"}
          description="Shift + z is pressed"
          callback={turnYellow}
        />
        <ActiveListHoc />
      </GlobalProvider>
    </div>
  );
}

export default App;

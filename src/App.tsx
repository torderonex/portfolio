import Desktop from "./components/Desktop";
import TaskBar from "./components/TaskBar";
import GlobalStyles from "./styles/global"
function App() {
  return (
    <div className="App">
      <Desktop/>
      <TaskBar/>
      <GlobalStyles/>
    </div>
  );
}

export default App;

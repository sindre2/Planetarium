import Provider from "./components/ThemeProvider/Provider";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Provider>
        <LandingPage />
      </Provider>
    </div>
  );
}

export default App;

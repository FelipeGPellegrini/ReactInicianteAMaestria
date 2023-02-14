import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForm
        user={{
          name: "Felipe Pellegrini",
          email: "lipegomespellegrini10@gmail.com",
          bio: "Carioca",
          role: "ger",
        }}
      />
    </div>
  );
}

export default App;

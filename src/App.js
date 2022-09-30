import "./App.css";
import "macro-css";

function App() {
  return (
    <div className="wrapper clear">
      <div className="logo">
        <img src="https://i.pinimg.com/originals/be/82/15/be821544fc5f328567cb538f96edb49a.jpg"></img>
      </div>
      <div className="welcomePageContent">
        <h3>Готов завести себе нового друга?</h3>
        <p>
          У нас ты найдешь самых милых питомцев. Все они ждут, чтобы стать твоим
          новым другом.
        </p>
        <button>
          <p>Начать</p>
        </button>
      </div>
    </div>
  );
}

export default App;

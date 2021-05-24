
import './App.css';
import Profil from './Profile/Profil';
const App = () => {
  const alertMyInput = name => alert(name);
  return (
    <div className="App">
       
       <Profil
        name= {"Nihel"} alertMyInput={alertMyInput}
        bio= {"I am 29 years old, i am from hammamet, and i am a fullstack JS developer"}
        profesion={"fullstack JS developer"}
      >
        <img src="imageinsrc.jpg" alt=""/>
      </Profil>
     
    </div>
  );
}

export default App;

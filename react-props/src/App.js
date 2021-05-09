import "./App.css";
import Profile from "./profile/Profile";
import pic from './profile/safa.jpg'



function App() {
  
  const fullName = "Safa Chaabane";
  
  
  const bio = `24 years old,from Tunisia Nabeul Bni Khalled `;
  
  
  
  const profession = " I'm' a Web Developper,I'm staudy master degree in ISIMS";


const show = (name) => {
  alert(name)
}
  return (
    <div className="App">
      <Profile name={fullName} bio={bio} profession={profession} show={show}>
      <img className="img" src={pic} alt='safa'/> 
      </Profile>
      
    </div>
  );
}

export default App;

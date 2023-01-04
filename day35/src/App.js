
import './App.css';

function Profile(props){
  const {img, name, age, profession} = props
  return (
    <div className='profile'>
      <img src={img} alt='people'></img>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>profession: {profession} </p>
    </div>
  )
}


function App() {

  const user1 = {
    img : 'pics/image-aqua.png',
    name : 'John Smith',
    age : 20,
    profession : 'Frontend Developer'
  }
  const user2 = {
    img : 'pics/image-rose.png',
    name : 'Harry Potter',
    age : 25,
    profession : 'Backend Developer'
  }
  const user3 = {
    img : 'pics/image-steel.png',
    name : 'Spiderman',
    age : 25,
    profession : 'Super hero'
  }
  return (
    <div className="App">
      <Profile  
      {...user1}    
      />
      <Profile  
      {...user2}    
      />
      <Profile  
      {...user3}    
      />
    </div>
  );
}

export default App;

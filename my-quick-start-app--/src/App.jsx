import './App.css'

function formatName(user) {
  return user.firstName + " " + user.lastName
}

const user = {
  firstName: "My",
  lastName: "Name"
}

function App() {
  return <div className='App'>Hello, {formatName(user)}!</div>
}

export default App

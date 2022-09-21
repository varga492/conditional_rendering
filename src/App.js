import logo from './logo.svg'
import './App.css'
import { UserInterface } from './user-interface/user-interface.jsx'
import { DATA } from './data/data-component.jsx'
import { useState } from 'react'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  // const [isTicked] = useState(false)

  return (
    <>
      <UserInterface title={DATA[0].title} dataArray={DATA} />
    </>
  )
}

export default App

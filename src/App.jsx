import './App.css'
import { HashRouter,Routes, Route } from 'react-router-dom'
import HomePage from './component/IndexPage/HomePage'

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' Component={HomePage}/>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App

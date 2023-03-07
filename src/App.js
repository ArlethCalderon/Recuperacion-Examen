import {React} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/Home'
import Usuarios from './componentes/Usuarios'
import Navbar from './componentes/Navbar'
 

const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="usuarios" element={<Usuarios/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App
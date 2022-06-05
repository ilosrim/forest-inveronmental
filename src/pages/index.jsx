import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Projects from './projects'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
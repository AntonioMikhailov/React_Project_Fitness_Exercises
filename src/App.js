 
import './App.css';
import { Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material'
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';

function App() {
 return (
  //  Применяем библиотеку Material UI ( только для демонстрации - т.к. быстрее и удобней в CSS классы прописывать через сниппеты, + код не засоряется -  имхо)
  <Box width='400px' sx={{width: {xl: '1488'}}} m='auto'>
      <div className="App">
   <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/exercises' element={<Home/>}/>
       <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
     </Routes>
   
   
    </div>
  </Box>
  );
}

export default App;

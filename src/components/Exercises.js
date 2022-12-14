import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
// import Loader from './Loader';
import  {Link} from 'react-scroll'
import ExerciseLocalData from '../assets/dataRapidExercises.json'
// здесь вместо запроса будем использовать БД локальную
import { exerciseOptions, fetchData } from '../utils/fetchData'; 
import ExerciseCard from './ExerciseCard';
import { useRef } from 'react';
import BodyPart from './BodyPart';
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // устанавливаем текущую страницу
  const [currentPage, setCurrentPage] = useState(1);
 const title = useRef(null)
  const exercisesPerPage =6;  
 //МЕНЯЕМ отображение упражнений по клику на категории 
  useEffect(() => {
    let exercisesData;
      if (bodyPart === 'all') {
        exercisesData = ExerciseLocalData;
        // ЕСЛИ получать с сервера
        // exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = ExerciseLocalData.filter(
          (exercise) => exercise.bodyPart.includes(bodyPart)  
            // ЕСЛИ получать с сервера
        // exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
         )
   }
      // Меняем state который в Home
    setExercises(exercisesData);
  // fetchExercisesData();
  }, [bodyPart, setExercises]);
  // Пагинация  - настройки
  // последнее упражнение на текущей странице
  const indexOfLastExercise = currentPage * exercisesPerPage;
   // первое упражнение на текущей странице
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // массив текущих упражнений на текущей странице
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  // ф. меняет текущую страницу
  const paginate = (event, value) => {
 setCurrentPage(value);
    //  скролл к верху Раздела  - заменим на react-scroll 
//  title.current.scrollIntoView()
  };
  return (
<>
<Box id="showRes" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography ref={title} variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results   </Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
         <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      {/* Применим react-scroll для плавной анимации */}
    <Link to={'showRes'} smooth={true} duration={500}>
    <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate} 
            size="large"
          />
        )}
      </Stack>
    </Link>
    </Box>
</>
  );
};
export default Exercises;

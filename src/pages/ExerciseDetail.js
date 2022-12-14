import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseLocalData from '../assets/dataRapidExercises.json'
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
 ////////////////////////////////////////////////////// 
 //   ВАЖНО! т.к. кол-во запросов к БД Rapid API оганичено на бесплатном тарифе  - я получил весь массив с сервера и cконвертировал всю БД из Rapid (массив с объектами - около 1400 элементов и сделал БД локальной в файле dataRapidExercises.json)
    // Поэтому - буду обращаться в локальной БД - но можно и к серверу. Ниже закоментировал код
    ////////////////////////////////////////////
const ExerciseDetail = () => {
  // каждое упражнение
  const [exerciseDetail, setExerciseDetail] = useState();     
  const [similarTargets, setSimilarTargets] = useState()
  // const [equipmentExercises, setEquipmentExercises] = useState([]);

  // получаем параметр из URL строки
  const { id } = useParams();
  useEffect(() => {
    // получаем текущее упражнение  - объект по клику на нем в отдельую страницу
   const exerciseDetailData = ExerciseLocalData.filter((item)=> {
      return item.id === id
  })  
  setExerciseDetail(exerciseDetailData); // будет undefined
// запускаем поиск target (например  - abs) во всем массиве и передаем результат в SimilarExpression
const similarTargets = ExerciseLocalData.filter((item)=> {
return  item.target === exerciseDetailData[0].target
})
setSimilarTargets(similarTargets)
    // window.scrollTo({ top: 0, behavior: 'smooth' }); // Применим react-scroll для плавной анимации

    // Используем локальну БД
    // const fetchExercisesData = async () => {
    //   const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    //   const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
    //   setExerciseDetail(exerciseDetailData);
    //   const similarTargets = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
    //   setSimilarTargets(similarTargets);
  // fetchExercisesData();
  }, [id]);
// если массива нет или пустой - return
  if (!exerciseDetail || !similarTargets) return;
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} /> 
      <SimilarExercises similarTargets={similarTargets} 
      />
    </Box>
  );
};
export default ExerciseDetail;
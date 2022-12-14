import React, { useEffect } from 'react'
import { useState } from 'react'
import {Box, Stack, TextField, Typography } from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import ExerciseLocalData from '../assets/dataRapidExercises.json'
import bodyPartsList from '../assets/dataBodyPartsList.json'
import HorizontalScrollbar from './HorizontalScrollbar'
import { useRef } from 'react'
// получаем из Home State c разделами упражнений
export default function SearchExercises({setExercises, bodyPart, setBodyPart }) {
  const inputRef = useRef()
  // // для результатов поиска из строки воода
  const [search, setSearch] = useState('')
  // для всех упражнений
  // для ВСЕХ категорий массив - all -body, cardio  и др.
const [bodyParts, setBodyParts] = useState([])
useEffect(()=> {
  // Fetch - отключаем чтобы не было CORS ошибки при просмотре Сборки на ПК
  // const fetchExercisesData =  async ()=> {
  //     // const exersisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions/bodyParts);
  //     // или через импорт локального файла БД
  // }
  //Беру из локальной БД  - импортируем файл с БД категорий
  const bodyPartsData = bodyPartsList
 setBodyParts( ['all', ...bodyPartsData] )
 },[])
// вызываем поиcк по Enter
function handleSearchByKey(e) { 
  if(search && e.key === 'Enter') {
    handleSearch() // вызываем основную ф. в которой вся логика поиска
  }
 }
// поиск Логика 
const handleSearch =  ( )=> { 
  if(search  ) {
     // через импорт файла удобней но можно через Fetch - ниже
   const searchedExersices =  ExerciseLocalData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)  
       ) 
       // очищаем поле после каждого запроса
       setSearch('')
     // Устанавливаем state Поиска
       setExercises(searchedExersices) 
     // Fetch - отключаем чтобы не было CORS ошибки при просмотре Сборки на ПК
  // fetch('./dataRapidExercises.json')
  // .then((response) => response.json())
  //   .then((exersisesData) => {
  //    // поиск в Filter по ключам объекта - чтобы искать  во всех ключах  
  //    const searchedExersices =  exersisesData.filter(
  //       (exercise) => exercise.name.toLowerCase().includes(search)
  //       || exercise.target.toLowerCase().includes(search)
  //       || exercise.equipment.toLowerCase().includes(search)
  //       || exercise.bodyPart.toLowerCase().includes(search)  
  //      ) 
  //      // очищаем поле после каждого запроса
  //      setSearch('')
  //    // Устанавливаем state Поиска
  //      setExercises(searchedExersices) 
  //    });
 }
}
return (
<>
<Stack
alignItems='center' mt='37px'
justifyContent='center' p='20px'
>
  <Typography
  fontWeight={700}
  sx={{fontSize: {lg:'44px', xs: '30px'}}}
  mb='50px' textAlign='center'>
  Awesome Exercises you <br /> should Know
  </Typography>
  <Box position='relative' mb='72px'>
    <TextField
    sx={{input: {fontWeight: '700', border: 'none', borderRadius: '4px'}, width: {lg: '800px', xs: '350px'}, backgroundColor: '#fff', borderRAdius: '40px'}}
    height='76px'
    ref={inputRef}
    // Управляемый input + переводим в строчные все символы
    value={search}
    onKeyDown={(e)=> handleSearchByKey(e)}
    onChange={(e)=> {setSearch(e.target.value.toLowerCase())}}
    placeholder='примеры: bend, abs, legs, lats, chest, arm, quads ...  ' type={'text'} >
    </TextField>
    <button
    onClick={handleSearch}
    className={'search-btn'}>Search</button>
  </Box>
<Box 
sx={{position: 'relative', width: '100%', p: '20px'}}
>
  <HorizontalScrollbar
  bodyParts={bodyParts}
  // передаем тот раздел по которому кликнули
  bodyPart={bodyPart}
  setBodyPart={setBodyPart}
/>
</Box>
</Stack>
</>
  )
}

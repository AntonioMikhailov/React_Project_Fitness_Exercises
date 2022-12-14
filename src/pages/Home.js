import React, { useState } from 'react'
import {Box} from '@mui/material'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
export default function Home() {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all') // по умолчанию все категории покажем
  return (
   <Box>
      <HeroBanner/>
      <SearchExercises
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
        <Exercises 
      setExercises={setExercises}
         exercises={exercises}
         bodyPart={bodyPart}
      />
   </Box>
  )
}

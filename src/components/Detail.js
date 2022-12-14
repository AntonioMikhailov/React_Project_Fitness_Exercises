import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import ExerciseLocalData from '../assets/dataRapidExercises.json'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
const Detail = ( {exerciseDetail } ) => {
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
 {
      exerciseDetail.map((item, i)=> { 
       // вставляем этот массив внутрь первого JSX c MAP чтобы получить значения в name: уже из первого цикла
      const extraDetail = [
        {icon: BodyPartImage, name: item.bodyPart},
        {icon: TargetImage,name: item.target},
        {icon: EquipmentImage,name: item.equipment},
      ];
     return ( 
           <React.Fragment key={i}>
       <img src={item.gifUrl} alt={item.name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {item.name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{item.name}</span> bup is one
          of the best <br /> exercises to target your {item.target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={item.bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))} 
      </Stack>
       </React.Fragment>
      )})//  
  }
    </Stack>
  );
};
export default Detail;

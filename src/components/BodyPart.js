import React from 'react'
import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'
import  {Link} from 'react-scroll'
// передаем имена разделов
const BodyPart = ({item, setBodyPart, bodyPart }) => {
  return (
<Link to={'showRes'} smooth={true} duration={500}>
<Stack
 type='button'
 alignItems='center'
 justifyContent='center'
 className={'bodyPart-card'} 
 sx={{
  // рамка  вверху для активного раздела
  borderTop: bodyPart === item ? '4px solid #FF2625' : '',
   backgroundColor: '#fff',
  borderBottomLeftRadius: '20px',
  width: '270px',
  height: '270px', 
  cursor: 'pointer', gap: '47px' }}
  onClick={() => {
    setBodyPart(item);
    // вместо window.scrollTo применим пакет react-scroll для плавной анимации в якорям
    // window.scrollTo({ top: 1800, behavior: 'smooth' });
  }}
  >
  <img src={Icon} alt="img" style={{width: '40px', height: '40px'}}  />
  <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>
    {item}
  </Typography>
 </Stack>
</Link>
  )
}
export default BodyPart

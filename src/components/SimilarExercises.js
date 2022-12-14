import React from 'react'
import { Link } from 'react-router-dom';
const SimilarExercises = ({similarTargets}) => {
 
  return (
   <>
     <section className="similar-row">
     <div className="sim-title">Exercises that target the same <span> muscle group </span></div>
     <div className="similar-wrapper"> 
    {
         similarTargets.slice(0,3).map((item, i)=> { 
          return ( 
           <Link key={i} to={`/exercise/${item.id}`} className="similar-item">
             <div className="sim-itemImage"><img src={item.gifUrl} alt="img"/></div>
             <div className="sim-itemName">{item.name}</div>
             <div className="sim-itemBodyPart">Body Part: {item.bodyPart}</div>
             <div className="sim-itemBodyTarget">Target: {item.target}</div>
           </Link>
           )}) 
    }
       </div>
     </section>
   </>
  )
}
export default SimilarExercises
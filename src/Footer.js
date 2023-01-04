import React from 'react'

const Footer = ({length}) => {
  //  const today = new Date(); 


  return (
<footer>
    <p> 
    { length === 0 ? "no items selected" : 
    ( length === 1 ? `${length} item selected` :
    `${length} items selected` )}
       {/*   {length} list {length === 1 ? "item" : "items"}  */}</p>
</footer>
  )
}

export default Footer
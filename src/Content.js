import React from 'react'
import itemList from './itemList'

const Content = ({items, handleCheck, handleDelete}) => {
 


  return (
 <main>
    {items.length ? ( 
   <itemList 
    items={items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}/>
    ) : (
        <p style={{ marginTop: '2rem'}}>Your list is empty.</p>
    )}
</main>
  )
}

export default Content
import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'
const CharacterGrid = ({ isLoading ,items}) => {


    if(isLoading){
        return  <Spinner />
       
    }else{
        return <section className='cards'>
                {
                     items.map((item) =>(
                         
                         <CharacterItem key= {item.char_id} item={item}></CharacterItem>
                    ))
                }
             </section>
    
    }
   
}

export default CharacterGrid;
import React, { useEffect } from 'react'
import Button from '../../Components/Button/Button'

const ButtonPage = ({listData}) => {
  useEffect(()=>{
    console.log(listData);
  },[])
  return (
   <Button listData={listData} />
  )
}

export default ButtonPage
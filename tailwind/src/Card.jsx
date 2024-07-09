import React from 'react'

import { PropTypes } from "prop-types";

export const Card = ({arr}) => {
   

   
  return (
    <div>
        <div className="bg-gray-100 rounded-xl text-black pg-100 p-20 m-10">
            <h2 className="bg-blue-200">Name : {arr.name}</h2>
            <h2>SureName : {arr.surname}</h2>

        </div>
    </div>
  )


  
}
Card.propTypes={
    arr:PropTypes.Object,
    name:PropTypes.String,
    // arr.name:PropTypes.String,
  }

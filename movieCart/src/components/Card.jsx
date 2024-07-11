import React from 'react'

const Card = ({imageUrl,name,releaseYear,duration,genre,description}) => {
  return (
    <div style={{display:"flex",width:"43rem",height:"17rem",padding:"2rem 2rem", boxShadow:"100px 100px 100px 100px black;",border:"2px solid black",borderRadius:"1rem",margin:"1rem 1rem"}} className='bg-green-800'>
        <div >

        <img src={imageUrl} alt="" style={{width:"23rem",objectFit:"cover"}}/>
        </div>

        <div style={{backgroundColor:"black",color:"white",padding:"0rem 2rem",display:"flex",gap:"1.5rem",flexDirection:"column",height:"12.9rem"}}>
            <div style={{paddingTop:"0rem"}} >
            <h2>{name}</h2>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <p>{releaseYear}</p>
                <p>{duration}</p>
                <p>{genre}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
      </div>
    </div>
  )
}

export default Card
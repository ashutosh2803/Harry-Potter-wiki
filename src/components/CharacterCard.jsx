import React from 'react'

const CharacterCard = (item) => {
  return (
      <div style={{cursor: "pointer", width: "20%", height: "30vh", margin: "2%"}}>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div style={{width: "100%"}}><img src={item.image} alt="avatar" style={{width: "100%", height: "25vh", borderRadius: "50%"}} /></div>
              <div style={{ textAlign: "center", fontSize: "40px", fontWeight: "500", color: 'white' }}>{item.name}</div>  
          </div>
    </div>
  )
}

export default CharacterCard
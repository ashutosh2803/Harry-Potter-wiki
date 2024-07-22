import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import {v4 as uuid} from "uuid";

const AllCharacters = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getData();
    }, [])
    
    const getData = () => {
        setLoading(true)
        axios.get("https://hp-api.onrender.com/api/characters").then((res) => setCharacters(res.data.splice(0, 24))).catch((err) => console.log(err))
        setLoading(false)
    }

  return (
      loading ? <div>Loading</div> :
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
              {characters?.map((item) => <CharacterCard key={uuid()} {...item} />)}
          </div>)
}

export default AllCharacters


import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Songs() {
        const [songs,setSongs] = useState([])
        useEffect(()=>
        {
          axios.get("http://localhost:3000/songs").then((response)=>
          {
            setSongs(response.data)
          }).catch((err)=>
          {
            console.log(err);
          })
        },[])
      
        return (
          <div className="App">
              <h2>Songs List</h2>
              <br/>
            <table>
                    <thead>
                      <tr>
                      <th>Movie</th>
                      <th>Title</th>
                      <th>Song Length</th>
                      <th>Singer</th>
                      </tr>
                    </thead>
                    {
                      songs.map((data)=>
                      {
                        return(
                            <tbody>
                              <tr>
                                <td>{data.movie}</td>
                                <td>{data.title}</td>
                                <td>{data.duration}</td>
                                <td>{data.singer}</td>
                              </tr>
                            </tbody>
                          )
                      })
                    }
                    </table>
          </div>
    )
}

export default Songs

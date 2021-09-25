import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
function Songs() {
        let history = useHistory();
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
      
        const handleSong = (songDetails)=>
        {
          let result = window.confirm(`Are you sure you want to view the "${songDetails.title}" song details ? `)
          console.log(result);
          if(result)
          {
            history.push({
              pathname:'/addSongs',
              data:songDetails
            })
          }
          
        }

        return (
          <div className="App">
              <h2 style={{marginRight:'1400px'}} >Songs List</h2>
              <br/>
            <table>
                    <thead>
                      <tr>
                      <th style={{border:'1px solid'}}>Movie</th>
                      <th style={{border:'1px solid'}}>Title</th>
                      <th style={{border:'1px solid'}}>Song Length</th>
                      <th style={{border:'1px solid'}}>Singer</th>
                      </tr>
                    </thead>
                    {
                      songs.map((data)=>
                      {
                        return(
                            <tbody>
                              <tr style={{border:'1px solid'}}>
                                <td style={{border:'1px solid',cursor:'pointer',textDecoration:'underline',color:'blue'}} onClick={()=>handleSong(data)}>{data.movie}</td>
                                <td style={{border:'1px solid'}}>{data.title}</td>
                                <td style={{border:'1px solid'}}>{data.duration}</td>
                                <td style={{border:'1px solid'}}>{data.singer}</td>
                              </tr>
                            </tbody>
                          )
                      })
                    }
                    </table>
                    <button style={{float:'left'}} onClick={()=>history.push('/addSongs')}>Add Songs</button>
          </div>
    )
}

export default Songs

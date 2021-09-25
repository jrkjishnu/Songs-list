import React from 'react'
import {useForm} from 'react-hook-form'

function SongList({songs,setSongs}) {

    const {register,handleSubmit,reset} = useForm()

    const onSubmit = (formData)=>
    {
        formData.id = songs.length+1;
        setSongs([...songs,formData])
        reset(register)
    }

    return (
        <div>
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
                     songs?songs.map((data)=>
                      {
                        return(
                            <tbody>
                              <tr>
                                <td>{data.movie}</td>
                                <td>{data.title}</td>
                                <td>{data.["song-length"]}</td>
                                <td>{data.singer}</td>
                              </tr>
                            </tbody>
                          )
                      }):null
                    }
                    </table>
                    <form style={{float:'left',marginTop:'15px'}} onSubmit={handleSubmit(onSubmit)}>
                        <input style={{marginLeft:'12px'}} {...register('movie')} /><label htmlFor="">MovieName</label>
                        <br/><br/>
                        <input {...register('title')} /><label htmlFor="">Song Title</label>
                        <br/><br/>
                        <input style={{marginLeft:'31px'}} {...register('song-length')} /><label htmlFor="">Song Duration</label>
                        <br/><br/>
                        <input style={{marginLeft:'-25px'}} {...register('singer')} /><label htmlFor="">Singer</label>
                        <br/><br/>
                        <button style={{marginLeft:'-70px'}} type="submit">Submit</button>
                    </form>
                
        </div>
    )
}

export default SongList

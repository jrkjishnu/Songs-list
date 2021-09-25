import React, { useEffect } from 'react'
import {Formik,Form} from 'formik'
import {Input} from './Input'
import * as Yup from 'yup';
import {useHistory,useLocation} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'


function AddSongs() {
  const location = useLocation();
  const data = location.data;
  console.log(data);
  const id = uuidv4();
  let history = useHistory();
  const validate= Yup.object({
    movie: Yup.string().required('Movie Name Required'),
    title: Yup.string().required('Title Required'),
    duration: Yup.string().required('Duration Required'),
    singer: Yup.string().required('Singer Name Required'),
  })
useEffect(()=>
{
  window.onbeforeunload = function (e) {
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Sure?';
    }

    // For Safari
    return 'Sure?';
}
},[])
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <Formik 
            initialValues={{
              id:data?data.id:id,
              movie:data?data.movie:'',
              title:data?data.title:'',
              duration:data?data.duration:'',
              singer:data?data.singer:'',
            }}
            validationSchema = {validate}
            onSubmit={values =>{
              console.log(values)
              if(data)
              {
                axios.put(`http://localhost:3000/songs/${data.id}`,values).then((response)=>
              {
                console.log('put');
                console.log(response.data);
              }).catch((err)=>
              {
                console.log(err);
              })
              }
              else
              {
                axios.post(`http://localhost:3000/songs/`,values).then((response)=>
              {
                console.log('post');
                console.log(response.data);
              }).catch((err)=>
              {
                console.log(err);
              })
              }
              
              
              history.push('/songs')
  
            }}
            >
            {formik =>(
              <div>
               <h1 className="my-4 font-weight-bold-display-4">
               Add Songs</h1> 
               <Form>
                 <Input label="Movie" name="movie" type="text" />
                 <Input label="Title" name="title" type="text" />
                 <Input label="Duration" name="duration" type="string" />
                 <Input label="Singer" name="singer" type="text" />
                <button className="btn btn-dark mt-3" type="submit">Submit</button>
               </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
      
    </div>
  )
}

export default AddSongs

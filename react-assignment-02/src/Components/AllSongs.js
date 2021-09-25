import React, { useState } from 'react'
import SongList from './SongList';

function AllSongs() {
    const [songs,setSongs] = useState([{
        "id": 1,
        "movie": "Lucifer",
        "title": "Raftaara",
        "song-length": "6:16",
        "singer": "Jyotsna"
      },
      {
        "id": 2,
        "movie": "Love Action Drama",
        "title": "Kududkku",
        "song-length": "2:50",
        "singer": "Vineeth"
      },
      {
        "id": 3,
        "movie": "Theevandi",
        "title": "Jeevamshamayi",
        "song-length": "6:14",
        "singer": "Harishankar"
      },
      {
        "id": 4,
        "movie": "Theevandi",
        "title": "Angamali",
        "song-length": "5:14",
        "singer": "Harishankar"
      }])

      console.log(songs.length);
    
    return (
        <div>
            <h2 style={{marginLeft:'-1395px'}}>Number of Songs in the Play List:{songs.length}</h2>
            <hr />
            <SongList songs={songs} setSongs={setSongs} />
        </div>
    )
}

export default AllSongs

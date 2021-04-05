import React from 'react';
import SongsList from './SongsList';

const SongDetail = ({song}) => {
    if(!song){
        return null;
    }

    return(
        <div className="song-detail">
            <div song-text>
            <p>Artist: {song["im:artist"].label}</p>
            <p>Track: {song["im:name"].label}</p>
            </div>
        </div>
    )
}

export default SongDetail;
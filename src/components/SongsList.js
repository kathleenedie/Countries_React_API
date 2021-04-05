import React from 'react';

const SongsList = ({songs, onSongSelected}) => {

    const songsListItems = songs.map((song, index) => {
        return <li onClick={() => onSongSelected(song)} key={index}>{index + 1}: {song["im:artist"].label}</li>
    })

    return(

        <div className="songs-list">
            <ul>{songsListItems}</ul>
        </div>
    )
}

export default SongsList;
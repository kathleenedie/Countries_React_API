import React, { useEffect, useState} from 'react';
import SongDetail from '../components/SongDetails';
import SongsList from '../components/SongsList';


const ChartContainer = () => {

    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    

    const getSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then((res) => res.json())
        .then((data) => setSongs(data.feed.entry))
    }

    useEffect(() => {
        getSongs();
    }, []);

    const handleSelectedSong = (song) => {
        setSelectedSong(song);
    }

    return(
        <div className="chart-container">
            <SongDetail songs={songs} song={selectedSong}/>
            <SongsList songs={songs} onSongSelected={handleSelectedSong}/>
        </div>
    );

}

export default ChartContainer

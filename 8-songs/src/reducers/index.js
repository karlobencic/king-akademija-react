import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Vinnie Paz - End of Days', duration: '3:50' },
        { title: 'Jedi Mind Tricks - Design in Malice', duration: '3:55' },
        { title: 'Armin van Buuren feat. Josh Cumbee - Sunny Days', duration: '3:11' },
        { title: 'Super8 & Tab - Elektra', duration: '8:16' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

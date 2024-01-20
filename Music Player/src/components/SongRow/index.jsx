import './style.scss';
import { ReactComponent as Move } from '../SVG/move.svg';
import { ReactComponent as Play } from '../SVG/play_fill.svg';
import { ReactComponent as Heart } from '../SVG/heart.svg';
import { ReactComponent as Check } from '../SVG/check.svg';
import { ReactComponent as Share } from '../SVG/share.svg';
import { ReactComponent as Down } from '../SVG/arrow_down.svg';

export const SongRow = ({ song, index }) => {
    const { song_name, artist_name, track_number } = song;
    console.log(index);
    return (<div key={index} className='songrow'>
        <div className='svgs'>
            <Move />
            <Play />
        </div>
        <div>
            <h4>{song_name}</h4>
        </div>
        <div>
            <h4>{artist_name}</h4>
        </div>
        <div>
            <h4>{track_number}</h4>
        </div>
        <div className='svgs'>
            <Heart/>
            <Check/>
            <Share/>
            <Down/>
        </div>
    </div>);
};
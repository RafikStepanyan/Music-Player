import { useContext } from 'react';
import { MyContext } from '../../App';
import './style.scss';
import { SongRow } from '../SongRow';

export const SongList = () => {
    const { songArray, setSongArray } = useContext(MyContext);
    console.log("hi");
    return (<div className='songlist'>
        <div className='tableheader'>
            <div>
            </div>
            <div>
                <h4>Song Name</h4>
            </div>
            <div>
                <h4>Artist Name</h4>
            </div>
            <div>
                <h4>Track</h4>
            </div>
            <div>
            </div>
        </div>
        <div className='songrowtable'>
            {
                songArray.map((e, index) => {
                    return <SongRow key={index} song={e} index={index} />;
                })
            }
        </div>
    </div>);
};
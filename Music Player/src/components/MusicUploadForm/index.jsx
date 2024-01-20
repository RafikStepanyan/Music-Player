import { useState } from 'react';
import './style.scss';
import ClipLoader from "react-spinners/ClipLoader";

export const MusicUploadForm = () => {
    const [load,setLoad] = useState(false)
    const musicUpload = () => {
        setLoad(!load)
        setTimeout(()=>{
            alert('Your music is uploaded');
            window.location.reload();
        },2000)     
    };

    return (<div className='upload'>
        <input className='uploadinput' type="text" placeholder='Song name' />
        <input className='uploadinput' type="text" placeholder='Artist name' />
        <div style={{display:'flex'}}>
            <input className='uplodfile' type='file' />
            <ClipLoader color={'red'}
                loading={load}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader" className='loader'
            />
        </div>

        <button onClick={() => {
            musicUpload();
        }} className='uploadinput'>Submit</button>
    </div>);
};
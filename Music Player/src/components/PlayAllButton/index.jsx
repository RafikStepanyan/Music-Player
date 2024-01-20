import './style.scss'
import { ReactComponent as PlayFill } from '../SVG/play_fill.svg';
import { ReactComponent as ArrowDown } from '../SVG/arrow_down.svg';

export const PlayAllButton = () => {
    return (
        <div style={{display:'flex',border:'3px solid #969696',borderRadius:'4px'}}>
            <button onClick={()=>{
                console.log('Play All Button')
            }} className='playall'><PlayFill /> Play All</button>
            <button style={{borderLeft:'3px solid #969696'}} className='playall'><ArrowDown /></button>
        </div>
    );
};

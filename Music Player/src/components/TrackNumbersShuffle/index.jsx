import { ReactComponent as UpDown } from '../SVG/up_down.svg';
import { ReactComponent as ArrowDown } from '../SVG/arrow_down.svg';


export const TrackNumberShuffle = () => {
    return (<div style={{ display: 'flex', border: '3px solid #969696', borderRadius: '3px' }}>
        <button onClick={()=>{
            console.log('Track Number Shuffle Button')
        }} className='playall'><UpDown /> Track Numbers...</button>
        <button className='playall'><ArrowDown /></button>
    </div>);
};
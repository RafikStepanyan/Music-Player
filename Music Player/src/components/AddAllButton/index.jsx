import './style.scss'
import { ReactComponent as Plus } from '../SVG/plus.svg';
import { ReactComponent as ArrowDown } from '../SVG/arrow_down.svg';

export const AddAllButton = () => {
    return (
        <div style={{display:'flex',border:'3px solid #969696',borderRadius:'3px'}}>
            <button onClick={()=>{
                console.log('Add All Button')
            }} className='playall'><Plus /> Add All</button>
            <button style={{borderLeft:'3px solid #969696'}} className='playall'><ArrowDown /></button>
        </div>
    );
};
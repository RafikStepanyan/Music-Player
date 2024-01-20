import { ReactComponent as SearchSVG } from '../SVG/search.svg';

export const Search = () => {
    return (<div style={{ background: 'white', display: 'flex', alignItems: 'center', border: '3px solid #969696', borderRadius: '18px', padding: '5px 10px' }}>
        <SearchSVG />
        <input style={{paddingLeft:'10px', outline: 'none', border: 'none',fontSize:'20px' }} type="text" placeholder='Filter' />
    </div>);
};
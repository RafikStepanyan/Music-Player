import './style.scss';
import { AddAllButton } from '../AddAllButton';
import { PlayAllButton } from '../PlayAllButton';
import { TrackNumberShuffle } from '../TrackNumbersShuffle';
import { Search } from '../Search';

export const Header = () => {
    return (<div className='header'>
        <div style={{ display: 'flex', gap: '5px' }}>
            <PlayAllButton />
            <AddAllButton />
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
            <TrackNumberShuffle />
            <Search />
        </div>
    </div>);
};
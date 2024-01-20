import './style.scss';
import { Header } from '../Header';
import { SongList } from '../SongList';
import { MusicUploadForm } from '../MusicUploadForm';

export const Layout = () => {
    return (<div className='layout'>
        <Header />
        <SongList />
        <MusicUploadForm/>
    </div>);
};
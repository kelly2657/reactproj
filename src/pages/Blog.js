import Profile from "../component/Profile";
import Header from '../component/Header';
import '../styles/Home.css'
import Content from '../component/detail';

export default function Blog(){
    return(
        <div className="Home">
        <Header></Header>
        <div className="Content">
            <Profile></Profile>
            <Content></Content>
        </div>
    </div>
    )
}
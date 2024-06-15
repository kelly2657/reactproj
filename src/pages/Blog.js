import Profile from "../component/Profile";
import Header from '../component/Header';
import Content from '../component/detail';


import '../styles/Blog.css';

export default function Blog(){
    return(
        <div>
            <Header></Header>
            <Profile></Profile>
      
            <Content/>
            </div>
    )
}
import { useContext } from 'react';
import '../styles/Card.css';
import { BlogDispatchContext } from '../App';
import useBlog from '../hook/useBlog';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Card1({id, date, content, title, good}) {
  const {onUpdate} = useContext(BlogDispatchContext);
  const data = useBlog(id);
  const navigate = useNavigate();
   
  const incGood = () => {
    onUpdate(id, date, content, title, good+1);
    navigate("/", { replace: true });
  }
  const goBlog= () => {
    navigate(`/blog/${id}`, { replace: true });

  }
  
  return (
    <div className='card'>
        <img alt='' src={process.env.PUBLIC_URL + '/photo' + id + '.jpg'} onClick={goBlog}/>
        <div className='texts'>
          <p>{title}</p>
          <span >{new Date(parseInt(date)).toLocaleDateString()}</span>
          <span onClick={incGood}>❤️</span>
          <h3>{good}</h3>  
          <div>

          </div>
        </div>
    </div>
  );
}

export default Card1;

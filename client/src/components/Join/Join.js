import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css'

const Join=()=> {

  const [name,setName] =useState('');
  const [room,setRoom] =useState('');

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <div><input placeholder='name' className='joinInput' type="text" onChange={
          (e)=>{
            setName(e.target.value)
          }
        } /></div>
        <div><input placeholder='room' className='joinInput' type="text" onChange={
          (e)=>{setRoom(e.target.value)} //no 'if' allowed, only 'return'
        } /></div>
          <Link onClick={e => (!name || !room) ?
					e.preventDefault() : null}
					to={`/chat?name=${name}&room=${room}`
					}>
        <button className='button mt-20' type='submit'>Chat Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Join
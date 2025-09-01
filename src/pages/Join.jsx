import { useState } from 'react';
import Header from '../components/header'
import Form from '../components/MemberForm'

const Join = () => {

  return (
    <>
     <div className='bg-black text-white'> 
      <div>
        <Header />
      </div>
      <div className='pt-50 pb-50' style={{ width: "100%", height: "100%", backgroundColor: "#000000", backgroundAttachment: "fixed", backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(114,114,114,0.2) 25%, rgba(114,114,114,0.2) 26%, transparent 27%, transparent 74%, rgba(114,114,114,0.2) 75%, rgba(114,114,114,0.2) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(114,114,114,0.2) 25%, rgba(114,114,114,0.2) 26%, transparent 27%, transparent 74%, rgba(114,114,114,0.2) 75%, rgba(114,114,114,0.2) 76%, transparent 77%, transparent)", backgroundSize: "55px 55px" }}>
        <Form />
      </div>
     </div>
    </>
  );
};

export default Join;


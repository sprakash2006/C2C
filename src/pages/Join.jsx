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
      <div className='pt-50 pb-50'>
        <Form />
      </div>
     </div>
    </>
  );
};

export default Join;


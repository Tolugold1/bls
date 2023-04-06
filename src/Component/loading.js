import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {
  return(
    <div className='container spin d-flex align-items-center justify-content-center'>
      <div className='col-12 mt-4 d-flex align-items-center justify-content-center'>
        <Spinner style={{color: "#FF344F"}} />
      </div>
    </div>
  )
}

export default Loading;
import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function App () {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgb(32, 178, 170)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
      </div>
    </MDBFooter>
  );
}

export default App;
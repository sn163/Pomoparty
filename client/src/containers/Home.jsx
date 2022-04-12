import React, { useEffect, useState } from 'react';
import NavHeader from '../components/NavHeader';


const Home = () => { 
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => {
      console.log('Welcome to Pomoparty!')
      setData(data.message)
    })
    .catch(err => console.log(err))
  }, []);

  return (
  
        <NavHeader />  
      
  );
}

export default Home;

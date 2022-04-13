import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import NavHeader from '../components/NavHeader';

const Home = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        console.log('Welcome to Pomoparty!');
        setInfo(data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <NavHeader />
      <div> {info ? info : 'loading...'} </div>
    </Container>
  );
};

export default Home;

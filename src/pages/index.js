import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Ani\'s Portfolio'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Showcase of my current/past work :)'} />
      </Helmet>
      <Layout />
    </>
  );
};
export default index;
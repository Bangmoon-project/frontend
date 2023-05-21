import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../assets/Layout.css';
import Layout from '../components/Layout/Layout';
import Contents from '../pages/Contents/Contents';
import Details from '../pages/Details/Details';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Posts from '../pages/Posts/Posts';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Contents />} />
          <Route path="details/:postId" element={<Details />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

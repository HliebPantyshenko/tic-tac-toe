// page.tsx
import React from 'react';
import Game from './app';
import Head from 'next/head';
// @ts-ignore
const Page: React.FC = () => {
  return (
    
    <div>
      <h1>Моя страница</h1>
      <Game /> {}
    </div>
  );
};

export default Page;
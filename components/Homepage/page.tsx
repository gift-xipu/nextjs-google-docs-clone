import React from 'react'
import { CreateDocument } from '@/components/CreateDocument';
import Documents from '@/components/Documents';
import Header from '@/components/Header';

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div className="w-screen min-h-screen dark:bg-dark-extra">
      <Header />
      <CreateDocument />
      <Documents/>
    </div>
  )
}

export default Homepage
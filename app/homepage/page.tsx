import Homepage from '@/components/Homepage/page'
import { FC } from 'react'
import { CreateDocument } from '@/components/CreateDocument';
import Documents from '@/components/Documents';
import Header from '@/components/Header';
import { sql } from '@vercel/postgres';

const page: FC = async ({}) => {
  const Docs = await sql`SELECT * FROM Docs;`;
  
  return (
    <div className="w-screen min-h-screen dark:bg-dark-extra">
      <Header />
      <CreateDocument />
      <Documents data={Docs}/>
    </div>
  )
}

export default page
import { Folder } from 'lucide-react'
import React from 'react'

type Props = {}

const Documents = (props: Props) => {
  return (
    <section className='bg-white px-10 md:px-0'>
          <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
            <div className='flex items-center justify-between pb-5'>
              <h2 className='font-medium flex-grow'>My Documents</h2>
              <p className='mr-12'>Date Created</p>
              <Folder className='text-gray-600'/>
            </div>
          </div>
      </section>
  )
}

export default Documents
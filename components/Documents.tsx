import { Folder } from 'lucide-react'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


type Props = {}

const Documents = (props: Props) => {
  return (
    <section className='bg-white px-10 md:px-0'>
      <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700 flex flex-col items-center">
        {/* <div className='flex items-center justify-between pb-5'>
          <h2 className='font-medium flex-grow'>My Documents</h2>
          <p className='mr-12'>Date Created</p>
          <Folder className='text-gray-600'/>
        </div> */}
        <Table>
          <TableCaption>Documents</TableCaption>
          <TableHeader>
            <TableRow >
              <TableHead>My Documents</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead><Folder className='text-gray-600'/></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium"></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
             
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

export default Documents

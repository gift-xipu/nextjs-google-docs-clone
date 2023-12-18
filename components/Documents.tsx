import { Folder, MoreVerticalIcon } from 'lucide-react';
import React, { FC } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { QueryResult, QueryResultRow } from '@vercel/postgres';
import Image from 'next/image';

type DocumentsProps = {
  data: QueryResult<QueryResultRow>;
};

const Documents: FC<DocumentsProps> = ({ data }) => {
  console.log(data);
  return (
    <section className='bg-white px-10 md:px-0'>
      <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700 flex flex-col items-center">
        <Table className='w-full'>
          <TableCaption>Documents</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>My Documents</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead><Folder className='text-gray-600' /></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {data.rows.length > 0 ? (
            data.rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium flex items-center">
                  <Image
                    src="/icon.png"
                    alt="Google Docs Icon"
                    width={30} // Adjust the width as needed
                    height={30} // Adjust the height as needed
                    objectFit="cover"
                    className="rounded-full mr-2" // Adjust the margin as needed
                  />
                  <span>{row.filename}</span>
                </TableCell>
                <TableCell>{row.createdat.toLocaleString()}</TableCell>
                <TableCell><MoreVerticalIcon /></TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3}>No documents found.</TableCell>
            </TableRow>
          )}


          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Documents;

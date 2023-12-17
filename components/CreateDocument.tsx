"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import Image from 'next/image';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {};

export const CreateDocument = (props: Props) => {
  const [newDocumentName, setNewDocumentName] = useState('');

  return (
    <section className="bg-[#F1F3F4] dark:bg-dark-mid dark:text-gray-200 pb-10 px-5 w-full">
      <div className="max-w-3xl md:mx-auto">
        <div className="flex items-center justify-between py-2">
          <h2 className="text-gray-700 dark:text-gray-300 text-lg">
            Start a new document
          </h2>
          <Button variant={'outline'} className='text-gray-600 border-0'>
            <MoreVertical />
          </Button>
        </div>
        <div className="relative h-52 w-40 border-2 border-transparent cursor-pointer hover:border-blue-400">
          <Dialog>
            <DialogTrigger asChild>
              <Image
                src="https://rb.gy/wlvbum"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create a new document</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-x-2 mb-4">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="documentName" className="sr-only">
                    Document Name
                  </Label>
                  <Input
                    id="documentName"
                    placeholder="Enter document name"
                    value={newDocumentName}
                    onChange={(e) => setNewDocumentName(e.target.value)}
                    className='outline-none'
                  />
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button type="button" className='bg-blue-600'>
                  Create
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <p className="mt-2 ml-2 text-gray-700 dark:text-gray-200 text-sm font-bold sm:font-semibold">
          Blank
        </p>
      </div>
    </section>
  );
};

import React from 'react';
import { Button } from '@/components/ui/button';
import { Grip, Menu,  Search } from 'lucide-react';
import Image from 'next/image';
import { Input } from './ui/input';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center px-4 justify-between max-w-screen bg-white dark:bg-dark-extra dark:text-gray-200 py-4 shadow-md">
            {/* Left Section */}
            <div className="flex items-center space-x-2">
                <Button
                    variant="outline"
                    className="bg-white hover:bg-gray-100 border border-white rounded-full px-4 py-2 transition-all duration-300 focus:outline-none focus:ring focus:border-transparent"
                >
                    <Menu className="text-gray-500" />
                </Button>

                {/* Google Docs Logo */}
                <div className="w-10 h-10 relative bg-white dark:bg-dark-extra overflow-hidden">
                    <Image
                            src="/icon.png"
                            alt="Google Docs Icon"
                            fill
                            objectFit="cover"
                            // className="rounded-full"
                        />
                </div>

                {/* Docs Title */}
                <h1 className="hidden md:inline-flex text-gray-600 dark:text-gray-200 text-2xl">
                    Docs
                </h1>
            </div>

            {/* Search Bar */}
            <div className="flex w-full max-w-md items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Search"
                    className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 flex-grow"
                />
                <Button
                    type="submit"
                    className="px-5 py-2 bg-[#F1F3F4] text-gray-600 rounded-md shadow-none dark:bg-dark-mid dark:text-gray-200"
                >
                    <Search className="text-gray-500" />
                </Button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
                <Button variant="secondary" className="text-gray-600 dark:text-gray-200">
                    <Grip />
                </Button>
                {/* Add any additional buttons/icons for your header */}
            

            {/* User Section */}
            <div className="flex items-center space-x-2 relative">
                <div >
                <UserButton />
                </div>
                {/* Add any additional user-related components here */}
                </div>
            </div>
        </header>
    );
};

export default Header;

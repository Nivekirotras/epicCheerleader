"use client"

import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react';
import PaddingContainer from '../layout/padding-container';
import Image from 'next/image';
import {Popover, Transition} from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

const Navigation = () => {
    return (
        <div className='border-b sticky top-0 right-0 left-0 bg-white bg-opacity-50 backdrop-blur-md z-[999]'>
             <Popover>
             <PaddingContainer>
                <div className='py-6 flex item-center justify-between'>
                    <Link href="/">
                        <div className="logo">
                            <Image src="/epicCheerleaderLogo.png" alt="Epic Cheerleader Logo" width={200} height={50} />
                        </div>
                    </Link>
                    {/* Category Link */}
                    <nav className=''>
                        <ul className='hidden sm:flex items-center gap-4 text-neutral-600'>
                            <li>
                                <Link href="/how-tos">How-tos</Link>
                            </li>
                            <li>
                                <Link href="/experiences">Experiences</Link>
                            </li>
                            <li>
                                <Link href="/knowledge">Knowledge</Link>
                            </li>
                            <li>
                                <Link href="/quotes">Quotes</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='sm:hidden'>
                        <div className='flex grow items-center justify-end'>
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ">
                            <span className='sr-only pr-2'>Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <div>
                            <Transition
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 scale-50"
                                enterTo="opacity-95 scale-100"
                                leave="duration-200 ease-in"
                                leaveFrom='opacity-95 scale-100'
                                leaveTo='opacity-0 scale-50'                                                                   
                            >
                                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden opacity-95">
                                    <div className='rounded-lg bg-gray-100 shadow-lg rind-1 ring-back rind-opacity-5 divide-y-2 divide-gray-50'>
                                        <div className='px-5 pt-5 pb-6 flex justify-end'>
                                            <div className=''>
                                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ">
                                                    <span className='sr-only pr-2'>Close menu</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className='mt-8'>
                                            <nav>
                                                <ul className='flex flex-col text-lg items-center gap-4 text-neutral-800 py-6'>
                                                    <li>
                                                        <h2 className='text-decoration-line: underline font-bold'> Categories </h2>
                                                    </li>
                                                    <li>
                                                        <Link href="/how-tos">How-tos</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/experiences">Experiences</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/knowledge">Knowledge</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/about">About</Link>
                                                    </li>
                                                </ul>
                                            </nav> 
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </div>

                    </div>
                    
                </div>
            </PaddingContainer>
            </Popover>
        </div>
    );
};

export default Navigation;
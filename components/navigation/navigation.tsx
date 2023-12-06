import Link from 'next/link'
import React from 'react'
import PaddingContainer from '../layout/padding-container'
import Image from 'next/image';

const Navigation = () => {
    return (

        <div className='border-b sticky top-0 right-0 left-0 bg-white bg-opacity-50 backdrop-blur-md z-[999]'>
             <PaddingContainer>
                <div className='py-6 flex item-center justify-between'>
                    <Link href="/">
                        <div className="logo">
                            <Image src="/epicCheerleaderLogo.png" alt="Epic Cheerleader Logo" width={225} height={50} />
                        </div>
                    </Link>
                    {/* Category Link */}
                    <nav>
                        <ul className='flex items-center gap-4 text-neutral-600'>
                            <li>
                                <Link href="/how-tos">How-tos</Link>
                            </li>
                            <li>
                                <Link href="/experiences">Experiences</Link>
                            </li>
                            <li>
                                <Link href="/knowledge">Knowledge</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </PaddingContainer>
        </div>
    );
};

export default Navigation;

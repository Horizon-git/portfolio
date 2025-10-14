'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { GrProjects } from 'react-icons/gr';

type Props = {}

export default function Header({}: Props) {
  const pathname = usePathname();

  return (
    <div className="flex justify-between py-6 px-12 sm:py-3 sm:px-4">
      <Link href={'/'} className={`text-3xl lg:text-2xl sm:text-lg lowercase font-bold transition-all hover:text-[#842D54] ${pathname === '/' ? 'text-[#842D54]' : ''}`}>@Horizon337</Link>
      <Link href={'/projects'} className={`text-3xl lg:text-2xl sm:text-lg sm:items-center  uppercase flex gap-2 transition-all hover:text-[#842D54] ${pathname === '/projects' ? 'text-[#842D54]' : ''}`}>
        <GrProjects className="text-3xl lg:text-2xl sm:text-lg"/>
        <span>Projects</span>
      </Link>
    </div>
  )
}

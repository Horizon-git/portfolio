import Link from 'next/link'
import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaLinkedin, FaTelegram } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="flex justify-between py-6 px-12 mt-20 items-center sm:py-3 sm:px-4 sm:mt-10">
      <Link href={'/'} className="text-3xl lg:text-2xl sm:text-lg lowercase font-bold transition-all hover:text-[#842D54]">@Horizon337</Link>
      <div className="flex gap-4">
        <Link href={'https://flowcv.com/resume/t7ajr62ia7'} target='_blank'>
          <ImProfile className="text-2xl sm:text-lg transition-all hover:text-[#842D54]" />
        </Link>
        <Link href={'https://github.com/Horizon-git'} target='_blank'>
          <AiOutlineGithub className="text-2xl sm:text-lg transition-all hover:text-[#842D54]" />
        </Link>
        <Link href={'https://www.linkedin.com/in/oleksandr-sherashov-2054372b8/'} target='_blank'>
          <FaLinkedin className="text-2xl sm:text-lg transition-all hover:text-[#842D54]" />
        </Link>
        <Link href={'https://t.me/horizon337'} target='_blank'>
          <FaTelegram className="text-2xl sm:text-lg transition-all hover:text-[#842D54]" />
        </Link>
      </div>
    </div>
  )
}

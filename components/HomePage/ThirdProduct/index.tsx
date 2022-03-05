import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BulletHik from '../../../assets/HikBullet.jpeg'
export default function Index() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])
  return (
    <>
      <div className="mt-8 flex flex-col items-center lg:mt-12">
        <div>
          <div>
            <h1 className="text-4xl lg:text-6xl">Hik Vision</h1>
            <p className="text-center text-xl lg:text-3xl">Bullet Camera</p>
          </div>
          <div className="ml-2 mt-2 mb-12 flex gap-x-8 lg:ml-16">
            <Link href="/">
              <a className="text-blue-400 lg:text-3xl"> Learn more</a>
            </Link>
            <Link href="/">
              <a className="text-blue-400 lg:text-3xl">Buy</a>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={BulletHik}
            height={`${screenWidth <= 425 ? `300` : `600`}`}
            width={`${screenWidth <= 425 ? `300` : `600`}`}
            alt="BulletHik"
          />
        </div>
      </div>
    </>
  )
}

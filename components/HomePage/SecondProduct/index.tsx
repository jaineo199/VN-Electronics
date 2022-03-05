import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BulletHik from '../../../assets/HikNewBullet.png'
export default function Index() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])
  return (
    <>
      <div className="backcolour mt-8  flex flex-col items-center lg:mt-12">
        <div>
          <div className="mt-4">
            <h1 className="text-center text-4xl text-white lg:text-6xl">
              Hik Vision
            </h1>
            <p className="phonetextcol text-center text-xl lg:text-3xl">
              Your new superpower
            </p>
          </div>
          <div className="ml-6 mt-2 mb-12 flex gap-x-8 lg:ml-16">
            <Link href="/">
              <a className="text-blue-400 lg:text-3xl"> Learn more</a>
            </Link>
            <Link href="/">
              <a className="text-blue-400 lg:text-3xl">Buy</a>
            </Link>
          </div>
        </div>
        <div className="mb-8">
          <Image
            src={BulletHik}
            height={`${screenWidth <= 425 ? `300` : `600`}`}
            width={`${screenWidth <= 425 ? `300` : `600`}`}
            alt="iphone13"
          />
        </div>
      </div>

      <style jsx>{`
        .backcolour {
          background: #32283b;
        }
        .phonetextcol {
          color: #fec2eb;
        }
      `}</style>
    </>
  )
}

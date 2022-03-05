import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Macbook from '../../../assets/macbook.jpg'
import HikDome from '../../../assets/HikDome.webp'
export default function Index() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])
  return (
    <>
      <div className="backcolour mt-8 flex  flex-col  items-center bg-opacity-10 lg:mt-12">
        <div>
          <div className="mt-4">
            <h1 className="text-center text-4xl text-white lg:text-6xl">
              Hik Vision
            </h1>
            <p className="phonetextcol text-center text-xl lg:text-3xl">
              Dome Camera
            </p>
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
        <div className="mb-8">
          <Image
            src={HikDome}
            height={`${screenWidth <= 425 ? `300` : `600`}`}
            width={`${screenWidth <= 425 ? `300` : `600`}`}
            alt="HikDome"
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

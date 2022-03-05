import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Iphone13 from '../../../assets/iphone-13.jpeg'
import SearchBox from './footersearch'
export default function Index() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])
  return (
    <>
      <div className="backcolour mt-8 flex flex-col items-center lg:mt-12">
        <div className="my-4">
          <p className="Owncss p-2">
            ‡No-Cost EMI available for purchases made using only. Offer
            available on qualifying purchases made after 1:30 PM IST on January
            20, 2022 and before 11:59 PM IST on March 24, 2022. Minimum order
            spend applies as per your credit card’s issuing bank threshold.
            Offer cannot be combined with Apple Store for Education or Corporate
            Employee Purchase Plan pricing. Credit card eligibility is subject
            to terms and conditions between you and your credit card issuing
            bank. Offer may be revised or withdrawn at any time without any
            prior notice. Offer valid for limited period.
          </p>
          <p className="Owncss p-2 ">
            Representative example: Based off a 12 month tenure. ₹69900 total
            cost includes 15% pa and No Cost EMI savings of ₹5363, paid over 12
            months as 12 monthly payments of ₹5825.
          </p>
          <p className="Owncss p-2">
            Apple TV+ is ₹99/month after free trial. One subscription per Family
            Sharing group. Offer is valid for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other
          </p>
          <div className="flex justify-center">
            <SearchBox />
          </div>
        </div>
      </div>

      <style jsx>{`
        .backcolour {
          background-color: #f5f5f7;
        }
        .Owncss {

          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -.01em;
          font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica Neue","Helvetica","Arial",sans-serif;
      }
        }
      `}</style>
    </>
  )
}

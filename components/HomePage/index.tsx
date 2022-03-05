import FirstProduct from './FirstProduct'
import SecondProduct from './SecondProduct'
import ThirdProduct from './ThirdProduct'
import ForthProduct from './ForthProduct'
import HomeFooter from './HomeFooter'
export default function Index() {
  return (
    <>
      <div className="backcolour hello lg:text-center">
        <span className="Owncss p-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, fugit
          odit? Ipsa molestias nemo libero!
          <a href="#">Learn more</a>
        </span>
      </div>
      <div>
        <FirstProduct />
        <SecondProduct />
        <ThirdProduct />
        <ForthProduct />
        <HomeFooter />
      </div>

      <style jsx>{`
        .backcolour {
          background-color: #f5f5f7;
        }
        .Owncss {
          font-size: 14px;
          display: inline-block;
        }
      `}</style>
    </>
  )
}

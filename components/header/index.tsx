import {
  IoIosMenu,
  IoLogoApple,
  IoMdBriefcase,
  IoIosSearch,
} from 'react-icons/io'
import SideAnimate from './slideAnimation'

export default function Index() {
  const handleClick = () => {
    alert('clicked me')
  }
  return (
    <>
      <div className="Owncss flex justify-around py-2 lg:hidden">
        <IoIosMenu size="2rem" color="#fff" onClick={handleClick} />
        <IoLogoApple size="2rem" color="#fff" />
        <IoMdBriefcase size="2rem" color="#fff" />
      </div>
      <div className="Owncss hidden justify-evenly py-2 lg:flex">
        <IoLogoApple size="2rem" color="#fff" />
        <p className="textfont mt-1">store</p>
        <p className="textfont mt-1 ">Mac</p>
        <p className="textfont mt-1 ">iPad</p>
        <p className="textfont mt-1 ">store</p>
        <p className="textfont mt-1">Mac</p>
        <p className="textfont mt-1 ">iPad</p>
        <IoIosSearch size="1.5rem" color="#fff" className="mt-1" />
      </div>
      <SideAnimate />
      <style jsx>{`
        .Owncss {
          background: rgba(0, 0, 0, 0.8);
        }
        .textfont {
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          color: #f5f5f7;
        }
      `}</style>
    </>
  )
}

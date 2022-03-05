import {
  IoIosMenu,
  IoLogoApple,
  IoMdBriefcase,
  IoIosSearch,
  IoIosClose,
} from 'react-icons/io'
import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal'
import { Box, Typography } from '@mui/material'

interface PropTypes {
  children?: React.ReactChild | React.ReactChild[]
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 431,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function Index({ children }: PropTypes) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div className="Owncss flex justify-around py-2 lg:hidden ">
        <IoIosMenu size="2rem" color="#fff" onClick={handleOpen} />
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
      <div>{children}</div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
        <div className="h-screen bg-black">
          <div>
            <div className="flex gap-x-44 py-4">
              <IoIosClose size="2rem" color="#fff" onClick={handleClose} />
              <IoLogoApple size="2rem" color="#fff" />
            </div>
          </div>
          <div className="searchback flex gap-x-8 p-2">
            <IoIosSearch size="1.5rem" color="#fff" />
            <h1 className="searchTextcolour">Search Products</h1>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="mt-4 text-white">Lorem ipsum dolor</h1>
            <h1 className="text-white">Lorem ipsum dolor</h1>
            <h1 className="text-white">Lorem ipsum dolor</h1>
            <h1 className="text-white">Lorem ipsum dolor</h1>
            <h1 className="text-white">Lorem ipsum dolor</h1>
            <h1 className="text-white">Lorem ipsum dolor</h1>
          </div>
        </div>
      </Modal>

      <style jsx>{`
        .Owncss {
          background: rgba(0, 0, 0, 0.8);
          width: 100%;
          z-index: 10;
        }

        .searchback {
          background: dimgrey;
        }
        .searchTextcolour {
          color: floralwhite;
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

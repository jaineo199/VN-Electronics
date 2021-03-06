import {
  IoIosMenu,
  IoLogoApple,
  IoMdBriefcase,
  IoIosSearch,
} from 'react-icons/io'

export default function Index() {
  return (
    <>
      <div>
        <p>
          The Caterpillar and Alice looked at each other for some time in
          silence: at last the Caterpillar took the hookah out of its mouth, and
          addressed her in a languid, sleepy voice.
        </p>
      </div>
      <style jsx>{`
        p {
          animation-duration: 3s;
          animation-name: slidein;
        }

        @keyframes slidein {
          from {
            margin-left: 100%;
            width: 300%;
          }

          to {
            margin-left: 0%;
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

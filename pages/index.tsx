import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
const Home: NextPage = () => {
  const { push } = useRouter()
  useEffect(() => {
    push('/products/home')
  }, [push])
  return null
}

export default Home

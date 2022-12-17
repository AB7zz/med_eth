import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../DataContext'

const Home = () => {
  const { web3Handler } = useContext(DataContext)
  useEffect(() => {
    web3Handler()
  }, [])
  
  const {account} = useContext(DataContext)
  console.log(account)
  return (
    <div>Home</div>
  )
}

export default Home
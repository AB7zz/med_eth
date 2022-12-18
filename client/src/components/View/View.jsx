import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../DataContext'

const View = () => {
  const {database, pdf, account} = useContext(DataContext)
  const [loading, setLoading] = useState(true)
  const [myRecords, setMyRecords] = useState([])
  const [myPrescs, setMyPrescs] = useState([])

  const loadMyRecords = async () => {
    const recordCount = await database.recordCount
    let myRecords = []
    for(let index=1; index<=recordCount; index++){
      const i = await database.records(index)
      if(i.user.toLowerCase() == account){
        const uri = await pdf.tokenURI(i.tokenId)
        const response = await fetch(uri)
        const metadata = await response.json()

        let record = {
          recordId: i.recordId,
          pdf: metadata.pdf
        }
        myRecords.push(record)
      }
    }
    setMyRecords(myRecords)
  }
  const loadMyPrescs = async () => {
    const prescCount = await database.prescCount
    let myPrescs = []
    for(let index=1; index<=prescCount; index++){
      const i = await database.prescs(index)
      // if(i.user.toLowerCase() == account){
        const uri = await pdf.tokenURI(i.tokenId)
        const response = await fetch(uri)
        const metadata = await response.json()

        let presc = {
          prescId: i.prescId,
          pdf: metadata.pdf
        }
        myPrescs.push(presc)
      // }
    }
    setMyPrescs(myPrescs)
  }

  useEffect(() => {
    loadMyRecords()
    loadMyPrescs()
    setLoading(false)
    console.log(myRecords)
    console.log(myPrescs)
  }, [])
  return (
    <div>View</div>
  )
}

export default View
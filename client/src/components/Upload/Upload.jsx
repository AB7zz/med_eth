import React, {useState} from 'react'
import {create as ipfsHttpClient} from 'ipfs-http-client'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
const Upload = () => {
  localStorage.setItem('doctor', 1)
  const doctor = localStorage.getItem('doctor')
  const [pdf, setPDF] = useState()
  
  const uploadToIPFS = async (event) => {
    event.preventDefault()
    const file = event.target.files[0]

    if(file != 'undefined'){
      try{
        const result = await client.add(file)
        console.log(result)
        setPDF(`https://ipfs.infura.io/ipfs/${result.path}`)
      }catch(error){
        console.log(error.message)
      }
    }
  }

  const createPDF = async() => {
    if(!pdf) return

    try{
      const result = await client.add(JSON.stringify({pdf}))
      mintPDF(result)
    }catch(error){
      console.log(error.message)
    }
  }

  const mintPDF = async(results) => {
    const uri = `https://ipfs.infura.io/ipfs/${result.path}`
    await (await pdf.mint(uri)).wait()
    const id = pdf.tokenCount()
    await (await pdf.setApprovalForAll(database.address, true)).wait()

    await (await database.uploadRecord(pdf.address, '0xf50d19D3514C99185Ecd7B7feA60583fC33A2E69', id, doctor))

  }
  return (
    <>
      <div>Upload</div>
      <input type="file" onChange={uploadToIPFS} name="file" id="" />
      <button onClick={createPDF}></button>
    </>
  )
}

export default Upload
import React, { useEffect } from 'react'
import useStorage from "../hooks/useStorage"
import ProgressCSS from "../css/ProgressBar.module.css"

const ProgressBar = ({file, setFile}) => {
  const { url, progress } = useStorage(file)
  console.log(progress, url)

  useEffect(() => {

    if(url){
      setFile(null)
    } 

  }, [url, setFile])

  return (
    <div className={ProgressCSS.loading} style={{width: progress +"%"}}></div>
  )
}

export default ProgressBar

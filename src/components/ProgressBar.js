import React, { useEffect } from 'react'
import useStorage from "../hooks/useStorage"
import ProgressCSS from "../css/ProgressBar.module.css"
import { motion } from "framer-motion"

const ProgressBar = ({file, setFile}) => {
  const { url, progress } = useStorage(file, 'images')
  // console.log(progress, url)

  useEffect(() => {

    if(url){
      setFile(null)
    } 

  }, [url, setFile])

  return (
    <motion.div className={ProgressCSS.loading} 
      initial={{ width: 0 }}
      animate={{ width: progress + "%"}}
    ></motion.div>
  )
}

export default ProgressBar

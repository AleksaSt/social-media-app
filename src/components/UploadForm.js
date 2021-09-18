import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import ImageGrid from './ImageGrid'
import FormCSS  from "../css/Form.module.css"

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const types = ["image/jpeg", "image/png"]

  const changeHandler = (e) => {

    let selected = e.target.files[0]
    console.log(selected)
    if(selected && types.includes(selected.type)){
      setFile(selected)
      setError("")
    } else {
      setFile(null)
      setError("Selected file must be a jpeg or png")
    }
  }

  return (
    <form>
      <h1 className={FormCSS.heading}>Your Pictures</h1>
      <div>
        <label className={FormCSS.formLabel} for="input-file">
          <div>+</div>
        </label>
        <input type="file" id="input-file" onChange={changeHandler}/>
        {error && <div className={FormCSS.error}>{error}</div> }
        {file && <div>{file.name}</div> }
        {file && <ProgressBar file={file} setFile={setFile} />}
        <ImageGrid />
      </div>
    </form>
  )
}

export default UploadForm

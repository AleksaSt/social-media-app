import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from "../firebase"
import { useAuth } from "../contexts/AuthContext"

const ImagesUpload = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)


  useEffect(() => {

    let storageRef = null;
    let collectionRef = null;
    const { currentUser } = useAuth()
    
    switch (collection) {
      case 'images':
        storageRef = projectStorage.ref(file.name)
        collectionRef = projectFirestore.collection("images")
        break;
    }

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) *100
      setProgress(percentage)

    }, (err) => {
      setError(err)
    }, async () => {
      const url = await storageRef.getDownloadURL()
      const createdAt = timestamp()
      const userId = currentUser.uid
      console.log(userId)
      collectionRef.add({ url, userId, createdAt })
      setUrl(url)
    })
  }, [file])

  return { progress, url, error }
  
}

export default ImagesUpload

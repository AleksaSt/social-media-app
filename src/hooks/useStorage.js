import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from "../firebase"
import { useAuth } from "../contexts/AuthContext"

const useStorage = (file, collection) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  const { currentUser } = useAuth()

  useEffect(() => {

    let storageRef = null;
    let collectionRef = null;

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
      collectionRef.add({ url, userId, createdAt })
      setUrl(url)
    })
  }, [file])

  return { progress, url, error }
  
}

export default useStorage

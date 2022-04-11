import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { db } from 'firebase.config'
import { v4 as uuidv4 } from 'uuid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'
// import { Spinner } from 'components'

const firebaseUpload = async ({ formData, userRef, auth, setLoading }) => {
  // Store image in firebase
  const storeImage = async (image) => {
    console.log(image)
    return new Promise((resolve, reject) => {
      const storage = getStorage()
      const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`
      const storageRef = ref(storage, 'images/' + fileName)
      const uploadTask = uploadBytesResumable(storageRef, image)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
              break
          }
        },
        (error) => {
          reject(error)
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL)
          })
        }
      )
    })
  }

  const imgUrls = await storeImage(formData.images[0]).catch(() => {
    toast.error('Images not uploaded')
    return
  })

  const formDataCopy = {
    ...formData,
    userRef,
    imgUrls,
    timestamp: serverTimestamp(),
  }

  delete formDataCopy.images
  !formDataCopy.offer && delete formDataCopy.discountedPrice

  console.log(formDataCopy)
  const docRef = await addDoc(collection(db, 'items'), formDataCopy)
  setLoading(false)
  toast.success('Listing saved')
  const link = `/category/${formDataCopy.category}/${docRef.id}`

  return link
}

export default firebaseUpload

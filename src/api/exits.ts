import { setError, setExits, setLoading } from "../stores/mapObjects"
import { api } from "../utils/api"


export const getExits = () => new Promise((resolve, reject) => {
  setLoading()
  api({ method: 'GET', url: '/exits' })
    .then((response) => {
      console.log(response)
      setExits(response.data.features)
      resolve(response.data.features)
    })
    .catch((error) => {
      setError(error)
      reject(error)
    })
})

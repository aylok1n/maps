import { setError, setExits, setLoading } from "../stores/exits"
import { api } from "../utils/api"


export const getExits = () => new Promise((resolve, reject) => {
  setLoading()
  api({ method: 'GET', url: '/v1/datasets/62207/features' })
    .then((response) => {
      setExits(response.data)
      resolve(response.data)
    })
    .catch((error) => {
      setError(error)
      reject(error)
    })
})

import { setError, setLoading, setStations } from "../stores/stations"
import { api } from "../utils/api"


export const getStations = () => new Promise((resolve, reject) => {
  setLoading()
  api({ method: 'GET', url: '/v1/datasets/62888/features' })
    .then((response) => {
      setStations(response.data)
      resolve(response.data)
    })
    .catch((error) => {
      setError(error)
      reject(error)
    })
})

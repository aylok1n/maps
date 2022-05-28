import type { Station } from "src/interfaces/stations"
import { setError, setLoading, setStations } from "../stores/mapObjects"
import { api } from "../utils/api"


export const getStations = () => new Promise((resolve, reject) => {
  setLoading()
  api({ method: 'GET', url: '/stations' })
    .then((response) => {
      setStations(response.data.features)
      resolve(response.data.features)
    })
    .catch((error) => {
      setError(error)
      reject(error)
    })
})

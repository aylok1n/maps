interface ExitGeometry {
  coordinates: [number, number]
  type: "Point"
}

interface ExitPropertiesAtributes {
  AdmArea: null
  Diameter: any[]
  District: null
  Latitude_WGS84: string
  Longitude_WGS84: string
  Name: string
  NameMetroExit: null
  ObjectStatus: string
  OnTerritoryOfMoscow: string
  TypeExit: string
  global_id: number
}

interface ExitProperties {
  Attributes: ExitPropertiesAtributes
  DatasetId: number
  ReleaseNumber: number
  RowId: null
  VersionNumber: number
}

export interface Exit {
  geometry: ExitGeometry,
  properties: ExitProperties,
  type: "Feature"
}

export default interface IExit {
  type: 'string',
  features: Exit
}

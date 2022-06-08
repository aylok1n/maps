
interface StationGeometry {
  coordinates: [number, number]
  type: "Point"
}

interface WorkingHours {
  DayOfWeek: string
  Hours: string
  global_id: number
  is_deleted: 0 | 1
}

interface StationPropertiesAtributes {
  AeroexpressStation: { global_id: 1509001630, value: string }
  Area: string
  City: string
  DiameterName: string
  District: string
  ExitTrainStations: null
  MaskStation: string
  ObjectStatus: string
  Platforms: string
  RailwayStation: any[]
  StationName: string
  Tariff: string
  TransferAeroExpress: string
  TransferMCD: null
  TransferMetroStation: any[]
  TransliterationStation: string
  WorkingHours: WorkingHours[]
  global_id: 1058815439
}

interface StationProperties {
  Attributes: StationPropertiesAtributes
  DatasetId: number
  ReleaseNumber: number
  RowId: null
  VersionNumber: number
}

export interface Station {
  geometry: StationGeometry,
  properties: StationProperties,
  type: "Feature"
}

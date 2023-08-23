type TitleStreetType = {
  title: string
}

export type AddressType = {
  number: number
  street: TitleStreetType
}

export type HousesType = {
  buildedAt: number
  repaired: boolean
  address: AddressType
}

type AddressLocalType = {
  street: TitleStreetType
}

export type GovernmentBuildingsType = {
  type: 'HOSPITAL' | 'FIRE-STATION'
  budget: number
  staffCount: number
  address: AddressLocalType
}

export type CityType = {
  title: string
  houses: Array<HousesType>
  governmentBuildings: Array<GovernmentBuildingsType>,
  citizensNumber: number
}

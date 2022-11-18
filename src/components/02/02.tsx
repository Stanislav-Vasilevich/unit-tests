type StreetType = {
  title: string
}

type AddressType = {
  number: number
  street: StreetType
}

type HousesType = {
  buildedAt: number
  repaired: boolean
  address: AddressType
}

export type cityType = {
  title: string
  houses: Array<HousesType>
  governmentBuildings: Array<string>
  citizensNumber: number
}

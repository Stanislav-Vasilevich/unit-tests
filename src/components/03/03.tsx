import {GovernmentBuildingsType, HousesType} from '../02/02';

type technologiesType = {
  id: number
  title: string
}
type cityType = {
  title: string
  countryTitle: string
}
type addressType = {
  streetTitle: string
  city: cityType
}
export type studentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: addressType
  technologies: Array<technologiesType>
}

export const sum = (a: number, b: number) => {
  return a + b;
}

export const addSkill = (student: studentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export const makeStudentActive = (student: studentType) => {
  student.isActive = true;
}

export const doesStudentLiveIn = (student: studentType, city: string) => {
  return student.address.city.title === city;
}

export const addMoneyToBudget = (arrBuildings: Array<GovernmentBuildingsType>, nameBuilding: string, budget: number) => {
  const building = arrBuildings.find(i => i.type === nameBuilding);

  if(building) {
    building.budget += budget;
  }

  return building;
}

export const repairHouse = (housesType: HousesType) => {
  housesType.repaired = true;
}

export const toFireStaff = (buildingType: GovernmentBuildingsType, number: number) => {
  buildingType.staffCount -= number;
}

export const toHireStaff = (buildingsType: GovernmentBuildingsType, number: number) => {
  buildingsType.staffCount += number;
}

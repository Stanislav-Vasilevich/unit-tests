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

export const addSkill = (student: studentType, skill: any) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

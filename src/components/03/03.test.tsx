import {addSkill, studentType} from './03';

let student: studentType;

beforeEach(() => {
  student = {
    id: 1,
    name: 'Stanislav',
    age: 34,
    isActive: false,
    address: {
      streetTitle: 'Tipanova 6',
      city: {
        title: 'SPb',
        countryTitle: 'Russia'
      }
    },
    technologies: [
      {
        id: 1,
        title: 'HTML'
      },
      {
        id: 2,
        title: 'CSS'
      },
      {
        id: 3,
        title: 'React'
      },
    ]
  }
})

test('new tech skill should be added to student', () => {
  // expect
  expect(student.technologies.length).toBe(3);

  // action
  addSkill(student, 'JavaScript');

  // expect
  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JavaScript");
});

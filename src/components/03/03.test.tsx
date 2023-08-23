import {addSkill, doesStudentLiveIn, makeStudentActive, studentType} from './03';

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
  // start expect
  expect(student.technologies.length).toBe(3);

  // action (ничего не возвращает, просто вызываем ее без сохранения)
  addSkill(student, 'JavaScript');

  // finish expect
  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JavaScript");
});

test(' student should be made active', () => {
  // start expect
  expect(student.isActive).toBe(false);

  // action (ничего не возвращает, просто вызываем ее без сохранения)
  makeStudentActive(student);

  // finish expect
  expect(student.isActive).toBe(true);
});

test(' student lives in city', () => {
  // action (ничего не возвращает, просто вызываем ее без сохранения)
  const result = doesStudentLiveIn(student, 'Moscow');
  const result2 = doesStudentLiveIn(student, 'SPb');

  // finish expect
  expect(result).toBe(false);
  expect(result2).toBe(true);
});

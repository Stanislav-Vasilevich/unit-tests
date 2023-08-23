import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from './03';
import {city} from '../02/02.test';

test("budget should be changed for HOSPITAL", () => {
  addMoneyToBudget(city.governmentBuildings, 'HOSPITAL', 100000);

  addMoneyToBudget(city.governmentBuildings, 'FIRE-STATION', -200000);

  expect(city.governmentBuildings[0].budget).toBe(300000);
  expect(city.governmentBuildings[1].budget).toBe(300000);
});
test('house should be restored', () => {
  repairHouse(city.houses[1]);

  expect(city.houses[1].repaired).toBeTruthy();
});
test('staff should be increased', () => {
  toFireStaff(city.governmentBuildings[0], 20);

  expect(city.governmentBuildings[0].staffCount).toBe(180);
});
test('house should be restored', () => {
  toHireStaff(city.governmentBuildings[0], 20);
  toHireStaff(city.governmentBuildings[1], 100);

  expect(city.governmentBuildings[0].staffCount).toBe(220);
  expect(city.governmentBuildings[1].staffCount).toBe(1100);
});

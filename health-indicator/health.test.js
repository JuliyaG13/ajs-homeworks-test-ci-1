import { getHealthStatus } from './health';

test('health is above 50', () => {
  expect(getHealthStatus({ name: 'Mage', health: 90 })).toBe('healthy');
});

test('health is 50', () => {
  expect(getHealthStatus({ name: 'Mage', health: 50 })).toBe('wounded');
});

test('health is between 15 and 50', () => {
  expect(getHealthStatus({ name: 'Mage', health: 30 })).toBe('wounded');
});

test('health is 15', () => {
  expect(getHealthStatus({ name: 'Mage', health: 15 })).toBe('critical');
});

test('health is below 15', () => {
  expect(getHealthStatus({ name: 'Mage', health: 10 })).toBe('critical');
});
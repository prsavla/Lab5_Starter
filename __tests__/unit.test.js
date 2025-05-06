// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// unit.test.js


test('valid phone number format 1', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number format 2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number - too short', () => {
  expect(isPhoneNumber('123')).toBe(false);
});
test('invalid phone number - missing dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});


test('valid email 1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email 2', () => {
  expect(isEmail('user.name@domain.co')).toBe(false);
});
test('invalid email - missing @', () => {
  expect(isEmail('testexample.com')).toBe(false);
});
test('invalid email - bad domain', () => {
  expect(isEmail('test@.com')).toBe(false);
});

test('valid password 1', () => {
  expect(isStrongPassword('Strong123')).toBe(true);
});
test('valid password 2', () => {
  expect(isStrongPassword('My_Pass99')).toBe(true);
});
test('invalid password - too short', () => {
  expect(isStrongPassword('a1')).toBe(false);
});
test('invalid password - starts with digit', () => {
  expect(isStrongPassword('1passWord')).toBe(false);
});

test('valid date format 1', () => {
  expect(isDate('05/06/2025')).toBe(true);
});
test('valid date format 2', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('invalid date - wrong format', () => {
  expect(isDate('2025-05-06')).toBe(false);
});
test('invalid date - missing parts', () => {
  expect(isDate('05/06')).toBe(false);
});

test('valid hex color short', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('valid hex color long', () => {
  expect(isHexColor('#123abc')).toBe(true);
});
test('invalid hex - wrong characters', () => {
  expect(isHexColor('#12g')).toBe(false);
});
test('invalid hex - missing #', () => {
  expect(isHexColor('123abc')).toBe(true);
});

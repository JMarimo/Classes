import Character from '../app';
import Bowman from '../classes/Bowman';
import Daemon from '../classes/Daemon';
import Magician from '../classes/Magician';
import Swordsman from '../classes/Swordsman';
import Undead from '../classes/Undead';
import Zombie from '../classes/Zombie';

test.each([
  [123456, 'Bowman'],
  [null, 'Bowman'],
  [undefined, 'Bowman'],
  ['John', 123456],
  ['John', null],
  ['John', undefined],
])('should not accept name %s and type %i that is not a string', (name, type) => {
  expect(() => {new Character(name, type)}).toThrow(Error);
});

test.each([
  ['J', 'Bowman'],
  ['John James Smidt' , 'Bowman'],
])('should not accept a name %s with less than two characters and more than ten characters', (name, type) => {
  expect(() => {new Character(name, type)}).toThrow(Error);
});

test.each([
  ['John', 'notBowman'],
  ['John', 'notSwordsman'],
  ['John', 'notMagician'],
  ['John', 'notDaemon'],
  ['John', 'notUndead'],
  ['John', 'notZombie'],
])('%s is valid but should not accept a type %i if this is not one of some accepted value', (name, type) => {
  expect(() => {new Character(name, type)}).toThrow(Error);
});

test.each([
  ['John', 'Bowman'],
  ['John', 'Swordsman'],
  ['John', 'Magician'],
  ['John', 'Daemon'],
  ['John', 'Undead'],
  ['John', 'Zombie'],
])('should create class with %s name and %i type, besides %a attack and %d defence', (name, type) => {
  const correct = {
      name: name,
      type: type,
      health: 100,
      level: 1,
  }
  const testCharacter = new Character(name, type);
  expect(testCharacter).toEqual(correct);
});

test.each([
  ['John', 'Bowman', 0],
  ['John', 'Swordsman', -5],
  ['John', 'Magician', 0],
  ['John', 'Daemon', -10],
  ['John', 'Undead', 0],
  ['John', 'Zombie', -15],
])('should return error if character health lower or equally zero', (name, type, health) => {
  const result = new Character(name, type);
  result.health = health;
  expect(() => result.levelUp()).toThrow(Error);
});

test.each([
  ['John', 'Bowman', 25, 25],
])('Should concat +1 to level and increase attack and defence up to 20%', (name, type, attack, defence) => {
  const result = new Bowman(name, type);
  result.levelUp();

  const correctAttack = attack * 1.2;
  const correctDefence = defence * 1.2;

  const correct = {
    name: name,
    type: type,
    health: 100,
    level: 2,
    attack: correctAttack,
    defence: correctDefence,
  }
  expect(result).toEqual(correct);
});

test.each([
  ['John', 'Bowman', 25, 25, 5],
])('Should calculate the total value of life after damage', (name, type, attack, defence, points) => {
  const result = new Bowman(name, type);
  result.damage(points);

  const health = 100 - (points * (1 - defence / 100));
  const correctHealth = health;

  const correct = {
    name: name,
    type: type,
    health: correctHealth,
    level: 1,
    attack: attack,
    defence: defence,
  }
  expect(result).toEqual(correct);
});

test.each([
  ['John', 'Bowman', 25, 25, 5],
])('Should do nothing if health of character lower than zero', (name, type, attack, defence, points) => {
  const result = new Bowman(name, type);
  result.health = -1;
  result.damage(points);

  const correct = {
    name: name,
    type: type,
    health: -1,
    level: 1,
    attack: attack,
    defence: defence,
  }
  expect(result).toEqual(correct);
});

test('should create class Bowman', (name = 'John', type = 'Bowman') => {
  const result = new Bowman(name, type);

  const correct = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }
  expect(result).toEqual(correct);
});

test('should create class Swordsman', (name = 'John', type = 'Swordsman') => {
  const result = new Swordsman(name, type);

  const correct = {
    name: 'John',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(result).toEqual(correct);
});

test('should create class Magician', (name = 'John', type = 'Magician') => {
  const result = new Magician(name, type);

  const correct = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(result).toEqual(correct);
});

test('should create class Daemon', (name = 'John', type = 'Daemon') => {
  const result = new Daemon(name, type);

  const correct = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(result).toEqual(correct);
});

test('should create class Undead', (name = 'John', type = 'Undead') => {
  const result = new Undead(name, type);

  const correct = {
    name: 'John',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(result).toEqual(correct);
});

test('should create class Zombie', (name = 'John', type = 'Zombie') => {
  const result = new Zombie(name, type);

  const correct = {
    name: 'John',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(result).toEqual(correct);
});
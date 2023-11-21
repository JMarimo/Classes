export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' ||
    name.length < 2 || 
    name.length > 10) {
      throw new Error(`Ошибка. ${name} должно быть строкой длина которой не менее 2 символов и не более 10`);
    } else {
      this.name = name;
    }

    if (typeof type !== 'string' || !types.includes(type)) {
      throw new Error(`Ошибка. ${type} должен быть строкой и соответствовать одному из вариантов героев: Bowman, Swordsman, Magician, Daemon, Undead или Zombie`);
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }



  levelUp() {
    if (this.health <= 0) {
      throw new Error('Ошибка. Нельзя повысить левел умершего');
    }

    this.level += 1;
    this.attack = Math.ceil(this.attack * 1.2);
    this.defence = Math.ceil(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
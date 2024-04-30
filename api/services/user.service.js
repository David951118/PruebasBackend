const { faker } = require('@faker-js/faker');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id : faker.string.uuid(),
        name: faker.commerce.product.name,
      });
    }
  }

  create() {}

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = UserService;

const { faker } = require('@faker-js/faker')

export function taskName() { return faker.lorem.sentence() };

export function taskDesc() { return faker.lorem.paragraph() };

export function projectName() { return faker.lorem.word() };

export function userComment() { return faker.lorem.sentence() };
import { faker } from '@faker-js/faker';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const makePartners = (num) => {
    const partners = [];
    for (let i = 0; i < num; i++) {
      partners.push({
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        text: faker.lorem.words()
      });
    }
    return partners;
  };

  const makeDep = (num) => {
    const departments = [];
    for (let i = 0; i < num; i++) {
      departments.push(faker.commerce.department());
    }
    return departments;
  };

  const departments = makeDep(3);

  const partners = [
    {
      department: departments[0],
      staff: makePartners(5)
    },
    {
      department: departments[1],
      staff: makePartners(7)
    },
    {
      department: departments[2],
      staff: makePartners(10)
    }
  ];

  return {
    departments,
    partners
  }
}
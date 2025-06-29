import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const oldContacts = await readContacts();
  const newContacts = [];

  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  const updatedContacts = [...oldContacts, ...newContacts];
  await writeContacts(updatedContacts);

  console.log(`${number} contact(s) added.`);
};

generateContacts(5);

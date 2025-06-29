import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  const contacts = await readContacts();
  return contacts.length;
};

(async () => {
  const count = await countContacts();
  console.log(`Number of contacts: ${count}`);
})();

import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  await writeContacts([]);
  console.log('All contacts have been successfully deleted.');
};

removeAllContacts();

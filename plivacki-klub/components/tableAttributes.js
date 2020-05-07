const clubAttributes = ["name", "address", "postCode", "oib"];
const groupAttributes = ["name"];
const userAttributes = [
  "first_name",
  "last_name",
  "email",
  "date_of_birth",
  "verified",
  "group-name",
  "role-name"
];
const notifAttributes = [
  "title",
  "description",
  "user-first_name",
  "user-last_name"
];
const taskAttributes = ["name", "description", "intensity", "duration", "note"];
const trainingAttributes = ["finished", "note", "group-name"];
const attendanceAttributes = ["finished", "userId", "trainingId"];

export {
  clubAttributes,
  groupAttributes,
  userAttributes,
  notifAttributes,
  taskAttributes,
  trainingAttributes,
  attendanceAttributes
};

const clubAttributes = ["name", "address", "postCode", "oib"];
const groupAttributes = ["name"];
const userAttributes = [
  "first_name",
  "last_name",
  "email",
  "verified",
  "date_of_birth"
];
const notifAttributes = ["title", "description", "authorId"];
const taskAttributes = ["name", "description", "intensity", "duration", "note"];
const trainingAttributes = ["finished", "note"];
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

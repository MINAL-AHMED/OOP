const { Guardian, Student } = require("./person");
const { Contact, Address } = require("./contact");

//create a guardian object
const guardian = new Guardian(1, "Mr. Mubin", "business", 15000);
guardian.blood = "O+";
guardian.contact = new Contact({
  id: 1,
  email: "mubin@gmail.com",
  phone: "0175033444",
});
guardian.contact.address = new Address({
  id: 1,
  roadNo: "6B",
  city: "Lalpur",
  region: "Rajshahi",
  country: "Bangladesh",
  postalCode: "12345",
});

// console.log(guardian.toString());
// console.log(guardian.contact + " ");

/**
 * Student ID 1
 */

const student = new Student(1, "Minal", "ST001", guardian);
student.blood = "B+";
student.contact = new Contact({
  id: 1,
  email: "minal@gmail.com",
  phone: "0175033444",
  address: new Address({
    id: 1,
    roadNo: "6B",
    city: "Lalpur",
    region: "Rajshahi",
    country: "Bangladesh",
    postalCode: "12345",
  }),
});

console.log(student.toString());

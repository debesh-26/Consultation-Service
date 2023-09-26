const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 3001;

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(allowCrossDomain);

// Generate fake categories and doctors
const categories = [
  "Dentist",
  "Dermatology",
  "Neurology",
  "Orthopedics",
  "Cardiology",
  "Lung",
];
const doctors = [];

categories.forEach((category) => {
  for (let i = 0; i < categories.length; i++) {
    const randomNumber=Math.floor((Math.random() * 5));
    const percentage=Math.floor((Math.random() * 10)+70);
    const Consultantion=Math.floor((Math.random() * 100)+100);
    const Patient=Math.floor((Math.random() * 1000)+100);

//pushing the fake data into doctors array
    doctors.push({
      userId: faker.string.uuid(),
      username: faker.person.fullName(),
      avatar: faker.image.avatar(),
      registeredAt: faker.date.past(),
      year: randomNumber,
      location:faker.location.city(),
      state:faker.location.state(),
      percentage:percentage,
      Consultantion:Consultantion,
      Patient:Patient,
      category,
    });
  }
});

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/doctors/:category", (req, res) => {
  const category = req.params.category;
  const filteredDoctors = doctors.filter(
    (doctor) => doctor.category === category
  );
  res.json(filteredDoctors);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "betterdoctor.p.rapidapi.com",
  },
};

fetch(
  "https://betterdoctor.p.rapidapi.com/api.betterdoctor.com/2016-03-01/doctors?BetterDoctor%20API%20key=undefined&name=",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

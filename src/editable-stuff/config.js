// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Abhinav",
  middleName: "Santosh",
  lastName: "Pandey",
  message: " message . ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ABHI2598",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100007363578526",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_abhinav77/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/abhinavpandey2025/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "My Name is Abhinav Pandey. I am Final Year student graduating from Galgotias University. I am c++ programmer and sql developer. I have keen interest in Machine Learning and facial recognition and I had done several projects on it as well. I have done research on Healthcare and its benefits in the field of IOT. I consider myself as a quick learner who keeps positive attitude.",
  resume: require("./resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ABHI2598", 
  reposLength: 2,
  specificRepos: ["SMART-ATTENDANCE", "College-Website-Frontend"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/person.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/person.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C++", value: 85 },
    { name: "Python", value: 80 },
    { name: "Javascript", value: 70 },
    { name: "MySql", value: 90 },
    { name: "HTML", value: 85 },
    { name: "CSS", value: 85 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 85 },
    { name: "Leadership", value: 90 },
    { name: "Learning Agility", value: 80 },
    { name: "Quick Learner", value: 95 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "My Name is Abhinav Pandey. I am Final Year student graduating from Galgotias University. I am c++ programmer and sql developer. I have keen interest in Machine Learning and facial recognition and I had done several projects on it as well. I have done research on Healthcare and its benefits in the field of IOT. I consider myself as a quick learner who keeps positive attitude.",
  email: "pandeyabhinav56@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };

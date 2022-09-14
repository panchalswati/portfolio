// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Swati",
    middleName: "",
    lastName: "Panchal",
    message: "Enthusiastic individual with aspiration to grow and build career in IT and to contribute to the growth of the organization and to become the best performer through hard work and continuous learning. ",
    icons: [
        {
            image: "fa-github",
            url: "https://github.com/panchalswati",
        },
        {
            image: "fa-facebook",
            url: "https://www.facebook.com/swathispanchal",
        },
        {
            image: "fa-instagram",
            url: "https://www.instagram.com/panchalswathi/",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/swati-panchal1988/",
        },
        {
            image: "fa-twitter",
            url: "https://twitter.com/Swati01121987",
        },
        {
            image: "fa-medium",
            url: "https://medium.com/@swatipanchal112",
        }
    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/swati.jpg"),
    imageSize: 375,
    message:
        "My name is Swati Panchal. I’m Master in Computer Science from VTU University, India. I am an enthusiastic individual with aspiration to grow and build career in IT and to contribute to the growth of the organization and to become the best performer through hard work and continuous learning.",
    resume: require("../editable-stuff/CV_Swati.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "panchalswati",
    reposLength: 8,
    specificRepos: [],
};

// Leadership SECTION
const leadership = {
    show: false,
    heading: "Leadership",
    message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    images: [
        {
            img: require("../editable-stuff/swati.jpg"),
            label: "First slide label",
            paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            img: require("../editable-stuff/swati.jpg"),
            label: "Second slide label",
            paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
    ],
    imageSize: {
        width: "615",
        height: "450"
    }
};

// SKILLS SECTION
const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        { name: "HTML5", value: 100 },
        { name: "CSS3", value: 95 },
        { name: "JavaScript", value: 90 },
        { name: "React", value: 95 },
        { name: "MongoDB", value: 95 },
        { name: "REST Api", value: 95 },
        { name: "Angular", value: 70 },
    ],
    softSkills: [
        { name: "Goal-Oriented", value: 80 },
        { name: "Collaboration", value: 90 },
        { name: "Positivity", value: 75 },
        { name: "Adaptability", value: 85 },
        { name: "Problem Solving", value: 75 },
        { name: "Communication", value: 90 },
        { name: "Creativity", value: 90 },
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
        "I'm currently looking for full-time Full-stack Web Developer opportunities! If you know of any positions available, if you have any questions,please feel free to email me at",
    email: "swatipanchal112@gmail.com",
};

const experiences = {
    show: false,
    heading: "Experiences",
    data: [
        {
            role: 'Assistant Professor',// Here Add Company Name
            college: "D.Y Patil College of Engineering, Pune,India",
            date: 'July 2014 – July-2017',
        },
    ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

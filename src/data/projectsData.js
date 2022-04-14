import beauty_image from "../assets/svg/projects/beauty.png";

import adidas_image from "../assets/svg/projects/adidas.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Bebo Beauty",
    projectDesc:
      "This is a full-fledged clone of website Beauty Bebo, we have tried to implement every possible feature of the website and provided the full payment cycle with login and signup authoristaion",
    tags: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/nisKULDEEP/Beauty-Bebo",
    demo: "https://harmonious-taiyaki-a9ee8e.netlify.app/",
    image: beauty_image,
  },
  {
    id: 2,
    projectName: "Adidas",
    projectDesc:
      "Its a non functional html css model of website Adidas, we have implemented css with great precision and the website fully responsive.",
    tags: ["React", "Redux", "React-Bootstrap", "CSS", "HTML"],
    code: "https://github.com/anmoljain987/addidas-clone",
    demo: "https://addidas-clone.vercel.app/",
    image: adidas_image,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/

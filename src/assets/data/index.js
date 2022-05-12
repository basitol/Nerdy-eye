import {
  reactImg,
  phoneImg,
  graphicsImg,
  developerImg,
  meta,
  appleImg,
  amazonImg,
} from "../../assets";

export const menuData = [
  {
    id: 1,
    title: "Services",
    // link: dashboardPage,
    icon: ["helpee", "helper"],
  },
  {
    id: 2,
    title: "Academy",
    // link: transactionsPage,
    icon: ["helpee"],
  },
  {
    id: 3,
    title: "Community",
    // link: investmentPage,
    user: ["helpee"],
  },
  {
    id: 4,
    title: "Workforce",
    // link: ourPlansPage,
    user: ["helpee"],
  },
  {
    id: 5,
    title: "Store",
    // link: profilePage,
    user: ["helpee"],
  },
  {
    id: 6,
    title: "Affiliate",
    // link: referralsPage,
    user: ["helpee"],
  },
];

export const careerData = [
  {
    id: 1,
    title: "UI/UX DESIGN",
    available: "120 Jobs Available",
    image: phoneImg,
  },
  {
    id: 2,
    title: "React Developer",
    available: "120 Jobs Available",
    image: reactImg,
  },
  {
    id: 3,
    title: "Graphics Design",
    available: "120 Jobs Available",
    image: graphicsImg,
    user: ["helpee"],
  },
  {
    id: 4,
    title: "Developer",
    available: "120 Jobs Available",
    image: developerImg,
  },
];

export const jobData = [
  {
    id: 1,
    job: "Design",
    title: "UI Designer",
    jobLocation: "Lagos",
    type: "Full Time",
    industry: "Meta",
    pathImage: phoneImg,
    image: meta,
  },
  {
    id: 2,
    job: "Web development",
    title: "Web Developer",
    jobLocation: "Lagos",
    type: "Full Time",
    industry: "Amazon",
    pathImage: developerImg,
    imgClass: "devImg",
    image: amazonImg,
  },
  {
    id: 3,
    job: "Software Development",
    title: "ReactJs Developer",
    jobLocation: "Lagos",
    type: "Full Time",
    industry: "Apple",
    pathImage: reactImg,
    imgClass: "devImg",
    image: appleImg,
  },
  {
    id: 4,
    job: "Graphics Design",
    title: "Graphics Designer",
    jobLocation: "Lagos",
    type: "Full Time",
    industry: "Meta",
    pathImage: graphicsImg,
    imgClass: "devImg",

    image: meta,
  },
  {
    id: 5,
    job: "Design",
    title: "UI Designer",
    jobLocation: "Lagos",
    type: "Full Time",
    industry: "Meta",
    pathImage: phoneImg,
    image: meta,
  },
];

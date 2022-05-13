import {
  reactImg,
  phoneImg,
  graphicsImg,
  developerImg,
  meta,
  appleImg,
  amazonImg,
  fintech,
  hospitality,
  media,
  commerce,
  health,
  // transportation,
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

export const industryData = [
  {
    id: 1,
    title: "Logistics & Transportation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    image:
      "https://images.unsplash.com/photo-1543499459-d1460946bdc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    id: 2,
    title: "Fintech",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    image: fintech,
  },
  {
    id: 3,
    title: "E-commerce",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    image: commerce,
  },
  {
    id: 4,
    title: "Media",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    image: media,
  },
  {
    id: 5,
    title: "Hospitality",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    image: hospitality,
  },
  {
    id: 6,
    title: "Hospitality",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    image: health,
  },
];

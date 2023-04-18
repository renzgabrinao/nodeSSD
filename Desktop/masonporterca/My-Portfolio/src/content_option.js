
import FoodScapeBanner from "./components/images/FoodScapeBanner.png";
import MPMoviesBanner from "./components/images/MPMoviesBanner.png";
import BCITDailyNewsBanner  from "./components/images/bcitdaily/BCITDailyNewsBanner.png";
import AudioEngineClone from "./components/images/AudioEngineClone.png";
import GPTCloneChatApp from "./components/images/GPTCloneChatApp.png";
import EcoMute from "./components/images/EcoMute.png";
import EcoMute2 from "./components/images/EcoMute2.png";
import MPBanking from "./components/images/MPBanking.png";

const logotext = "MASON";
const meta = {
    title: "Mason Porter",
    description: "I'm Mason Porter, a web developer and designer from Canada.",
};

const introdata = {
    title: "I'm Mason Porter",
    animated: {
        first: "Jr. Software Developer",
        second: "Full Stack Development",
        third: "BCIT Alumni 2023",
    },
    description: "Quote Of The Day → What if it turns out better than you could ever imagine?",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about myself",
    aboutme: "As a BCIT Alumni with a focus on Software Systems Development and Full Stack Development, I possess a strong technical background and a passion for creating projects. My curiosity about how things work fuels my persistence and motivation, driving me to explore complex systems and push the boundaries of what's possible. When I'm not working on software projects, I love spending time outdoors, exploring the natural beauty of Vancouver Island through hiking, caving, and mine exploration. These experiences help me maintain a healthy work-life balance and inspire me to create innovative solutions to technical challenges.",
};
const worktimeline = [{
        jobtitle: "Software Systems Development",
        where: "BCIT, Vancouver, BC",
        date: "2022",
    },
    {
        jobtitle: "Fundementals of Python Programming",
        where: "Vancouver, BC",
        date: "2021",
    },
    {
        jobtitle: "Self Taught Programming",
        where: "Nanaimo, BC",
        date: "2020",
    },
];

const skills = [{
        name: "React Js",
        value: 85,
    },
    {
        name: "Node Js",
        value: 85,
    },
    {
        name: "C#",
        value: 75,
    },
    {
        name: ".Net",
        value: 75,
    },
    {
        name: "SQL",
        value: 75,
    },
    {
        name: "Sass",
        value: 70,
    },
];

const SideProjects = [{
        title: "MP Crypto",
        description: "MP Crypto is a cryptocurrency tracker that allows users to track the price of their favorite cryptocurrencies. Users can also view the latest news and tweets related to their favorite cryptocurrencies.",
    },
    {
        title: "MP Cargo",
        description: "MP Cargo is a cargo tracking application that allows users to track the status of their cargo. Users can also view the latest news and tweets related to their cargo.",
    },
    {
        title: "Sketch Remix",
        description: "Sketch Remix is a web application that allows users to create artwork to which other artists can remix and create their own artwork. This is a project that is being created by Michael Yamauchi and help from myself.",
    },
];

const dataportfolio = [
    {
        img: `${FoodScapeBanner}`,
        desctiption: "FoodScape.",
        link: "/foodscape",
    },
    {
        img: `${MPMoviesBanner}`,
        desctiption: "MPMovies React Movie Database Application",
        link: "/mpmovies",
    },
    {
        img: `${EcoMute}`,
        desctiption: "EcoMute.",
        link: "/ecomute",
    },
    {
        img: `${AudioEngineClone}`,
        desctiption: "Audio Engine Clone. EDUCATIONAL PROJECT",
        link: "/audioengineclone",
    },

    {
        img: `${GPTCloneChatApp}`,
        desctiption: "GPT Clone Chat Application With SST.",
        link: "/gptchatapp",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "FoodScape.",
        link: "/foodscape",
    },
    {
        img: `${BCITDailyNewsBanner}`,
        desctiption: "BCIT Daily News Website",
        link: "/bcitdaily",
    },
    {
        img: `${MPBanking}`,
        desctiption: "Bank Management App.",
        link: "/bankmanagment",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "FoodScape.",
        link: "/foodscape",
    },

];

const contactConfig = {
    YOUR_EMAIL: "masonrwporter@gmail.com",
    YOUR_FONE: "250-739-0870",
    description: "Thank you for your interest in connecting with me. If you have any questions or are interested in discussing potential collaborations, I am readily available and look forward to hearing from you. Please feel free to contact me via email, or Phone. Your inquiry is important to me, and I appreciate your time and consideration.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_84z9kgx",
    YOUR_TEMPLATE_ID: "template_4u3j8om",
    YOUR_USER_ID: "YGp1D_85LKzrs4_rO",
};

const socialprofils = {
    github: "https://github.com/MBarry22",
    facebook: "https://www.facebook.com/mason.porter.775",
    linkedin: "https://www.linkedin.com/in/mason-porter-b3561b1b5/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    SideProjects,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
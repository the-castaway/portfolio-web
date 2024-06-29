
import InteractiveProductTour from "./content/interactiveProductTour"
import CommunityVoicesHub from "./content/communityVoicesHub";
import ScrollToPlay from "./content/scrollToPlay";
import Metaverse from "./content/metaverse";
import MTIA from "./content/mtia";
import News from "./content/news";
import Nike from "./content/nike";
import { ThumbnailMedia, BannerMedia } from "../../media/media";

export const Projects = [
    {
        key: 1,
        number: "001",
        name: "Interactive Product Tour",
        description: "The Interactive Product Tour lets users explore Quest headsets in a 3D setting and provides additional information when users click on hotspots.",
        purview: ["UI Design", "Front-end Eng", "3D Modeling"],
        company: "Meta",
        href: '/interactive-product-tour',
        thumbnail: ThumbnailMedia[0],
        banner: BannerMedia[0],
        content: <InteractiveProductTour />
    },
    {
        key: 2,
        number: "002",
        name: "Community Voices Hub",
        description: "The Community Voices Hub is a portfolio site showcasing the positive impact Meta has had on the world.",
        purview: ["UI Design", "Front-end Eng", "Prototyping"],
        company: "Meta",
        href: '/community-voices-hub',
        thumbnail: ThumbnailMedia[1],
        banner: BannerMedia[1],
        content: <CommunityVoicesHub />
    },
    {
        key: 3,
        number: "003",
        name: "Scroll To Play",
        description: "Scroll To Play is a module designed to allow users to scrub through a video as they scroll",
        purview: ["UI Design", "Front-end Eng", "Asset Procurement"],
        company: "Meta",
        href: '/scroll-to-play',
        thumbnail: ThumbnailMedia[2],
        banner: BannerMedia[2],
        content: <ScrollToPlay />
    },
    {
        key: 4,
        number: "004",
        name: "Metaverse",
        description: "The Metaverse explainer page was designed to answer various frequently searched questions, such as what the Metaverse is, who can use it, and how users can access it.",
        purview: ["UI Design", "Front-end Eng", "2D Animations"],
        company: "Meta",
        href: '/metaverse',
        thumbnail: ThumbnailMedia[3],
        banner: BannerMedia[3],
        content: <Metaverse />
    },
    {
        key: 5,
        number: "005",
        name: "MTIA v2",
        description: "The MTIA v2 page is designed to update investors, potential candidates, and the public about improvements to Meta’s custom silicon.",
        purview: ["UI Design", "Front-end Eng", "3D Modeling"],
        company: "Meta",
        href: '/mtia-v2',
        thumbnail: ThumbnailMedia[4],
        banner: BannerMedia[4],
        content: <MTIA />
    },
    {
        key: 6,
        number: "006",
        name: "News Hub",
        description: "The Meta News Hub is a centralized platform for all company-related information",
        purview: ["UI Design", "Product Design", "Prototyping"],
        company: "Meta",
        href: '/news-hub',
        thumbnail: ThumbnailMedia[5],
        banner: BannerMedia[5],
        content: <News />
    },
    {
        key: 7,
        number: "007",
        name: "Nike Plus",
        description: "The Nike Plus Concept app is designed to help runners plan, execute, and track their runs.",
        purview: ["UI Design", "Product Design", "Prototyping"],
        company: "Nike",
        href: '/nike-plus',
        thumbnail: ThumbnailMedia[6],
        banner: BannerMedia[6],
        content: <Nike />
    },
] 

import InteractiveProductTour from "./content/interactiveProductTour"
import CommunityVoicesHub from "./content/communityVoicesHub";
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
] 
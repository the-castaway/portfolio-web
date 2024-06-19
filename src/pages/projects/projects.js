import MetaNews from "./content/metaNews";
import { Media, ThumbnailMedia, BannerMedia } from "../../media/media";

export const Projects = [
    {
        key: 1,
        number: "001",
        name: "Interactive Product Tour",
        description: "Project 1 description",
        purview: ["UI Design", "Front-end Eng", "3D Modeling"],
        company: "Meta",
        href: '/ipt',
        thumbnail: 0,
        banner: 0,
        content: <MetaNews />
    },
] 
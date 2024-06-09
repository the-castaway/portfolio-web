import React from 'react';
//components
import Links from '../../../components/link.react';
//styles
import '../../../styles/content.css';
//assets
import { Media } from "../../../media/media";

const MetaNews = () => {
    return (
        <div className='content'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui. Morbi eget sapien volutpat, tristique purus semper, ullamcorper orci. Nullam at neque mauris. Phasellus a mollis magna, sed viverra sapien. Morbi luctus efficitur tellus, ac suscipit nibh lacinia dapibus. Nullam cursus tempor dolor, a tristique orci imperdiet venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui. Morbi eget sapien volutpat, tristique purus semper, ullamcorper orci. Nullam at neque mauris. Phasellus a mollis magna, sed viverra sapien. Morbi luctus efficitur tellus, ac suscipit nibh lacinia dapibus. Nullam cursus tempor dolor, a tristique orci imperdiet venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <img className='content-media-full' key={Media[0].key} src={Media[0].src} />
            <img className='content-media-full' key={Media[1].key} src={Media[1].src} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui. Morbi eget sapien volutpat, tristique purus semper, ullamcorper orci. Nullam at neque mauris. Phasellus a mollis magna, sed viverra sapien. Morbi luctus efficitur tellus, ac suscipit nibh lacinia dapibus. Nullam cursus tempor dolor, a tristique orci imperdiet venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui. Morbi eget sapien volutpat, tristique purus semper, ullamcorper orci. Nullam at neque mauris. Phasellus a mollis magna, sed viverra sapien. Morbi luctus efficitur tellus, ac suscipit nibh lacinia dapibus. Nullam cursus tempor dolor, a tristique orci imperdiet venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className='content-next'>
                <Links header={'Next Project'} description={"Let's explore"} />
            </div>
        </div>
    );
}

export default MetaNews;

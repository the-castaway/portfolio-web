import React, { Component } from 'react';
//components
import Background from '../components/DrawersBG.react';
import Drawer from '../components/Drawer.react';
//styles
import '../styles/Drawers.css';
import '../styles/Grid.css';
//assets
import collage_1 from '../media/collage_1.png';
import collage_2 from '../media/collage_2.png';
import collage_3 from '../media/collage_3.png';

function Drawers() {
  return (
    <section className="DrawersContainer">
        <div className='DrawersContent Grid'>
            <div className='DrawersText Col8'>
                <div className='DrawersTextHeader'>
                    <h2>
                        Wissenswertes
                    </h2>
                    <div className='DrawersTextHeaderNumber'>
                        01
                    </div>
                </div>
                <p>
                    Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condimentum nisl non gravida in. 
                </p>

            </div>
        </div>
        <div className='DrawersContent DrawersLower Grid'>
            <div className='DrawersCollageColumn Col3'>
                <img className="DrawersCollageImage" src={collage_1}/>
            </div>
            <div className='DrawersCollageColumn Col3'>
                <img className="DrawersCollageImage" src={collage_2}/>
                <img className="DrawersCollageImage DrawersCollageBottomImage" src={collage_3}/>
            </div>
            <div className='DrawersRightContainer'>
                <div className='DrawerStatsContainer'>
                    <div className='DrawerStats'>
                        <p className='Stat'>2260</p>
                        <p>Interger massa</p>
                    </div>
                    <div className='DrawerStatsSpacer'></div>
                    <div className='DrawerStats'>
                        <p className='Stat'>1324</p>
                        <p>Nisl non gravidl</p>
                    </div>
                </div>
                <div className='DrawersStack'>
                    <Drawer startActive={true} header={"Bewirb dich bei uns massa"} content={"Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condtum."}/>
                    <Drawer startActive={false} header={"Morbi amet aenean"} content={"Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condtum."}/>
                    <Drawer startActive={false} header={"Nunc condimentum nis"} content={"Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condtum."}/>
                </div>

            </div>
        </div> 
      <Background/>
    </section>
  );
}

export default Drawers;
import { React, useState } from 'react';
//components
import Header from '../../components/header.react';
//styles
import '../../styles/home.css';
import '../../styles/about.css';
//assets
import Headshot from '../../media/about/about_headshot.jpg'

const About = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='about'>
      <div className='about-left'>
        <div className='about-fold'>
          <div className='about-header'>
            <Header headerContent="About" isActive={isActive} />
          </div>
          <div className='about-description'>
            <h2>
              Hello again. I'm Jaime.
            </h2>
            <p>
              A results-driven designer and developer with a proven track record in leading design and development efforts for diverse projects.Skilled in crafting captivating user flows, driving innovation, and optimizing content for impactful digital experiences. Adept at vollaborating with clients, designers, and engineers to deliver visually stunning and techically sound solutions.
            </p>
          </div>
        </div>
        <div className="about-experience">
          {/* Work Experience */}
          <div className='about-experience-group'>
            <div className='about-experience-header'>
              <h2>
                Experience
              </h2>
            </div>
            <div className='about-experiece-node'>
              <h3>
                Design and Engineering Lead for Web @Meta
              </h3>
              <h4>
                March 2019 - Present
              </h4>
              <p>
                Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
              </p>
            </div>
            <div className='about-experiece-node'>
              <h3>
                Design and Engineering Lead for Web @Meta
              </h3>
              <h4>
                March 2019 - Present
              </h4>
              <p>
                Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
              </p>
            </div>
            <div className='about-experiece-node'>
              <h3>
                Design and Engineering Lead for Web @Meta
              </h3>
              <h4>
                March 2019 - Present
              </h4>
              <p>
                Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
              </p>
            </div>
            <div className='about-experiece-node'>
              <h3>
                Design and Engineering Lead for Web @Meta
              </h3>
              <h4>
                March 2019 - Present
              </h4>
              <p>
                Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
              </p>
            </div>
            <div className='about-experiece-node'>
              <h3>
                Design and Engineering Lead for Web @Meta
              </h3>
              <h4>
                March 2019 - Present
              </h4>
              <p>
                Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
              </p>
            </div>
          </div>
          {/* Education Experience */}
          <div className='about-experience-group'>
            <div className='about-experience-header'>
              <h2>
                Education
              </h2>
            </div>
            <div className='about-experiece-node'>
              <h3>
                Design and Engineering Lead for Web @Meta
              </h3>
              <h4>
                March 2019 - Present
              </h4>
              <p>
                Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
              </p>
            </div>
            <div className='about-experiece-node'>
              <h3>
                Design and Engineering Lead for Web @Meta
              </h3>
              <h4>
                March 2019 - Present
              </h4>
              <p>
                Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
              </p>
            </div>
            <div className='about-experiece-node'>
              <h3>
                Design and Engineering Lead for Web @Meta
              </h3>
              <h4>
                March 2019 - Present
              </h4>
              <p>
                Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
              </p>
            </div>
            <div className='about-experiece-node'>
              <h3>
                Design and Engineering Lead for Web @Meta
              </h3>
              <h4>
                March 2019 - Present
              </h4>
              <p>
                Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
              </p>
            </div>
            <div className='about-experiece-node'>
              <h3>
                Design and Engineering Lead for Web @Meta
              </h3>
              <h4>
                March 2019 - Present
              </h4>
              <p>
                Web lead with a purview over strategy, design, and development of all web projects for the Communications Org.
                Drove the Meta Web team to embrace innovative technologies and best practices, fostering a culture of continuous adaptation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='about-right'>
        <div className='about-headshot-container'>
          <img className='about-headshot' src={Headshot} />
        </div>
        <div className='about-social'>
          <a className='linkedin'>
            linkedin
          </a>
          <a className='email'>
            hello@jaimecastaneda.com
          </a>
          <a className='threads'>
            Threads
          </a>
        </div>
      </div>
    </div>

  );
}

export default About;
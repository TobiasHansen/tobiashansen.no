import React from 'react';
import './content.css'
import yetAnotherTrainingStatsAppPicture from './YetAnotherTrainingStatsApp.png'
import personalPortfolioPicture from './PersonalPortfolio.png'

function Content() {
  return (
    <div className="projects">
      <div className="projects-content">
        <div className="project-item">
          <h3>Yet Another Training Stats App</h3>
          <img src={yetAnotherTrainingStatsAppPicture} alt="Project logo" className="project-image" />
          <ul>
            <li>
              Sideprosjekt dels for å uthente ønsket treningsstaistikk som jeg ikke får fra andre tjenester, og dels for å ha et prosjekt for å utforske ny teknologi
            </li>
            <li>
              Tech: Kotlin, Spring Boot, MongoDB, TypeScript, React, Redux Toolkit, Amazon S3, Route 53, CloudFront
            </li>
            <li>
              Link: <a href="https://training.tobiashansen.no">https://training.tobiashansen.no</a>
            </li>
          </ul>
        </div>

        <div className="project-item">
          <h3>Personal Portfolio Website</h3>
          <img src={personalPortfolioPicture} alt="Project logo" className="project-image" />
          <ul>
            <li>
              Enkel portefølje nettside
            </li>
            <li>
              Link: <a href="https://www.tobiashansen.no">https://www.tobiashansen.no</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Content;
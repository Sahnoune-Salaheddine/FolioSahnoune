import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  // Image-based color extraction removed with logo removal; keep static styles from SCSS

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => {
          // Ignorer les éléments vides et créer un espacement
          if (!item || item.trim() === "") {
            return <div key={i} style={{height: "10px"}}></div>;
          }
          return (
            <li
              key={i}
              className={isDark ? "subTitle dark-mode-text" : "subTitle"}
            >
              {item}
            </li>
          );
        })
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        {/* Image intentionally omitted for WorkExperiences */}
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}

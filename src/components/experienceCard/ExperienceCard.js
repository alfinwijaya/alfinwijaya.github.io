import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  const hasPositions = experience["positions"] && experience["positions"].length > 0;

  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
      {/* Company logo */}
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assests/images/${experience["logo_path"]}`)}
          alt=""
        />
      </div>

      <div className="experience-card-body-div">
        {/* Company header row */}
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3
              className="experience-card-title"
              style={{ color: theme.text }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-card-title-link"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </a>
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              {hasPositions ? (
                experience["company"] ? experience["company"] : null
              ) : (
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              )}
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {experience["duration"]}
            </p>
            <div className="experience-card-margin-top"></div>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>

        {/* LinkedIn-style positions list */}
        {hasPositions ? (
          <div className="experience-positions-list">
            {experience["positions"].map((position, index) => (
              <div key={index} className="experience-position-item">
                {/* Bullet + vertical line connector */}
                <div className="experience-position-timeline">
                  <span
                    className="experience-position-dot"
                    style={{ backgroundColor: experience["color"] }}
                  />
                  {index < experience["positions"].length - 1 && (
                    <span
                      className="experience-position-line"
                      style={{ backgroundColor: experience["color"] + "55" }}
                    />
                  )}
                </div>

                <div className="experience-position-content">
                  <h4
                    className="experience-position-title"
                    style={{ color: theme.text }}
                  >
                    {position["title"]}
                  </h4>
                  <p
                    className="experience-position-meta"
                    style={{ color: theme.secondaryText }}
                  >
                    {position["type"]} · {position["duration"]}
                  </p>
                  <ul className="experience-position-description">
                    {position["description"].map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        style={{ color: theme.text }}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Original single-position description */
          <p
            className="experience-card-description"
            style={{ color: theme.text }}
          >
            {experience["description"]}
          </p>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;

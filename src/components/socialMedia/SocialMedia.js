import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { getImageUrl } from "../../utils/imageLoader";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  .social-logo-img {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i,
  &:hover .social-logo-img {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        const useLogoImage = media.logoImage;
        const tooltip = (
          <Tooltip id={`tooltip-${media.name}`} className="social-media-tooltip">
            {media.name}
          </Tooltip>
        );
        return (
          <OverlayTrigger
            key={media.name}
            placement="top"
            overlay={tooltip}
            delay={{ show: 80, hide: 0 }}
          >
            <a
              href={media.link}
              className="icon-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper {...media} {...props}>
                {useLogoImage ? (
                  <span
                    className="social-logo-img icon-button-logo"
                    style={{ backgroundColor: media.backgroundColor }}
                    aria-hidden
                  >
                    <img
                      src={getImageUrl(media.logoImage) || ""}
                      alt=""
                      width="20"
                      height="20"
                    />
                  </span>
                ) : (
                  <i className={media.fontAwesomeIcon.includes(" ") ? media.fontAwesomeIcon : `fab ${media.fontAwesomeIcon}`}></i>
                )}
              </IconWrapper>
            </a>
          </OverlayTrigger>
        );
      })}
    </div>
  );
}

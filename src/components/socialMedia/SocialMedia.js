import React from "react";
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
        return (
          <a
            key={media.name}
            href={media.link}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
            title={media.name}
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
        );
      })}
    </div>
  );
}

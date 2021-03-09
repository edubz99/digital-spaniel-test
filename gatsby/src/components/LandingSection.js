import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LandingContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 560px;
  height: 50vh;
  @media (min-width: 920px) {
    max-height: 1080px;
    height: 100vh;
  }
  .contents-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 0 100%;
    justify-content: flex-end;
    @media (min-width: 920px) {
      justify-content: center;
      flex: 0 0 50%;
    }
    .contents-inner {
      max-width: 440px;
      margin: 0 auto;
      @media (max-width: 920px) {
        margin-bottom: 50rem;
        padding: 1.5rem 3rem;
        max-width: 600px;
        margin-left: 0;
        margin-right: 0;
      }
      @media (max-width: 600px) {
        padding: 1.5rem;
      }
    }

    .tagline {
      color: #c0345e;
      opacity: 0.75;
      font: normal normal 600 16px/72px Open Sans;
      text-transform: uppercase;
      span + span::before {
        display: inline-block;
        white-space: pre;
        content: ', ';
      }
    }
    .summary {
      margin-top: 0;
    }
  }
  .img-wrapper {
    flex: 0 0 100%;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: none;
    @media (min-width: 920px) {
      display: flex;
      flex: 0 0 50%;
      background-position: right;
    }
  }
`;

function LandingSection({ landingData }) {
  const {
    image,
    tags,
    title,
    subtitle,
    summary,
    ctaLink,
    ctaTitle,
  } = landingData;
  return (
    <LandingContainerStyles>
      <div className="contents-wrapper">
        <div className="contents-inner">
          <div className="tagline">
            {tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
          <h2>
            {title}
            <span>{subtitle}</span>
          </h2>
          <p className="summary">{summary}</p>
          <Link to={`/${ctaLink}`}>{ctaTitle}</Link>
        </div>
      </div>
      <div
        className="img-wrapper"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </LandingContainerStyles>
  );
}

export default LandingSection;

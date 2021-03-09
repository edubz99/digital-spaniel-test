import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const DetailsSectionStyles = styled.div`
  background: var(--light-grey);
  .section-container {
    display: flex;
    padding-top: 10rem;
    padding-bottom: 10rem;
    @media (max-width: 920px) {
      flex-wrap: wrap;
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    &.container-base {
      .details {
        @media (min-width: 920px) {
          flex: 0 0 55%;
        }
      }
      ul {
        @media (min-width: 920px) {
          flex: 0 0 50%;
        }
      }
    }
    &.container-wide {
      .details {
        @media (min-width: 920px) {
          flex: 0 0 45%;
        }
      }
      ul {
        @media (min-width: 920px) {
          flex: 0 0 28%;
        }
      }
    }
  }
  .details {
    .inner-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      @media (min-width: 920px) {
        max-width: 434px;
      }
      a {
        margin-top: auto;
      }
    }
  }
  &:last-of-type {
    .details .inner-wrapper {
      height: 90%;
    }
  }
`;

const MenusContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 920px) {
    justify-content: space-between;
  }
  ul {
    li {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 1.6rem;
      transition: all 0.25s ease-in-out;
      @media (min-width: 920px) {
        font-size: 2.1rem;
      }
      &:first-of-type {
        letter-spacing: 0.21rem;
        color: var(--dark-grey);
        text-transform: uppercase;
        pointer-events: none;
      }

      &:not(&:first-of-type) {
        letter-spacing: 0.21rem;
        color: var(--cadet);
        letter-spacing: 0.53px;
      }
      &:hover {
        svg {
          display: inline-block !important;
        }
      }
    }
    svg {
      display: none !important;
      color: var(--cadet);
    }
    a {
      font-size: inherit;
      color: inherit;
      padding-right: 2rem;
      line-height: 4rem;
      @media (min-width: 920px) {
        line-height: 5.8rem;
      }
      &:before {
        position: relative;
      }
      &:after {
        display: none;
      }
    }
  }
`;

function DetailsSection({ sectionData, isWide }) {
  const {
    sectionTitle,
    subtitle,
    summary,
    ctaLink,
    ctaTitle,
    menus,
  } = sectionData;

  return (
    <DetailsSectionStyles>
      <div
        className={`section-container ${
          isWide ? 'container-wide' : 'container-base'
        }`}
      >
        <div className="col details">
          <div className="inner-wrapper">
            <h2>
              {sectionTitle}
              <span>{subtitle}</span>
            </h2>
            {summary && <p className="summary"> {summary}</p>}
            {ctaTitle && <Link to={`/${ctaLink}`}>{ctaTitle}</Link>}
          </div>
        </div>

        <MenusContainerStyles>
          {menus.map((menu, idx) => (
            <ul key={idx}>
              {menu.map((li, index) => (
                <li key={index}>
                  <Link to={li}>{li}</Link>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                </li>
              ))}
            </ul>
          ))}
        </MenusContainerStyles>
      </div>
    </DetailsSectionStyles>
  );
}

export default DetailsSection;

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/components/navigation/navigation.min.css';
import styled from 'styled-components';
import ArrowStyles from '../styles/ArrowStyles';

SwiperCore.use([Navigation]);

const CaseStudySwiperStyles = styled(Swiper)`
  height: 300px;
  @media (min-width: 920px) {
    height: 580px;
    margin: 6rem 0px 12rem;
  }
  .swiper-slide-prev,
  .swiper-slide-next {
    width: 660px !important;
  }
  .swiper-slide-active {
    display: flex;

    @media (min-width: 920px) {
      padding-right: 500px;
      width: 77% !important;
    }
    .content-underlay {
      opacity: 1;
      z-index: 2;
      @media (min-width: 920px) {
        transform: translateX(0%);
        z-index: 1;
      }
    }
    .gatsby-image-wrapper {
      z-index: 2;
    }
  }
  .navigation {
    position: absolute;
    bottom: -30px;
    right: -31px;
    display: flex;
    .swiper-button-prev,
    .swiper-button-next {
      position: unset;
      margin-right: 0;
    }
    a {
      margin-right: 0;
      &:hover {
        background: #a7b1b8;
      }
    }
  }
`;

const SlideStyles = styled(SwiperSlide)`
  position: relative;
  border-radius: 10px;
`;

const ContentUnderlay = styled.div`
  position: absolute;

  transition-delay: opacity 1s;
  /* opacity: 0; */
  right: 0px;
  width: 627px;
  padding: 3rem;
  height: 452px;
  background: var(--dark-grey);
  z-index: -2;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (min-width: 920px) {
    transform: translateX(-120%);
    transition: all 0.8s ease-in-out;
    width: 500px;
  }
  .inner-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 500;
  }
  p,
  h3 {
    color: var(--white);
  }
  p {
    margin-top: 0px;
    font-size: 1.8rem;
    line-height: 2.7rem;
    max-width: 310px;
  }
  a {
    color: var(--white);
    &:hover {
      &:after {
        background-color: var(--pink) !important;
      }
    }
    &:after {
      background-color: var(--white);
    }
  }
`;

function CaseStudies() {
  const sliderParams = {
    slidesPerView: '3',
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  };
  const { caseStudies } = useStaticQuery(graphql`
    query {
      caseStudies: allSanityCaseStudy(sort: { fields: _updatedAt }) {
        nodes {
          id
          name
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          description
        }
      }
    }
  `);

  const studies = caseStudies.nodes;

  return (
    <>
      <div className="entry-content centered">
        <h2>Case Studies</h2>
        <p>
          Every project is different. We like to work collaboratively with our
          clients, tailoring each project to suit the needs of you and your
          business.
        </p>
      </div>
      <CaseStudySwiperStyles
        {...sliderParams}
        spaceBetween={50}
        slidesPerView={2}
      >
        {studies.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Img fluid={slide?.image?.asset?.fluid} />
            <ContentUnderlay className="content-underlay">
              <div className="inner-wrapper">
                <h3>{slide?.name}</h3>
                <p className="summary">{slide?.description}</p>
                <Link to={slide?.slug?.current}>Read more</Link>
                <div className="navigation">
                  <ArrowStyles
                    light
                    previous
                    className="swiper-button-prev swiper-button-prev-unique"
                  />
                  <ArrowStyles
                    light
                    next
                    classNmae="swiper-button-next swiper-button-next-unique"
                  />
                </div>
              </div>
            </ContentUnderlay>
          </SwiperSlide>
        ))}
      </CaseStudySwiperStyles>
    </>
  );
}

export default CaseStudies;

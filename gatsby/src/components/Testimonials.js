import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { IoMdQuote } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/components/pagination/pagination.min.css';
import styled from 'styled-components';

SwiperCore.use([Pagination]);

const TestimonialsSwiperStyles = styled(Swiper)`
  padding: 6rem 0;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 920px) {
    padding: 6rem 0 10rem 0;
  }
  .swiper-wrapper {
    align-items: center;
  }
  .single-testimonial {
    max-width: 434px;
    border-radius: 1rem;
    background-color: #e2e4e6;
    padding: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 920px) {
      flex: 0 0 100%;
      padding: 6rem;
    }

    .summary {
      color: var(--cadet);
      text-align: center;

      font-size: 1.6rem;
      font-style: italic;
      line-height: 4.2rem;
      position: relative;
      z-index: 2;
      @media (min-width: 920px) {
        font-size: 2.6rem;
      }
    }
    .title {
      @media (min-width: 920px) {
        font: 21px;
        line-height: 3.8rem;
      }
    }
    blockquote {
      position: relative;
      margin: 0;
    }
    svg.quote {
      color: #c5cace;
      font-size: 4rem;
      @media (min-width: 920px) {
        font-size: 7rem;
      }

      position: absolute;
      &:first-child {
        top: -4rem;
        left: -3rem;
        transform: rotate(180deg);
      }
      &:last-child {
        bottom: -4rem;
        right: -3rem;
      }
    }
    p {
      margin: 0;
    }
    .name {
      font-weight: 600;
      font-size: 1.6rem;
      margin-top: 1rem;
      @media (min-width: 920px) {
        font-size: 2.1rem;
      }
    }
    .gatsby-image-wrapper {
      max-width: 96px;
      margin-top: 3rem;
    }
    &.swiper-slide-active {
      box-shadow: 0 0 2rem #19293a80;
      background-color: var(--dark-grey);
      transform: scale(1.1);
      svg.quote {
        color: #344657;
      }

      p {
        color: var(--white);
      }
      .gatsby-image-wrapper {
        max-width: 128px;
        margin-top: 5rem;
      }
    }
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7rem;
    position: relative;
    @media (min-width: 920px) {
      margin-top: 11rem;
    }
    .swiper-pagination-bullet {
      width: 2.4rem;
      height: 2.4rem;
      background: #c5c9cd;
      margin: 0 15px;
      cursor: pointer;
      &.swiper-pagination-bullet-active {
        width: 3.4rem;
        height: 3.4rem;
        background: var(--dark-grey);
      }
    }
  }
`;

function Testimonials() {
  const sliderParams = {
    slidesPerView: 3,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination-unique',
    },
    breakpoints: {
      920: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };

  const { clients } = useStaticQuery(graphql`
    query {
      clients: allSanityCustomer {
        nodes {
          id
          company
          name
          image {
            asset {
              fluid(maxWidth: 130) {
                ...GatsbySanityImageFluid
              }
            }
          }
          company
          position
          testimonials {
            id
            summary
          }
          slug {
            current
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="container-base">
        <div className="entry-content">
          <h2>
            Kind words <span>from our clients</span>
          </h2>
        </div>
      </div>
      <div className="container-wide">
        <TestimonialsSwiperStyles
          {...sliderParams}
          spaceBetween={50}
          slidesPerView={3}
        >
          {clients?.nodes?.map((client) => (
            <SwiperSlide key={client.id} className="single-testimonial">
              <blockquote>
                <IoMdQuote className="quote" />
                <p className="summary"> {client?.testimonials[0]?.summary}</p>
                <IoMdQuote className="quote" />
              </blockquote>
              <Img fluid={client?.image?.asset?.fluid} />
              <p className="name">{client?.name}</p>
              <p className="title">
                {client?.position}, {client?.company}
              </p>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination swiper-pagination-unique" />
        </TestimonialsSwiperStyles>
      </div>
    </>
  );
}

export default Testimonials;

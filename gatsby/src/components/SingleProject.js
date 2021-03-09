import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Project = styled.div`
  display: flex;
  flex-direction: column;

  height: 350px;
  position: relative;
  flex: 0 0 100%;
  border-radius: 1rem;
  margin-bottom: 3rem;
  @media (min-width: 600px) {
    flex: 0 0 calc(50% - 1.5rem);
  }
  @media (min-width: 920px) {
    height: 420px;
    flex: 0 0 calc(33.33% - 1.5rem);
  }
  &:nth-child(4) {
    @media (min-width: 920px) {
      flex: 0 0 calc(66.66% - 1.5rem);
    }
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 3rem;
    width: 100%;
    height: 100%;
    background: transparent linear-gradient(180deg, #19293a1a 0%, #19293a 100%)
      0% 0% no-repeat padding-box;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    h3 {
      font-size: 1.8rem;
      font-weight: 500;
      @media (min-width: 920px) {
        font-size: 2.4rem;
      }
    }
    p,
    h3 {
      color: var(--white);
    }
    p {
      margin-top: 0;
      max-width: 310px;
      @media (min-width: 920px) {
        font-size: 1.8rem;
        line-height: 2.7rem;
      }
    }
    a {
      color: var(--white);
      &:after {
        background-color: var(--white);
      }
      &:hover {
        &:after {
          background-color: var(--pink);
        }
      }
    }
  }
`;
function SingleProject({ project }) {
  return (
    <Project className="project">
      <Img fluid={project?.image?.asset?.fluid} alt={project?.name} />
      <div className="overlay">
        <h3>{project?.name}</h3>
        <p>{project?.description}</p>
        <Link to={`projects/${project?.slug.current}`}>Full Project</Link>
      </div>
    </Project>
  );
}

export default SingleProject;

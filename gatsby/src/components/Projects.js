import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';

import SingleProject from './SingleProject';
import ArrowStyles from '../styles/ArrowStyles';

const ProjectsContainer = styled.div`
  padding: 5rem 0;
`;

const FilterWrapperStyles = styled.div`
  display: flex;
  max-width: 760px;
  justify-content: space-between;
  margin-bottom: 6rem;
`;
const FilterStyles = styled.a`
  width: 100%;
  color: var(--dark-grey);
  font-size: 1.6rem;
  line-height: 2.7rem;
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  @media (min-width: 920px) {
    line-height: 2.7rem;
    font-size: 2rem;
  }
  &.active {
    font-weight: 600;
  }
  &:after {
    background-color: var(--dark-grey);
    height: 0.1rem;
  }
  &.active {
    &:after {
      background-color: var(--pink);
      height: 0.3rem;
    }
  }
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProjectControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

function ProjectsGrid() {
  const { projects, categories } = useStaticQuery(graphql`
    query {
      projects: allSanityProject {
        nodes {
          id
          name
          description
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
          slug {
            current
          }
          categories {
            name
            id
          }
        }
      }
      categories: allSanityCategory {
        nodes {
          name
          id
        }
      }
    }
  `);
  const [allProjects, setAllProjects] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setAllProjects(projects);
  }, []);

  useEffect(() => {
    setAllProjects([]);
    const filtered = projects.nodes.map((project) => ({
      ...project,
      filtered: project.categories.map((p) => p.name.includes(filter)),
    }));
    setAllProjects(filtered);
  }, [filter, projects.nodes]);

  return (
    <ProjectsContainer>
      <div className="container-base">
        <h2>
          Some of our<span>recent projects</span>
        </h2>

        <FilterWrapperStyles>
          {categories?.nodes?.map((category, idx) => (
            <FilterStyles
              key={idx}
              className={category.name === filter ? 'active' : ''}
              onClick={() => setFilter(category.name)}
            >
              {category.name}
            </FilterStyles>
          ))}
        </FilterWrapperStyles>

        <Grid>
          {allProjects?.map((project, idx) =>
            project?.filtered?.map((i) =>
              i === true ? <SingleProject key={idx} project={project} /> : ''
            )
          )}
        </Grid>

        <ProjectControls>
          <Link to="/projects">See all work</Link>
          <div className="controls">
            <ArrowStyles previous />
            <ArrowStyles next />
          </div>
        </ProjectControls>
      </div>
    </ProjectsContainer>
  );
}

export default ProjectsGrid;

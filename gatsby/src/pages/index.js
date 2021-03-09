import React from 'react';
import CaseStudies from '../components/CaseStudies';
import DetailsSection from '../components/DetailsSection';
import MasonryGallery from '../components/Gallery';
import LandingSection from '../components/LandingSection';
import ProjectsGrid from '../components/Projects';
import Testimonials from '../components/Testimonials';
import { homeLandingData, detailsSectionsData } from '../data/homepageData';
import SEO from '../components/SEO';

function HomePage() {
  return (
    <>
      <SEO title="Digital Spaniel - Homepage" />
      <LandingSection landingData={homeLandingData} />
      <DetailsSection sectionData={detailsSectionsData[0]} />
      <ProjectsGrid />
      <CaseStudies />
      <MasonryGallery />
      <Testimonials />
      <DetailsSection sectionData={detailsSectionsData[1]} isWide />
    </>
  );
}

export default HomePage;

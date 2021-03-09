import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Gallery from 'react-photo-masonry';
import styled from 'styled-components';

const GalleryStyles = styled.div`
  background-color: var(--light-grey);
  padding: 8rem 0;
  @media (min-width: 920px) {
    padding: 15rem 0;
    margin: 8rem 0;
  }
  .filters {
    max-width: 200px;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
  }
`;

function MasonryGallery() {
  const [photosData, setPhotosData] = useState([]);

  async function imagesFetch(url) {
    const res = await fetch(url);
    const images = await res.json();
    return images;
  }

  useEffect(() => {
    imagesFetch(
      'https://api.unsplash.com/photos/?client_id=xPKi6HBw-VmMD0EfDdNvfzvIIZ0uHaxHyk2VN0czMMs'
    )
      .then((images) => {
        const photos = [];
        images?.map((image) =>
          photos.push({
            src: image?.urls?.regular,
            width: image?.width,
            height: image?.height,
          })
        );
        setPhotosData(photos);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  function handleClick(e) {
    e.preventDefault();
    const value = e.target.dataset.txt;
    imagesFetch(
      `https://api.unsplash.com/search/photos?client_id=xPKi6HBw-VmMD0EfDdNvfzvIIZ0uHaxHyk2VN0czMMs&?page=1&query=${value}`
    )
      .then((images) => {
        const photos = [];
        images?.results?.map((image) =>
          photos.push({
            src: image?.urls?.regular,
            width: image?.width,
            height: image?.height,
          })
        );
        // Update state to the refetched images
        setPhotosData(photos);
      })
      .catch((error) => {
        console.error(error.message); // 'An error has occurred: 404'
      });
  }

  return (
    <>
      <div className="inner-wrapper container-base">
        <h2>
          What are
          <span>we all about?</span>
        </h2>
      </div>
      <GalleryStyles>
        <div className="container-base">
          <Gallery photos={photosData} />
          <div className="filters">
            <Link to="#" data-txt="About" onClick={handleClick}>
              About
            </Link>
            <Link to="#" data-txt="Careers" onClick={handleClick}>
              Careers
            </Link>
          </div>
        </div>
      </GalleryStyles>
    </>
  );
}

export default MasonryGallery;

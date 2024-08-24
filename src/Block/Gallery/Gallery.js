import React, { useRef, useEffect,useState } from 'react';
import './Gallery.css'; // Import CSS for styling
import Hero from '../../Components/Hero';
import { bannerclip, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12 } from "../../Components/assets"
import { Form } from 'react-router-dom';


function Gallery() {
  const galleryRef = useRef(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger animation when 50% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide');
        } else {
          entry.target.classList.remove('animate-slide');
        }
      });
    }, observerOptions);

    galleryItems.forEach((item) => {
      observer.observe(item);
    });

    // Clean up observer on unmount
    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    { id: 1, imageUrl: gallery1, title: 'Occasional Fun.', description: 'Joyful celebration with laughter and clinking.' },
    { id: 2, imageUrl: gallery2, title: 'Birthday Party', description: 'A birthday bash filled with laughter, music, cake, and joy.' },
    { id: 3, imageUrl: gallery3, title: 'GarBa Fun.', description: 'Colorful Garba: dance, music, joyous celebration.' },
    { id: 4, imageUrl: gallery12, title: 'Office Party', description: 'Office party: relaxed atmosphere, laughter, camaraderie, celebration' },
    { id: 5, imageUrl: gallery5, title: 'Ganesh Puja', description: 'Ganesh Puja: serene prayers, familial bonds, reverence' },
    { id: 6, imageUrl: gallery6, title: 'Coffee Party', description: 'Party planning is always fun. With coffee party invitations' },
    { id: 7, imageUrl: gallery7, title: 'Office outing', description: 'Team building, camaraderie, outdoor adventure' },
    { id: 8, imageUrl: gallery9, title: 'Ganesh Puja', description: 'Ganesh Puja: Sacred chants, floral offerings, familial reverence' },
    { id: 8, imageUrl: gallery10, title: 'Diwali Celebrate', description: 'Diwali gift: Thoughtful, festive, symbolizes love and goodwill.' },
    { id: 8, imageUrl: gallery8, title: 'Office outing', description: 'Refreshing break, bonding, shared experiences' },
    { id: 8, imageUrl: gallery11, title: 'Tea party', description: 'Tea party: Elegant setting, delicate china, lively conversations' },
  ];

  return (
    <div className="page">
      <Hero
        herosVideo={bannerclip}
        heading={'Discover Our Work'}
        subheading={'Discover the creativity and quality of my work through a curated collection of my best projects.'}
      />
      <section className="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <div className="gallery-wrapper" ref={galleryRef}>
            {galleryItems.map((item, index) => (
              <div key={item.id} className={`gallery-item ${index % 3 === 0 ? 'top' : index % 3 === 1 ? 'left' : 'right'}`}>
                <img src={item.imageUrl} alt={`Gallery ${item.id}`} />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{item.title}</h3>
                    <p className='selfiDescription' >{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="image-gallery">
        {galleryItems.map((image, index) => (
          <div key={index} className="image-gallery-item">
            <img src={image.imageUrl} alt={image.alt} className="image-gallery-img" />
          </div>
        ))}
      </div>

      <div className="gallery-container">
      <div className="gallery-scrollable">
        {galleryItems.map((image, index) => (
          <div className="gallery-image-item" key={index}>
            <img src={image.imageUrl} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}
<Form />

export default Gallery;

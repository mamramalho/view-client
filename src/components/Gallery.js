import React, {useEffect, useState} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Gallery.css';
import cover1 from './img/cover1.jpg';
import cover2 from './img/cover2.jpg';
import cover3 from './img/cover3.jpg';

const Gallery = () => {
  const featuredItems = [
    { id: 1, title: 'Shameless', image: cover1, small_info: '11 Seasons', info: 'The series depicts the dysfunctional family of the Gallaghers who live in the South Side of Chicago. The show stars Frank Gallagher, a single father of six children. While he spends his days drunk, his six kids learn to take care of themselves through their lives.'},
    { id: 2, title: 'Breaking Bad', image: cover2, small_info: '12 Seasons', info: 'Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who becomes a crimelord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.'},
    { id: 3, title: 'Obi-Wan Kenobi', image: cover3, small_info: '2 Seasons', info: 'During the reign of the Galactic Empire, former Jedi Master Obi-Wan Kenobi embarks on a crucial mission. Kenobi must confront allies turned enemies and face the wrath of the Empire.'},
    { id: 4, title: 'Show 4', image: 'https://via.placeholder.com/1200x800', small_info: '4 Seasons', info: 'This 4women isnt real, She is the assassin but no one believes in her...'},
    { id: 5, title: 'Show 5', image: 'https://via.placeholder.com/1200x800', small_info: '5 Seasons', info: 'This 6women isnt real, She is the assassin but no one believes in her...'},
    { id: 6, title: 'Show 6', image: 'https://via.placeholder.com/1200x800', small_info: '6 Seasons', info: 'This 7women isnt real, She is the assassin but no one believes in her...'},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNextImage();
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [currentIndex]); 

  const setNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
  };

  return (
    <div className="gallery-container">
      <AwesomeSlider selected={currentIndex}>
        {featuredItems.map(item => (
          <div className="gallery-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <div className='overlay-data'>
                <h1 className='title'>{item.title}</h1>
                <h3 className='small-info'>{item.small_info}</h3>
                <h3 className='info'>{item.info}</h3>
                <button className='check-button'>Check out</button>
              </div>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Gallery;

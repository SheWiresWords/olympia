import {useState, useEffect} from 'react';
import './App.css';

const gods = [
  {id: 21, name: 'Zeus', title: 'King of the Gods', description: 'God of the sky, lightning, and thunder. Ruler of Mount Olympus and king of all gods.' },
  {id: 20, name: 'Hera', title: 'Queen of the Gods', description: 'Goddess of marriage, women, and family. Wife and sister of Zeus.' },
  {id: 24, name: 'Poseidon', title: 'God of the Sea', description: 'God of the sea, earthquakes, and horses. Brother of Zeus.' },
  {id: 23, name: 'Demeter', title: 'Goddess of Harvest', description: 'Goddess of agriculture, harvest, and the fertility of the earth.' },
  {id: 22, name: 'Athena', title: 'Goddess of Wisdom', description: 'Goddess of wisdom, warfare, and handicrafts. Born from Zeus\'s forehead.' },
  {id: 25, name: 'Apollo', title: 'God of the Sun', description: 'God of music, poetry, light, prophecy, and medicine. Twin of Artemis.' },
  {id: 18, name: 'Artemis', title: 'Goddess of the Hunt', description: 'Goddess of the hunt, wilderness, and the moon. Twin of Apollo.' },
  {id: 14, name: 'Ares', title: 'God of War', description: 'God of war, violence, and bloodshed. Son of Zeus and Hera.' },
  {id: 16, name: 'Aphrodite', title: 'Goddess of Love', description: 'Goddess of love, beauty, and desire. Born from sea foam.' },
  {id: 27, name: 'Hephaestus', title: 'God of Fire', description: 'God of fire, metalworking, and crafts. Husband of Aphrodite.' },
  {id: 13, name: 'Hermes', title: 'Messenger of Gods', description: 'God of trade, thieves, travelers, and messenger of the gods.' },
  {id: 15, name: 'Dionysus', title: 'God of Wine', description: 'God of wine, festivity, and theater. Loves to throw parties.' },
  {id: 26, name: 'Hades', title: 'God of the Underworld', description: 'God of death, minerals, and the underworld. Rules over Elysium, Asphodel, and Tartarus.' },
  {id: 19, name: 'Cupid', title: 'God of Love', description: 'Son of Aphrodite and Ares. Can shoot people with arrows to make them fall in love.' },
  {id: 17, name: 'Hestia', title: 'Goddess of the Hearth', description: 'Tends to the fire on Mount Olympus. Sister of Zeus.' }   
];  

//decos for future edits 
const decorations = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
function App(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() =>{
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const nextGod = () =>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gods.length);
  };

  const prevGod = () =>{
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gods.length) % gods.length);
  };

  const currentGod = gods[currentIndex];

  if(showIntro){
    return (
      <div className="intro-container">
        <div className="title-section">
          <h1 className="intro-title">Mount Olympus</h1>
          <p className="intro-subtitle">House of the Gods</p>
          <img src="/olympia/1.svg" alt="Mount Olympus" className="intro-image" onClick={() => setShowIntro(false)}/>
          <button className="enter-button" onClick={() => setShowIntro(false)}>
            Enter the House of the Gods
          </button>
        </div>
      </div>
    );
  }

  /*Some decos are currently hidden, work in progress */
  return(
    <div className="olympus-container throne-room">
      {/*decorations*/}
      <div className="throne-room-decorations">
        {/*left wall HIDDEN*/}
        <img src="/olympia/3.svg" alt="" className="decoration wall-left-mid" />
        <img src="/olympia/4.svg" alt="" className="decoration wall-left-bottom" />

        {/*right wallHIDDEN*/}
        <img src="/olympia/5.svg" alt="" className="decoration wall-right-top" />
        <img src="/olympia/6.svg" alt="" className="decoration wall-right-mid" />
        <img src="/olympia/7.svg" alt="" className="decoration wall-right-bottom" />

        {/*ceiling HIDDEN*/}
        <img src="/olympia/8.svg" alt="" className="decoration ceiling-left" />

        {/*side columns*/}
        <img src="/olympia/9.svg" alt="" className="decoration side-left" />
        <img src="/olympia/9.svg" alt="" className="decoration side-right" />


        {/*floor HIDDEN*/}
        <img src="/olympia/12.svg" alt="" className="decoration floor-right" />
      </div>

      {/*carousel */}
      <div className="carousel-section">
        <h1 className="title">Welcome to Olympus</h1>
        <p className="subtitle">House of the Gods</p>

        <div className="carousel">
          <button className="carousel-arrow left" onClick={prevGod} aria-label="Previous god" 
style={{marginRight: '2rem'}}>
            ↞
          </button>

          <div className="god-display">
            {/*god characer */}
            <div className="god-figure">
              <img
                src={`/olympia/${currentGod.id}.svg`}
                alt={currentGod.name}
                className="god-image"
              />
            </div>

            {/*pedestal */}
            <div className="pedestal">
              <img
                src="/olympia/11.svg"
                alt="pedestal"
                className="pedestal-image"
              />
            </div>
          </div>  

           <button className="carousel-arrow right" onClick={nextGod} aria-label="Next god"
style={{marginLeft: '2rem'}}>
            ↠ 
          </button>
        </div>

        {/*card info*/}
        <div className="god-info">
          <h2 className="god-name">{currentGod.name}</h2>
          <h3 className="god-title">{currentGod.title}</h3>
          <p className="god-description">{currentGod.description}</p>
          <div className="god-counter">
            {currentIndex + 1} / {gods.length}
          </div>
        </div>   
      </div>     
    </div>   
  );    
}
       
export default App;            

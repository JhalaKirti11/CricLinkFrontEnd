// import './homePage.css';
// //     width: 98.6vw;
// export default function About() {
//     return <>
//         <div id="AboutContainer">
//             <div className='text-center text-decoration-underline'><h2>ABOUT US</h2></div>
//             <div className='mt-4' id="maintext">
//                 <div id="imgDiv" className='position-relative'>
//                     {/* <img src="assets/cricket.webp" id="aboutImg" /> */}
//                     {/* <img src="https://media.istockphoto.com/id/518022060/photo/cricket-batsman-hitting-ball-during-cricket-match-in-stadium.webp?b=1&s=170667a&w=0&k=20&c=qsbdTpZ2wcOJwcdNXPeErUzS-1QKZuunuv3GGgP6dKA=" alt='About image' className='img-fluid' id="aboutImg" /> */}
//                     <div id="textDiv" className='text-center p-3 rounded'>
//                         <h3 id="h3">Cricket Platform</h3>
//                         <div id="text" className='rounded p-3'>
//                             <p id="p">
//                                 In this platform, we provide an interface connecting users with event organizers. It's the ideal platform for registering events and participating in them. Our application offers an easy way to create teams and take part in cricket tournaments.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
// }



import React from 'react';
import './AboutUs.css'; // Make sure to create a CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Title */}
      <h1 className="about-title">About Us</h1>
      
      {/* Image */}
      <div className="image-container">
        <img src="https://spin.axiomthemes.com/wp-content/uploads/2023/09/post1-copyright-1536x1178.jpg" alt="Cricket Image" className="about-image"/>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        <div className="card col-md-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR840DMN34o0a-a510ILn0AV88TzZASoOXRCA&s" alt="Card Image 1" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">History of Cricket</h3>
            <p className="card-description">
              Cricket is a bat-and-ball game played between two teams of eleven players each. It is one of the most popular sports worldwide...
            </p>
          </div>
        </div>

        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwr0H12gGXUjANhVcVG0ZS_twauyyNudXaA&s" alt="Card Image 2" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Equipment</h3>
            <p className="card-description">
              Cricket requires a bat, ball, stumps, and protective gear. The bat is used to hit the ball while the stumps are used to dismiss a batter...
            </p>
          </div>
        </div>

        <div className="card">
          <img src="https://www.sportsboom.com/_next/image?url=https%3A%2F%2Fassets.sportsboom.com%2FGetty_Images_1247348876_807c2f9fcb.jpg&w=3840&q=75" alt="Card Image 3" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Legends</h3>
            <p className="card-description">
              Cricket has seen many legendary players such as Sachin Tendulkar, Ricky Ponting, and Brian Lara, who have left a lasting impact on the game...
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://image.api.playstation.com/vulcan/ap/rnd/202309/2212/d0746e543cf6cde4f6972d64b9b78f38d066587ee4d91e3a.png" alt="Card Image 2" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Equipment</h3>
            <p className="card-description">
              Cricket requires a bat, ball, stumps, and protective gear. The bat is used to hit the ball while the stumps are used to dismiss a batter...
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVg6Yc8G7WuhTsI1g1PIPP1RKpYETPQILExA&s" alt="Card Image 2" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Equipment</h3>
            <p className="card-description">
              Cricket requires a bat, ball, stumps, and protective gear. The bat is used to hit the ball while the stumps are used to dismiss a batter...
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPvfI3fp4dDiBugpKXRLxVDgscXYRwf5tCA&s" alt="Card Image 2" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Equipment</h3>
            <p className="card-description">
              Cricket requires a bat, ball, stumps, and protective gear. The bat is used to hit the ball while the stumps are used to dismiss a batter...
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmV4L8yKzPEGINrakNLZ3XUVCiTTaqXWT4A&s" alt="Card Image 2" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Equipment</h3>
            <p className="card-description">
              Cricket requires a bat, ball, stumps, and protective gear. The bat is used to hit the ball while the stumps are used to dismiss a batter...
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/1/young-boys-playing-cricket-with-tennis-ball-at-mumbai-grounds-snehal-pailkar.jpg?&targetx=-39&targety=0&imagewidth=579&imageheight=700&modelwidth=500&modelheight=700&backgroundcolor=9D9E9B&orientation=1" alt="Card Image 2" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Equipment</h3>
            <p className="card-description">
              Cricket requires a bat, ball, stumps, and protective gear. The bat is used to hit the ball while the stumps are used to dismiss a batter...
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK44xaowhC6JNg9h0B9xgQ7e7eZ7lHH05Lw&s" alt="Card Image 2" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Equipment</h3>
            <p className="card-description">
              Cricket requires a bat, ball, stumps, and protective gear. The bat is used to hit the ball while the stumps are used to dismiss a batter...
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gLoQu3zSrZCeFhWEBonwKpglGwkNjQAZjw&s" alt="Card Image 2" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Equipment</h3>
            <p className="card-description">
              Cricket requires a bat, ball, stumps, and protective gear. The bat is used to hit the ball while the stumps are used to dismiss a batter...
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YErla8lau-n5lWAApAP2RwsH_P0NQQZ7cw&s" alt="Card Image 2" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Equipment</h3>
            <p className="card-description">
              Cricket requires a bat, ball, stumps, and protective gear. The bat is used to hit the ball while the stumps are used to dismiss a batter...
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwF4v8rDb1veX_K5d-RgDzQfJ6ulFrYP0reQ&s" alt="Card Image 2" className="card-image"/>
          <div className="card-content">
            <h3 className="card-title">Cricket Equipment</h3>
            <p className="card-description">
              Cricket requires a bat, ball, stumps, and protective gear. The bat is used to hit the ball while the stumps are used to dismiss a batter...
            </p>
          </div>
        </div>
        
//////////////////////
        <div className="map-container">
        <h2>Our Location</h2>
        <iframe 
          width="1700px" 
          height="700" 
          src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_URL" 
          title="Google Maps"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
      //////////////////////////
      <div className="video-container">
        <h2>Watch Our Story</h2>
        <iframe 
          width="1700px" 
          height="200px" 
          src="https://www.youtube.com/watch?v=p3vGo8qhUgM" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
//////////
<div className="ending-section">
        <h2 className="ending-title">Thank You for Visiting!</h2>
        <p className="ending-description">
          We hope you enjoyed learning about cricket. Stay tuned for more exciting updates and news from the world of cricket.
        </p>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
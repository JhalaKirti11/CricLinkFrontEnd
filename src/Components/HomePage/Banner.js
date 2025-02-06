import { useEffect, useState } from 'react';
import './homePage.css'; // Ensure the CSS file is properly linked

export default function NewBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Define slider items
    const sliderItems = [
        {
            imgSrc: "https://img.freepik.com/premium-photo/cricket-match-action-shot-stadium-night-generative-ai_742418-6165.jpg?w=740",
            author: "CODE ELITERS",
            title: "FIELD OF DREAMS",
            topic: "GLORY",
            description: "Under the lights, heroes rise, and history is written...",
        },
        {
            imgSrc: "https://spin.axiomthemes.com/wp-content/uploads/2023/09/post6-copyright.jpg",
            author: "CODE ELITERS",
            title: "STREET CHAMPIONS",
            topic: "GULLY CRICKET",
            description: "The passion for cricket starts in the streets, but it never ends there.",
        },
        {
            imgSrc: "https://spin.axiomthemes.com/wp-content/uploads/2023/09/post1-copyright-1536x1178.jpg",
            author: "CODE ELITERS",
            title: "THE FINAL SHOWDOWN",
            topic: "THE GLORY",
            description: "It's not just a game; it's a battle of determination and skill.",
        },
        // {
        //     imgSrc: "https://spin.axiomthemes.com/wp-content/uploads/2023/09/post3-copyright.jpg",
        //     author: "CODE ELITERS",
        //     title: "POWER PLAY",
        //     topic: "GAME ON",
        //     description: "The thrill of every run, every wicket, and every boundary!",
        // }
    ];

    // Function to handle next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    // Function to handle previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
    };

    // Effect for automatic sliding
    useEffect(() => {
        const autoSlideInterval = setInterval(nextSlide, 5000);

        // Clear interval on component unmount
        return () => clearInterval(autoSlideInterval);
    }, []);

    // Handle click on pagination dots to update slide
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="new-carousel" style={{height:"900px"}}>
            <div className="slider">
                {sliderItems.map((item, index) => (
                    <div
                        key={index}
                        className={index === currentIndex ? "slide active" : "slide"}
                        style={{ backgroundImage: `url(${item.imgSrc})` }}
                    >
                        <div className="overlay"></div>
                        <div className="content">
                            <h5 className="author">{item.author}</h5>
                            <h2 className="title">{item.title}</h2>
                            <h4 className="topic">{item.topic}</h4>
                            <p className="description" style={{color:"white"}}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrows for navigation */}
            <div className="nav-arrows">
                <button className="arrow prev" onClick={prevSlide}>&#10094;</button>
                <button className="arrow next" onClick={nextSlide}>&#10095;</button>
            </div>

            {/* Pagination dots */}
            <div className="pagination-dots">
                {sliderItems.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? "dot active" : "dot"}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

//====================================================================================

// import { useEffect, useState } from 'react';
// import './homePage.css';

// export default function Banner() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const sliderItems = [
//         {
//             gifSrc: "/assets/highlights/cricketBanner.gif", // First item as GIF
//             author: "CODE_ELITES",
//             title: "STREET CRICKET",
//             topic: "TITANS",
//             description: "Your passion decides the player, your effort decides the champion....",
//         },
//         // {
//         //     imgSrc: "/assets/svg/banner.png", // Second item as image
//         //     author: "CODE_ELITES",
//         //     title: "STREET CRICKET",
//         //     topic: "TITANS",
//         //     description: "Cricket is not just a game, it's an emotion!",
//         // },
//         // {
//         //     imgSrc: "/assets/svg/third-image.jpg", // Third item as image
//         //     author: "CODE_ELITES",
//         //     title: "STREET CRICKET",
//         //     topic: "TITANS",
//         //     description: "A champion is defined by the passion within.",
//         // }
//     ];

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
//     };
//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
//     };

//     useEffect(() => {
//         // Auto slide change every 7 seconds
//         const autoSlideInterval = setInterval(nextSlide, 7000);
//         return () => clearInterval(autoSlideInterval);
//     }, []);

//     return (
//         <div className="carousel">
//             <div className="list">
//                 {sliderItems.map((item, index) => (
//                     <div className={index === currentIndex ? "item active" : "item"} key={index}>
//                         {/* Show GIF only on the first slide */}
//                         {index === 0 ? (
//                             <img
//                                 src={item.gifSrc}
//                                 alt={`Slide ${index}`}
//                                 style={{ width: '100%', height: 'auto' }} // Control size of GIF
//                             />
//                         ) : (
//                             <img src={item.imgSrc} alt={`Slide ${index}`} />
//                         )}
//                         <div className="content">
//                             <div className="author fs-6">{item.author}</div>
//                             <div className="title">{item.title}</div>
//                             <div className="topic">{item.topic}</div>
//                             <div className="des fs-4">{item.description}</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="arrows">
//                 <button id="prev" onClick={prevSlide}>&#8592;</button>
//                 <button id="next" onClick={nextSlide}>&#8594;</button>
//             </div>
//         </div>
//     );
// }
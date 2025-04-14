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
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
    };

    useEffect(() => {
        const autoSlideInterval = setInterval(nextSlide, 5000);

        return () => clearInterval(autoSlideInterval);
    }, []);

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
            <div className="nav-arrows">
                <button className="arrow prev" onClick={prevSlide}>&#10094;</button>
                <button className="arrow next" onClick={nextSlide}>&#10095;</button>
            </div>
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

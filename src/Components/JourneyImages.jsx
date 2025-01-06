import { useState, useEffect, useCallback } from "react";
import ImageFrame from "./ImageFrame";

const images = import.meta.glob('../assets/img/journey/*.jpeg', { eager: true });
const allJourneyImages = Object.values(images).map((module) => module.default);

const JourneyImages = () => {
    const [visibleImages, setVisibleImages] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 10; // Number of images to load per scroll

    // Load images based on the current page
    const loadImages = useCallback(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setVisibleImages((prev) => [...prev, ...allJourneyImages.slice(startIndex, endIndex)]);
    }, [page]);

    // Handle scroll event to detect when to load more images
    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 // Adjust threshold as needed
        ) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        loadImages();
    }, [page, loadImages]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
            {visibleImages.map((src, index) => (
                <ImageFrame key={index}>
                    <img
                        src={src}
                        alt={`Journey ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                    />
                </ImageFrame>
            ))}
        </div>
    );
};

export default JourneyImages;

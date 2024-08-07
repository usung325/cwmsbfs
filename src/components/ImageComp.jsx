import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion"

const InfiniteCanvas = ({ images = [] }) => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 400, y: 100 });
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseDown = (e) => {
        if (e.target.tagName.toLowerCase() === 'img') return;
        setIsDragging(true);
        setStartPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const newOffset = {
            x: e.clientX - startPosition.x,
            y: e.clientY - startPosition.y
        };
        setOffset(newOffset);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const container = containerRef.current;
        container.style.cursor = isDragging ? 'grabbing' : 'grab';
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="w-full h-screen overflow-hidden relative"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div

                className="absolute"
                style={{
                    transform: `translate(${offset.x}px, ${offset.y}px)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
            >
                {images.map((img, index) => (
                    <motion.div
                        whileHover={{ scale: 1.5 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        key={index}
                        className="absolute"
                        style={{
                            left: img.x,
                            top: img.y,
                            width: img.width,
                            height: img.height
                        }}
                        onMouseEnter={() => setHoveredImage(img)}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <a
                            href={img.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                if (isDragging) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt || `Image ${index}`}
                                className="w-full h-full object-cover"
                            />
                        </a>
                        {hoveredImage === img && img.description && (
                            <div className="absolute bottom-0 left-7 right-0 top-4 text-white p-2 text-sm  w-[300px]">
                                <p className="hitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                    {img.description}
                                </p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div >
    );
};

export default InfiniteCanvas;
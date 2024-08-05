import React, { useState, useRef, useEffect } from 'react';

const InfiniteCanvas = ({ images = [] }) => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 400, y: 100 });

    const handleMouseDown = (e) => {
        if (e.target.tagName.toLowerCase() === 'img') return; // Don't start dragging if clicking on an image
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
                    <a
                        key={index}
                        href={img.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute"
                        style={{
                            left: img.x,
                            top: img.y,
                            width: img.width,
                            height: img.height
                        }}
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
                ))}
            </div>
        </div>
    );
};

export default InfiniteCanvas;
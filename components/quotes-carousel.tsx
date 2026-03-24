'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './quotes-carousel.module.css';

interface Quote {
    text: string;
    author: string;
    image: string;
}

interface QuotesCarouselProps {
    quotes: Quote[];
}

export default function QuotesCarousel({ quotes }: QuotesCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let scrollInterval: NodeJS.Timeout;
        let isPaused = false;

        const startScroll = () => {
            scrollInterval = setInterval(() => {
                if (!isPaused && container) {
                    const scrollHeight = container.scrollHeight;
                    const clientHeight = container.clientHeight;
                    const currentScroll = container.scrollTop;

                    // Each quote is approximately 296px (230px height + 66px gap)
                    const quoteHeight = 296;

                    // Scroll to next position
                    if (currentScroll + clientHeight >= scrollHeight - 10) {
                        // Reset to top when reaching the end
                        container.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        // Scroll down by one quote height
                        container.scrollBy({ top: quoteHeight, behavior: 'smooth' });
                    }
                }
            }, 1000); // Change every 1 seconds
        };

        startScroll();

        // Pause on hover
        const handleMouseEnter = () => {
            isPaused = true;
        };

        const handleMouseLeave = () => {
            isPaused = false;
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearInterval(scrollInterval);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className={styles.quotesWrapper} ref={scrollContainerRef}>
            {quotes.map((quote, index) => (
                <div key={index} className={styles.quoteItem}>
                    <div className={styles.quoteText}>{quote.text}</div>
                    <div className={styles.byline}>
                        <Image
                            className={styles.imageIcon}
                            width={46.1}
                            height={48}
                            sizes="100vw"
                            alt=""
                            src={"/profile.png"}
                        />
                        <div className={styles.author}>{quote.author}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

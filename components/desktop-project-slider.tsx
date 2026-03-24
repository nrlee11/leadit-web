'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './desktop-project-slider.module.css';

interface ProjectCard {
    category: string;
    title: string;
    date: string;
    description: string;
    image: string;
}

interface DesktopProjectSliderProps {
    projects: ProjectCard[];
}

export default function DesktopProjectSlider({ projects }: DesktopProjectSliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerPage = 4;
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    // 슬라이드 이동
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            sliderRef.current.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth'
            });
        }
    };

    // 이전 슬라이드
    const goToPrev = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : totalPages - 1;
        goToSlide(newIndex);
    };

    // 다음 슬라이드
    const goToNext = () => {
        const newIndex = currentIndex < totalPages - 1 ? currentIndex + 1 : 0;
        goToSlide(newIndex);
    };

    return (
        <div className={styles.sliderContainer}>
            {/* 이전 버튼 */}
            <button
                className={`${styles.navButton} ${styles.navButtonPrev}`}
                onClick={goToPrev}
                aria-label="Previous slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* 다음 버튼 */}
            <button
                className={`${styles.navButton} ${styles.navButtonNext}`}
                onClick={goToNext}
                aria-label="Next slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div ref={sliderRef} className={styles.slider}>
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className={styles.page}>
                        {projects
                            .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                            .map((project, index) => (
                                <div key={index} className={styles.card}>
                                    <Image
                                        className={styles.cardImage}
                                        width={322}
                                        height={192.6}
                                        sizes="100vw"
                                        alt={project.title}
                                        src={project.image}
                                    />
                                    <div className={styles.cardContent}>
                                        <div className={styles.category}>{project.category}</div>
                                        <div className={styles.title}>{project.title}</div>
                                        <div className={styles.date}>{project.date}</div>
                                        <div className={styles.description}>{project.description}</div>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </div>

            {/* 프로그레스 바 */}
            {/* <div className={styles.progressContainer}>
                <div className={styles.progressTrack}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${((currentIndex + 1) / totalPages) * 100}%` }}
                    />
                </div>
            </div> */}

            {/* 인디케이터 */}
            <div className={styles.indicators}>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

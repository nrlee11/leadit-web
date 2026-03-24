'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './project-slider.module.css';

interface ProjectCard {
  category: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

interface ProjectSliderProps {
  projects: ProjectCard[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // 화면 크기에 따라 한 번에 보여줄 카드 수 결정
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width > 1024) return 3; // 데스크탑
    if (width > 480 && width <= 1024) return 2; // 태블릿
    return 1; // 모바일
  };

  // 화면 크기 변경 감지
  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(getCardsPerView());
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // 터치/마우스 드래그 시작
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  // 터치/마우스 드래그 중
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // 터치/마우스 드래그 종료
  const handleDragEnd = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / cardsPerView;
      const gap = 20; // CSS gap value
      const scrollPosition = sliderRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / (cardWidth + gap));
      setCurrentIndex(newIndex);
      sliderRef.current.scrollTo({
        left: newIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  // 슬라이드 이동
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / cardsPerView;
      const gap = 20; // CSS gap value
      sliderRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  // 이전 슬라이드
  const goToPrev = () => {
    const maxIndex = Math.ceil(projects.length / cardsPerView) - 1;
    const newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    goToSlide(newIndex);
  };

  // 다음 슬라이드
  const goToNext = () => {
    const maxIndex = Math.ceil(projects.length / cardsPerView) - 1;
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
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

      <div
        ref={sliderRef}
        className={styles.slider}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {projects.map((project, index) => (
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

      {/* 인디케이터 */}
      <div className={styles.indicators}>
        {Array.from({ length: Math.ceil(projects.length / cardsPerView) }).map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

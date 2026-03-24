'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css"; // CSS 모듈 가져오기

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={styles.nav}>
                <Link href="/" className="logo_wrap">
                    <Image
                        className={styles.image16Icon}
                        alt="LEADIT Logo"
                        src="/leadit-web/logo.png"
                        width={157}
                        height={35}
                    />
                </Link>
                <div className={styles.navLabels}>
                    <Link href="/services" className={styles.connectWithOur}>회사소개</Link>
                    <Link href="/projects" className={styles.connectWithOur}>프로젝트</Link>
                    <Link href="/solutions" className={styles.connectWithOur}>솔루션</Link>
                    <Link href="/careers" className={styles.connectWithOur}>채용 / 문의</Link>
                </div>
                <Image
                    className={styles.navButton}
                    width={28}
                    height={28}
                    alt="메뉴버튼"
                    src="/leadit-web/menu.png"
                    onClick={toggleMenu}
                />
            </header>

            {/* Side Navigation & Dimmer */}
            <div className={`${styles.side_dim} ${isMenuOpen ? styles.active : ''}`} onClick={closeMenu}></div>
            <div className={`${styles.side_nav} ${isMenuOpen ? styles.active : ''}`}>
                <div className={styles.closeBtnWrapper}>
                    <Image
                        src="/leadit-web/close.png"
                        alt="닫기"
                        width={24}
                        height={24}
                        className={styles.closeBtn}
                        onClick={closeMenu}
                    />
                </div>
                <div className={styles.side_nav_links}>
                    <Link href="/services" className={styles.side_link} onClick={closeMenu}>회사소개</Link>
                    <Link href="/projects" className={styles.side_link} onClick={closeMenu}>프로젝트</Link>
                    <Link href="/solutions" className={styles.side_link} onClick={closeMenu}>솔루션</Link>
                    <Link href="/careers" className={styles.side_link} onClick={closeMenu}>채용 / 문의</Link>
                </div>
            </div>
        </>
    )
}
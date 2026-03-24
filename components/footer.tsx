import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css"; // CSS 모듈 가져오기
export default function Footer() {
    return (
        <footer className={styles.footer2}>
            <div className={styles.leftColumn}>

                <div className="logo_wrap">
                    <Link href="/">
                        <Image
                            className={styles.image16Icon}
                            alt="LEADIT Logo"
                            src="/logo.png"
                            width={157}
                            height={35}
                        />
                    </Link>
                </div>

                <div className={styles.managingMyTaxes}>
                    <span>주식회사 리드정보기술 | 대표이사 : 조병직 | 대표번호 : 02-761-3871<br /></span>
                    <span>
                        주소 : 서울특별시 영등포구 당산로 41길 11 SK V1 Center E동 1312호 | 대표이메일 : leadit@leadit.co.kr
                    </span>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.labels13}>
                    <div className={styles.content12}>
                        <Link href="/services" className={styles.div6}>회사소개</Link>
                        <Link href="/projects" className={styles.div6}>프로젝트</Link>
                        <Link href="/solutions" className={styles.div6}>솔루션</Link>
                        <Link href="/careers" className={styles.div6}>채용/문의</Link>
                        <Link href="/lead_it.pdf" className={styles.buttonWhite5} target="_blank" rel="noopener noreferrer">
                            <div className={styles.div6}>회사 소개서</div>
                        </Link>
                        <div className={styles.allRightsReserved}>
                            © 2025 LeadIT All Rights Reserved
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
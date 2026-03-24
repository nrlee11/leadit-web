import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Enquiry from "@/components/enquiry";
import QuotesCarousel from "@/components/quotes-carousel";
export default function Home() {
    return (
        <div className={styles.desktop}>
            <Header />
            <div className={styles.main}>
                <div className={styles.heroSection}>
                    <div className={styles.content}>
                        <div className={styles.block}>
                            <div className={styles.text}>
                                <div className={styles.heroTitle}><span style={{ color: "var(--color-primary6)" }}>L</span>  ONG-LASTING<br /><span style={{ color: "var(--color-primary6)" }}>E</span>  FFICIENT<br /><span style={{ color: "var(--color-primary6)" }}>A</span>  GREEABLE<br /><span style={{ color: "var(--color-primary6)" }}>D</span>  ISTINCTIVE<br /><span style={{ color: "var(--color-primary6)" }}>IT</span>  SERVICES</div>
                                <p className={styles.heroDescription}>리드정보기술은 1998년 창립이래 공공기관 대규모 SI사업 단독구축 경험이 풍부한 강소기업입니다.<br />언제나 고객에게 가장 필요한 서비스를 효율적으로 제공하겠습니다.</p>
                            </div>
                            <Link href="/services">
                                <div className={styles.largeButton3}>
                                    <div className={styles.connectWithOur}>회사소개 바로가기</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.servicesSection}>
                    <div className={styles.introSection}>
                        <div className={styles.content2}>
                            <div className={styles.introTitle}>LEAD IT</div>
                            <h2 className={styles.introSubtitle}>고객의 성공이<br />우리의 기술 입니다.</h2>
                            <div className={styles.introDescription}>리드정보기술은 맞춤형 솔루션과 전략으로<br />고객의 비즈니스 목표에 맞는 기술과 서비스를 제공합니다.</div>
                            <Link href="/solutions">
                                <div className={styles.largeButton4}>
                                    <div className={styles.connectWithOur}>솔루션 바로가기</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.section1}>
                        <div className={styles.card}>
                            <Image className={styles.cardImageIcon} width={214} height={230} sizes="100vw" alt="" src="/icon_bizman.png" />
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.cardTitle}>통합인사관리 프로그램</div>
                                    <div className={styles.cardSubtitle}>비즈맨 Biz-Man</div>
                                    <div className={styles.heroDescription}>효율적인 전자결재 시스템으로 사내업무 및 사원관리를 간편하게</div>
                                </div>
                                <div className={styles.labels}>
                                    <div className={styles.labels2}>
                                        <div className={styles.taxes}># 전자결재 시스템</div>
                                    </div>
                                    <div className={styles.labels2}>
                                        <div className={styles.taxes}># 다양한 문서관리 지원</div>
                                    </div>
                                    <div className={styles.labels2}>
                                        <div className={styles.taxes}># 인터넷 환경</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.section2}>
                        <div className={styles.card2}>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.cardTitle}>수강관리 프로그램</div>
                                    <div className={styles.cardSubtitle}>비즈LMS Biz-LMS</div>
                                    <div className={styles.heroDescription}>효율적인 수강관리 시스템으로 수강, 인강, 강의를 간편하게</div>
                                </div>
                                <div className={styles.labels}>
                                    <div className={styles.labels2}>
                                        <div className={styles.taxes}># 수강관리 시스템</div>
                                    </div>
                                    <div className={styles.labels2}>
                                        <div className={styles.taxes}># 수강, 인강, 강의</div>
                                    </div>
                                    <div className={styles.labels2}>
                                        <div className={styles.taxes}># 인터넷 환경</div>
                                    </div>
                                </div>
                            </div>
                            <Image className={styles.cardImageIcon2} width={235} height={232} sizes="100vw" alt="" src="/icon_bizlms.png" />
                        </div>
                    </div>
                    <div className={styles.section3}>
                        <div className={styles.card3}>
                            <Image className={styles.cardImageIcon3} width={243} height={209} sizes="100vw" alt="" src="/icon_bizsupport.png" />
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.cardTitle}>후원관리 프로그램</div>
                                    <div className={styles.cardSubtitle}>비즈서포트 Biz-Support</div>
                                    <div className={styles.heroDescription}>체계적인 후원정보관리 시스템으로 후원자 정보 관리를 간편하게</div>
                                </div>
                                <div className={styles.labels}>
                                    <div className={styles.labels2}>
                                        <div className={styles.taxes}># 후원자 정보관리</div>
                                    </div>
                                    <div className={styles.labels2}>
                                        <div className={styles.taxes}># 각종 통계, 게시물 관리</div>
                                    </div>
                                    <div className={styles.labels2}>
                                        <div className={styles.taxes}># 콜센터 관리</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.benefitsSection}>
                    <div className={styles.content6}>
                        <div className={styles.header}>
                            <h2 className={styles.secTitle}>비즈니스 혁신의 시작,<br /><span style={{ color: "var(--color-secondary-darkpurple)" }} > 리드정보기술</span> 에서</h2>
                            <div className={styles.benefitsDescription}>1998년 설립 이후 22년간의 기술을 바탕으로 시스템 컨설팅 및 개발, 유지 보수 서비스 사업 등을 수행하고 있습니다.
                                <br />기술혁신형 중소기업 인증과 기업부설연구소를 설립하였으며 청년 친화 강소기업 인증을 통해 발전된 미래로 나아가고 있습니다.</div>
                        </div>
                        <div className={styles.ctaSection}>
                            <div className={styles.card4}>
                                <div className={styles.content7}>
                                    <div className={styles.benefitTitle}>소프트웨어 개발</div>
                                    <Link href="/projects">
                                        <div className={styles.buttonWhite}>
                                            <div className={styles.taxes}>Learn More</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.card5}>
                                <div className={styles.content8}>
                                    <div className={styles.benefitTitle}>시스템 통합 및 컨설팅</div>
                                    <Link href="/projects">
                                        <div className={styles.buttonWhite}>
                                            <div className={styles.taxes}>Learn More</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.card6}>
                                <div className={styles.content9}>
                                    <div className={styles.benefitTitle}>하드웨어 공급</div>
                                    <Link href="/projects">
                                        <div className={styles.buttonWhite}>
                                            <div className={styles.taxes}>Learn More</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.card7}>
                                <div className={styles.content10}>
                                    <div className={styles.benefitTitle}>통합 유지 보수 서비스</div>
                                    <Link href="/projects">
                                        <div className={styles.buttonWhite}>
                                            <div className={styles.taxes}>Learn More</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.expertsSection}>
                    <div className={styles.carouselDesktopTablet}>
                        <h2 className={styles.secTitle}>고객과 함께한 성공 스토리</h2>
                        <QuotesCarousel quotes={[
                            {
                                text: '"업무 효율이 눈에 띄게 향상되었습니다."\n 기성 제품으로는 해결하기 어려운 부분이 많았는데, 고객의 요구사항을 세세히 반영한 맞춤형 솔루션을 제안해 주셔서 만족도가 매우 높습니다. 덕분에 현장 업무가 훨씬 단순해졌고, 유지보수도 신속하게 대응해 주십니다.',
                                author: 'B물류(주) IT팀 박00 차장',
                                image: '/placeholder.svg'
                            },
                            {
                                text: '"프로젝트 관리 능력이 탁월합니다."\n 여러 시스템이 분산되어 있었는데, 통합 SI 사업을 통해 전사 시스템이 하나로 연결되었습니다. 프로젝트 일정 관리와 커뮤니케이션이 체계적으로 진행되어 안정적인 오픈을 할 수 있었습니다.',
                                author: 'C공공기관 전산담당 이00 주무관',
                                image: '/placeholder.svg'
                            },
                            {
                                text: '"기술력과 신뢰성을 모두 갖춘 파트너입니다."\n 복잡한 요구사항도 명확하게 이해하고 최적의 솔루션을 제시해 주셨습니다. 프로젝트 진행 중에도 지속적인 커뮤니케이션으로 우려사항을 빠르게 해결해 주셨습니다.',
                                author: 'D기업 시스템관리팀 김00 과장',
                                image: '/placeholder.svg'
                            },
                            {
                                text: '"맞춤형 솔루션으로 업무 프로세스가 개선되었습니다."\n 우리 조직의 특성을 정확히 파악하고 그에 맞는 시스템을 구축해 주셨습니다. 도입 후 업무 효율성이 크게 향상되었고, 직원들의 만족도도 높습니다.',
                                author: 'E재단 정보화담당 최00 팀장',
                                image: '/placeholder.svg'
                            }
                        ]} />
                    </div>
                </div>
                <Enquiry />
                <Footer />
            </div>
        </div >);
};

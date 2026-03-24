import type { NextPage } from 'next';
import Image from "next/image";
import styles from './page.module.css';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Enquiry from "@/components/enquiry";
import ProjectSlider from "@/components/project-slider";
import DesktopProjectSlider from "@/components/desktop-project-slider";

const Projects: NextPage = () => {
    const projectCards = [
        {
            category: "소프트웨어 개발",
            title: "한국생산성본부 LMS 시스템",
            date: "2022",
            description: "국내 최대 교육 기관으로서 다양한 교육과정 및 교육방식을 제공하고, 최대 동시 접속자 보장 등을 만족할 수 있도록 개발된 최신 LMS 시스템입니다.",
            image: "/rep_project1.png"
        },
        {
            category: "소프트웨어 개발",
            title: "대한건설기계협회 체납관리시스템",
            date: "2018. 04",
            description: "건설기계 사업자들의 임대료 체납을 원활하게 회수 지원 할 수 있도록 관리하기 위해 만들었으며 모바일도 지원가능한 반응형 웹으로 개발하였습니다.",
            image: "/rep_project2.png"
        },
        {
            category: "소프트웨어 개발",
            title: "대한적십자사 DMS 구축",
            date: "2018",
            description: "노후된 기존의 시스템의 기능을 검토.보완하고 자동이체, 카드결제, 핸드폰결제 등 다양한 결제방법을 사용할 수 있도록 금결원 통신 및 VAN사 연계 기능을 추가하였습니다",
            image: "/rep_project3.png"
        },
        {
            category: "소프트웨어 개발",
            title: "인천세관 내국세 환급시스템",
            date: "2018",
            description: "국내 외국인 관광객 대상 부가세 환급 시스템으로, 2015~2017년 4단계에 걸쳐 구축 후 현재까지 운영·유지보수 중인 시스템입니다.",
            image: "/rep_project4.png"
        },
        {
            category: "통합유지보수",
            title: "경희대학교 (국제캠퍼스)",
            date: "2020 ~ 2025",
            description: "온라인 장애 접수부터 복구까지를 실시간으로 관리하고, 복합장애 데이터를 분석해 향후 장애에 대비하는 시스템입니다.",
            image: "/rep_project7.png"
        },
        {
            category: "인프라 구축",
            title: "포항공과대학교 중앙전산실",
            date: "2018 ~ 2024",
            description: "중앙전산실은 학교업무 및 학사행정 전반에 대한 학사 업무 및 학생지원시스템을 구축, 서비스를 제공하고 있습니다.",
            image: "/rep_project8.png"
        },
        {
            category: "하드웨어 개발",
            title: "아주대학교",
            date: "2022 ~2025",
            description: "아주대학교 스토리지 증설 및 GPU 서버 구축 사업",
            image: "/rep_project9.png"
        },
        {
            category: "통합유지보수",
            title: "경희대학교 전산자원 통합유지보수",
            date: "2018. 04",
            description: "캠퍼스에서 운용되고 있는 모든 소프트웨어 어플리케이션, 하드웨어 인프라를 통합 유지 관리하는 막중한 사업입니다",
            image: "/rep_project10.png"
        },
    ];

    return (
        <div className={styles.desktop}>
            <Header />
            <div className={styles.main}>
                <div className={styles.hero}>
                    <div className={styles.intro}>
                        <div className={styles.representativeProject}>Representative project</div>
                        <div className={styles.div5}>대표 프로젝트</div>
                    </div>
                    <div className={styles.frameParent}>
                        {/* 모바일/태블릿 슬라이더 */}
                        <ProjectSlider projects={projectCards} />

                        {/* 데스크톱 슬라이더 */}
                        <DesktopProjectSlider projects={projectCards} />

                    </div>
                </div>
                <div className={styles.howItWorksSection}>
                    <div className={styles.intro}>
                        <div className={styles.representativeProject}>Company History</div>
                        <div className={styles.div5}>주요 연혁</div>
                    </div>
                    <div className={styles.step13}>
                        <div className={styles.frameParent2}>
                            <Image className={styles.imageIcon3} width={387} height={387} sizes="100vw" alt="" src="/leadit-web/kwwa.png" />
                            <Image className={styles.imageIcon3} width={387} height={387} sizes="100vw" alt="" src="/khuniv.png" />
                        </div>
                        <div className={styles.content4}>
                            <div className={styles.text3}>
                                <div className={styles.parent28}>
                                    <div className={styles.div21}>2025</div>
                                </div>
                                <div className={styles.parent29}>
                                    한국상하수도협회 “국가공인자격 운영〮관리시스템 구축 용역” 수행 중
                                </div>
                                <div className={styles.parent29}>
                                    포항공과대학교 Web Portal 시스템 구축 용역 수주
                                </div>
                                <div className={styles.parent29}>
                                    관세청 인천세관 통합여행자정보시스템 유지관리 위탁사업 수행 중
                                </div>
                                <div className={styles.parent29}>
                                    경희대학교 전산자원 통합운영관리 용역 사업(~2월)
                                </div>
                                <div className={styles.parent29}>
                                    부민병원 검진인프라시스템 구축사업 수주
                                </div>
                                <div className={styles.parent29}>
                                    아주대학교 산학협력단 외 고객사 전산장비 유지보수 수행 중
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.step13}>
                        <div className={styles.content4}>
                            <div className={styles.text4}>
                                <div className={styles.parent28}>
                                    <div className={styles.div21}>2024</div>
                                </div>
                                <div className={styles.parent29}>
                                    한국상하수도협회 “국가공인자격 운영〮관리시스템 구축 용역” 수주(12월)
                                </div>
                                <div className={styles.parent29}>
                                    ISO9001 품질경영시스템 인증
                                </div>
                                <div className={styles.parent29}>
                                    BIZ-LMS, BIZ-MAN, BIZ-SUPPORT 프로그램 저작권 등록
                                </div>
                                <div className={styles.parent29}>
                                    BIZ-LMS 고도화 및 현행화 개발
                                </div>
                                <div className={styles.parent29}>
                                    포항공과대학교 SAP ERP Upgrade 사업추진을 위한 하드웨어 도입 사업
                                </div>
                                <div className={styles.parent29}>
                                    관세청 인천세관 통합여행자정보시스템 유지관리 위탁사업 수행
                                </div>
                                <div className={styles.parent29}>
                                    경희대학교 전산자원 통합운영관리 용역 사업
                                </div>
                            </div>
                        </div>
                        <div className={styles.frameParent2}>

                            <Image className={styles.imageIcon3} width={387} height={387} sizes="100vw" alt="" src="/bizlms.png" />
                            <Image className={styles.imageIcon3} width={387} height={387} sizes="100vw" alt="" src="/incheonairport.png" />
                        </div>
                    </div>
                    <div className={styles.step13}>
                        <div className={styles.frameParent2}>
                            <Image className={styles.imageIcon3} width={387} height={387} sizes="100vw" alt="" src="/kpc.png" />
                            <Image className={styles.imageIcon3} width={387} height={387} sizes="100vw" alt="" src="/ajuuniv.png" />
                        </div>
                        <div className={styles.content4}>
                            <div className={styles.text5}>
                                <div className={styles.parent28}>
                                    <div className={styles.div21}>2022 ~ 2023</div>
                                </div>
                                <div className={styles.parent29}>
                                    한국생산성본부 차세대통합 LMS 시스템 구축사업(3차년도) 수행 완료
                                </div>
                                <div className={styles.parent29}>
                                    관세청 인천세관 통합여행자정보시스템 유지관리 위탁사업 수행
                                </div>
                                <div className={styles.parent29}>
                                    경희대학교 전산자원 통합유지보수 관리 솔루션 구축
                                </div>
                                <div className={styles.parent29}>
                                    경희대학교 전산자원 통합운영관리 용역 사업
                                </div>
                                <div className={styles.parent29}>
                                    포항공과대학교 중앙전산실 차세대 인프라 구축사업 수행
                                </div>
                                <div className={styles.parent29}>
                                    아주대학교 연구용 전산인프라 구축 및 업그레이드 사업
                                </div>
                                <div className={styles.parent29}>
                                    자원순환 보증금관리센터 빈용기 보증금 및 취급수수료 지급관리시스템 유지보수 사업 수
                                    행
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.step13}>
                        <div className={styles.content4}>
                            <div className={styles.text6}>
                                <div className={styles.parent28}>
                                    <div className={styles.div21}>2020 ~ 2021</div>

                                </div>
                                <div className={styles.parent29}>
                                    한국생산성본부 차세대 통합 LMS 시스템 구축사업 수행(1~2차년도)
                                </div>
                                <div className={styles.parent29}>
                                    한국순환자원 유통지원센터 빈 용기 보증금 및 취급수수료 지급관리시스템 유지보수 사업 및 추가개발사업 수행
                                </div>
                                <div className={styles.parent29}>
                                    관세청 인천세관 통합여행자정보시 유지관리 위탁사업
                                </div>
                                <div className={styles.parent29}>
                                    포항공과대학교 전산자원 유지보수 사업 수행
                                </div>
                                <div className={styles.parent29}>
                                    관세청 인천세관 통합여행자정보시스템(TIS) 인프라 증설  사업 수행
                                </div>
                                <div className={styles.parent29}>
                                    경희대학교 전산자원 통합유지보수 사업수행
                                </div>
                                <div className={styles.parent29}>
                                    인천공항시설관리 별정통신,별정빌링 등 기술지원 용역
                                </div>
                                <div className={styles.parent29}>
                                    아주대학교 연구용 전산장비 외 구축사업
                                </div>

                            </div>
                        </div>
                        <div className={styles.frameParent2}>

                            <Image className={styles.imageIcon3} width={387} height={387} sizes="100vw" alt="" src="/postech.png" />
                            <Image className={styles.imageIcon3} width={387} height={387} sizes="100vw" alt="" src="/khuniv2.png" />
                        </div>
                    </div>
                    <div className={styles.step13}>
                        <div className={styles.frameParent2}>

                            <Image className={styles.imageIcon3} width={387} height={387} sizes="100vw" alt="" src="/redcross.png" />
                            <Image className={styles.imageIcon3} width={387} height={387} sizes="100vw" alt="" src="/snu.png" />
                        </div>
                        <div className={styles.content4}>

                            <div className={styles.text7}>
                                <div className={styles.parent28}>
                                    <div className={styles.div21}>2018 ~ 2019</div>
                                </div>
                                <div className={styles.parent29}>
                                    포스텍(포항공과대학교) 전산자원 유지보수 사업수행
                                </div>
                                <div className={styles.parent29}>
                                    경희대학교 전산자원 통합유지보수 사업 수행
                                </div>
                                <div className={styles.parent29}>
                                    대한적십자사 기부관리시스템(DMS) 고도화 용역 사업 수행
                                </div>
                                <div className={styles.parent29}>
                                    인천본부세관(인천공항) 통합여행자정보시스템 및  내국세환급시스템 유지관리 사업 수행
                                </div>
                                <div className={styles.parent29}>
                                    인천본부세관 X-I-PASS 시스템 고도화 구축
                                </div>
                                <div className={styles.parent29}>
                                    관세청 인천세관 내국세환급시스템 구축 4단계 사업 (2015. 1단계 사업부터 ~4단계까지) 수행
                                </div>
                                <div className={styles.parent29}>
                                    서울여자대학교 통합서버, 산학협력단, 교수학습센터 홈페이지 및  서버 유지보수
                                </div>
                                <div className={styles.parent29}>
                                    서울대학교 교육전산망 홈페이지 및 셔틀버스 부문 운영 및 유지보수 사업
                                </div>
                                <div className={styles.parent29}>
                                    해외건설협회 해외건설시장개척 지원사업 사업관리시스템 유지보수 및 개편사업 수행
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Enquiry />
            <Footer />
        </div>);
};

export default Projects;

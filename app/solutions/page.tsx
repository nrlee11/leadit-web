'use client';
import Link from "next/link";
import { useState } from 'react';
import type { NextPage } from 'next';
import Image from "next/image";
import styles from './page.module.css';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Enquiry from '@/components/enquiry';

type SolutionType = 'bizman' | 'bizlms' | 'bizlicense' | 'bizsupport';

const Solutions: NextPage = () => {
    const [activeSolution, setActiveSolution] = useState<SolutionType>('bizman');

    // 솔루션별 데이터
    const solutionData = {
        bizman: {
            title: '비즈맨 BIZ-MAN',
            subtitle: '통합 인사관리 시스템',
            description: '효율적인 전자결재 시스템으로 사내업무 및 사원관리를 간편하게',
            heroImage: '/bizman-bg.png',
            features: [
                {
                    number: '01',
                    title: '빠르고 정확한 전자결재',
                    description: [
                        '구성원의 결제 요청을 시간과 장소에 구애받지 않고 언제 어디서든 태블릿, 피씨, 모바일로 결제처리가 가능',
                        '문서보관과 검색이 용이',
                        '본인이 상신했거나 결재자로 지정된 문서의 도착, 승인, 반려 등 다양한 문서 진행 상황 알림 기능으로 신속한 결재 가능',
                        '인쇄물이 아닌 전자 방식으로 비용 및 시간 절감'
                    ]
                },
                {
                    number: '02',
                    title: '다양한 문서 양식 관리',
                    description: ['다양한 결재문서 작성을 위한 웹 에디터 제공',
                        '기안서, 신청서, 회의록, 지출 결의서 등 기본 문서 양식 제공',
                        '사내 업무 환경에 맞는 양식으로 설정'
                    ]
                },
                {
                    number: '03',
                    title: '직관적이고 편리한 결재선',
                    description: ['개인결재선에 결재권자 설정을 활용한 양식별 전결규정 기능',
                        '개인에 맞는 고정 결재선 설정 기능',
                        '사용자가 자주 사용하는 결재선을 즐겨찾기 기능'
                    ]
                },
                {
                    number: '04',
                    title: '간편한 통합 인사관리',
                    description: ['인사, 평가, 연봉 등 관리자에게 필요한 데이터를 통합관리',
                        '임, 직원의 정보를 시스템으로 관리하여 각종 증명서 발급 및 이력을 관리',
                        '직원 별 휴가 현황 등 효율적인 일정관리'
                    ]
                }
            ],
            featureImages: [
                '/bizman1.png',
                '/bizman2.png',
                '/bizman3.png',
                '/bizman4.png'
            ],
            systems: [
                { title: '전자결재 시스템', description: '상신, 결재, 반려, 전결, 참조, 공람 등 오프라인의 결재 프로세스를 온라인으로 완벽히 지원합니다.' },
                { title: '일정관리 시스템', description: '개인, 부서별, 주간 모든 일정을 한눈에 파악 하여 직원 간 일정 소통을 원할하게 진행 할 수 있습니다.' },
                { title: '업무보고 시스템', description: '개인, 부서별 주간 업무를 한번에 파악하여 업무 완료 및 업무 계획을 원활하게 관리 할 수 있습니다.' },
                { title: '인사관리 시스템', description: '임.직원의 정보를 시스템으로 관리하여 각종 증명서 발급 및 이력을 관리합니다.' },
                { title: '연차관리 시스템', description: '시스템에서 각 직원의 연차를 일괄로 생성 할 수 있으며, 직원이 자신의 연차 현황을 관리 할 수 있습니다.' },
                { title: '급여관리 시스템', description: '급여 계산 및 지급 내역을 체계적으로 관리하며, 각종 급여 관련 보고서를 자동으로 생성합니다.' }
            ],

        },
        bizlms: {
            title: '비즈 LMS',
            subtitle: '학습관리 전문 솔루션',
            description: '온, 오프라인을 연계하여 콘텐츠 다양화를 통한 여러 방식의 비 대면 교육 채널 확보 및 사용자 맞춤형 스마트 교육서비스를 제공하는 학습관리 전문 솔루션',
            heroImage: '/bizlms-bg.png',
            features: [
                {
                    number: '01',
                    title: '사용자 맞춤형 스마트 교육서비스',
                    description: [
                        '한눈에 보는 학사 정보',
                        '이수증/각종 확인서 출력지원',
                        '마이크로 러닝 서비스',
                        '학습데이터 기반 교육과정 추천',
                        '온, 오프라인을 연계하여 콘텐츠를 다양화, 비대면 교육 채널 확보',
                        '모바일 기기에서도 원활한 학습이 가능하도록 반응형 인터페이스 제공']
                },
                {
                    number: '02',
                    title: '자동화프로세스 기반 다양한 학습 통계 데이터 제공',
                    description: ['쉽고 빠른 교육과정 등록, 간편인증 전자출결, 다양한 통계분석 및 보고서, 교육생 및 강사 맞춤형 서비스 등 효율적 프로세스',
                        '학습 현황, 수강률, 진도율, 성취도 등 다양한 통계 데이터를 시각화하여 제공']
                },
                {
                    number: '03',
                    title: 'MDM을 활용한 통합 사용자 계정',
                    description: ['고객정보의 병합 프로세스', '대표키 및 권한정보 배포 프로세스', '이관 데이터를 관리자가 검증할 수 있는 기능 제공']
                }
            ],
            featureImages: [
                '/bizlmsfeature1.png',
                '/bizlmsfeature2.png',
                '/bizlmsfeature3.png'
            ],
            systems: [
                { title: '효율적 교육과정 운영', description: '과정유형, 분야/분류, 기간, 대상 등추천/설정/입력/선택 등 사용자 Needs 기반 세부 설정이 가능합니다.' },
                { title: '강의관리 시스템', description: '온라인/오프라인 강의를 통합 관리하고 강의 자료와 일정을 효율적으로 운영합니다.' },
                { title: '평가관리 시스템', description: '시험, 과제, 퀴즈 등 다양한 평가 방식을 지원하고 자동 채점 기능을 제공합니다.' },
                { title: '수료증 발급', description: '과정 수료 시 자동으로 수료증을 발급하고 이력을 관리합니다.' },
                { title: '학습데이터 분석', description: '로그수집을 통한 학습 패턴 분석 및 대안제시로 고객 맞춤형 정보서비스를 제공합니다.' },
                { title: '모바일 학습 지원', description: '모바일 기기에서도 원활한 학습이 가능하도록 반응형 인터페이스를 제공합니다.' }
            ]
        },
        bizlicense: {
            title: '비즈 라이센스 BIZ-LICENSE',
            subtitle: '라이센스 관리 전문 솔루션',
            description: '자격증 발급부터 검증까지 전 과정을 자동화하는 통합 자격관리 솔루션입니다.',
            heroImage: '/bizlicense-bg.png',
            features: [
                {
                    number: '01',
                    title: '자격증 발급 및 이력 통합관리',
                    description: ['교육/시험 결과 연동 후 자동 발급지원, 자격 검증과 위변조 확인 QR 확인이 가능 합니다.']
                },
            ],
            featureImages: [
                '/bizlicensefeature1.png',
            ],
            systems: [
                { title: '수강관리 시스템', description: '수강 신청부터 수료까지 전 과정을 체계적으로 관리하고 수강생의 학습 이력을 추적합니다.' },
                { title: '강의관리 시스템', description: '온라인/오프라인 강의를 통합 관리하고 강의 자료와 일정을 효율적으로 운영합니다.' },
                { title: '평가관리 시스템', description: '시험, 과제, 퀴즈 등 다양한 평가 방식을 지원하고 자동 채점 기능을 제공합니다.' },
                { title: '수료증 발급', description: '과정 수료 시 자동으로 수료증을 발급하고 이력을 관리합니다.' },
                { title: '통계 및 리포트', description: '학습 현황, 수강률, 성취도 등 다양한 통계 데이터를 시각화하여 제공합니다.' },
                { title: '모바일 학습 지원', description: '모바일 기기에서도 원활한 학습이 가능하도록 반응형 인터페이스를 제공합니다.' }
            ]
        },
        bizsupport: {
            title: '비즈 서포트 BIZ-SUPPORT',
            subtitle: '후원관리 시스템',
            description: '각종 후원정보관리를 체계적으로 도와주는 통합 솔루션 비즈 서포트',
            heroImage: '/bizsupport-bg.png',
            features: [
                {
                    number: '01',
                    title: '하나로 관리하는 후원',
                    description: ['기부후원자의 정보 및 결재정보 등 자료 공유 가능한 커뮤니티 제공']
                },
                {
                    number: '02',
                    title: '게시물, 각종 통계관리',
                    description: ['후원자 모집 전략을 위한 각종 통계 제공, 도표를 통한 분석으로 쉬운 정보 처리 가능']
                },
                {
                    number: '03',
                    title: '콜센터 관리 기능',
                    description: ['후원자의 통화 내용 및 정보를 통합적으로 관리 가능']
                }
            ],
            featureImages: [
                '/bizsupportfeature1.png',
                '/bizsupportfeature2.png',
                '/bizsupportfeature3.png'
            ],
            systems: [
                { title: '후원자 정보관리', description: '후원자의 정보를 한 눈에 볼 수 있으며, 후원자의 각종 정보를 신속하게 추가 혹은 수정 할 수 있는 기능을 제공합니다.' },
                { title: '후원 관리', description: '후원자들의 납부 내역을 관리할 수 있으며 각종 캠페인 대상자를 일괄로 추출할 수 있는 기능을 제공합니다.' },
                { title: '콜센터 관리 시스템', description: '후원자 상담 이력을 관리하고 CS 업무를 효율적으로 처리합니다.' },
                { title: '게시물, 각종 통계관리', description: '후원자 모집을 위한 전략을 세울 수 있도록 각종 통계를 제공하고, 통계 자료 등 각종 자료를 공유할 수 있는 커뮤니티를 제공합니다.' },
            ]
        }
    };

    const currentSolution = solutionData[activeSolution];

    return (
        <div className={styles.desktop}>
            <Header />

            <div className={styles.main}>
                {/* 솔루션 탭 네비게이션 */}
                <div className={styles.tabNavigation}>
                    <div
                        className={activeSolution === 'bizman' ? styles.tabActive : styles.tabInactive}
                        onClick={() => setActiveSolution('bizman')}
                    >
                        <div className={styles.tabText}>비즈맨</div>
                    </div>
                    <div
                        className={activeSolution === 'bizlms' ? styles.tabActive : styles.tabInactive}
                        onClick={() => setActiveSolution('bizlms')}
                    >
                        <div className={styles.tabText}>비즈 LMS</div>
                    </div>
                    <div
                        className={activeSolution === 'bizlicense' ? styles.tabActive : styles.tabInactive}
                        onClick={() => setActiveSolution('bizlicense')}
                    >
                        <div className={styles.tabText}>비즈 라이센스</div>
                    </div>
                    <div
                        className={activeSolution === 'bizsupport' ? styles.tabActive : styles.tabInactive}
                        onClick={() => setActiveSolution('bizsupport')}
                    >
                        <div className={styles.tabText}>비즈 서포트</div>
                    </div>
                </div>
                {/* 메인 히어로 섹션 */}
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroTextWrapper}>
                            <div className={styles.heroSubtitle}>{currentSolution.subtitle}</div>
                            <h1 className={styles.heroTitle}>{currentSolution.title}</h1>
                            <p className={styles.heroDescription}>{currentSolution.description}</p>
                            <Link href="/careers#inquiry" className={styles.ctaButton}>
                                도입 문의
                            </Link>
                        </div>
                        <div className={styles.heroImageWrapper}>
                            <Image
                                className={styles.heroImage}
                                width={1200}
                                height={600}
                                sizes="100vw"
                                alt={currentSolution.title}
                                src={currentSolution.heroImage}
                            />
                        </div>
                    </div>
                </div>
                {/* 기능 섹션들 */}
                {currentSolution.features.map((feature, index) => (
                    <div key={index} className={index % 2 === 0 ? styles.featureSection : styles.featureSectionAlt}>
                        <div className={styles.featureContent}>
                            <div className={styles.featureText}>
                                <div className={styles.featureLabel}>핵심 기능 {feature.number}</div>
                                <h2 className={styles.featureTitle}>{feature.title}</h2>
                                {Array.isArray(feature.description) ? (
                                    <ol className={styles.featureDescription}>
                                        {feature.description.map((text, i) => (
                                            <li key={i}>{text}</li>
                                        ))}
                                    </ol>
                                ) : (
                                    <p className={styles.featureDescription}>
                                        {feature.description}
                                    </p>
                                )}
                            </div>
                            <div className={styles.featureImageWrapper}>
                                <Image
                                    className={styles.featureImage}
                                    width={612}
                                    height={406}
                                    sizes="100vw"
                                    alt={feature.title}
                                    src={currentSolution.featureImages[index]}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {/* 시스템 기능 상세 섹션 */}
                <div className={styles.systemSection}>
                    <div className={styles.systemGrid}>
                        {currentSolution.systems.map((system, index) => (
                            <div key={index} className={styles.systemCard}>
                                <h3 className={styles.systemTitle}>{system.title}</h3>
                                <p className={styles.systemDescription}>{system.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Enquiry />
            <Footer />
        </div>
    );
};

export default Solutions;

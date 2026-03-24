'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import styles from './page.module.css';
import Header from "@/components/header";
import Footer from "@/components/footer";

const Careers: NextPage = () => {
    return (
        <div className={styles.desktop}>
            <Header />

            <div className={styles.main}>
                {/* Hero Section */}
                <div className={styles.heroSection}>
                    <div className={styles.intro}>
                        <div className={styles.recruitInquiry}>Recruitment & Inquiry</div>
                        <div className={styles.div5}>채용 / 문의</div>
                    </div>
                </div>
                {/* Job Openings Section */}
                <div className={styles.jobsSection}>
                    <div className={styles.sectionTitle}>모집공고</div>
                    <div className={styles.jobList}>
                        {/* Application Developer */}
                        <div className={styles.jobCard}>
                            <div className={styles.jobHeader}>
                                <div className={styles.jobTitle}>응용프로그램 개발자 (Application Developer)</div>
                                <div className={styles.jobBadge}>경력 / 신입</div>
                            </div>
                            <div className={styles.jobDetails}>
                                <div className={styles.detailGroup}>
                                    <div className={styles.detailLabel}>주요업무</div>
                                    <ul className={styles.detailContent}>
                                        <li>Java / Spring Boot 기반 웹 서비스 개발</li>
                                        <li>REST API 및 백엔드 서비스 개발</li>
                                        <li>공공기관 프로젝트 수행</li>
                                        <li>클라우드(AWS·GCP·Azure) 기반 개발</li>
                                    </ul>
                                </div>
                                <div className={styles.detailGroup}>
                                    <div className={styles.detailLabel}>상세자격요건</div>
                                    <ul className={styles.detailContent}>
                                        <li>Java/Spring 개발 경험</li>
                                        <li>Git 기반 협업 가능</li>
                                        <li>컴퓨터 관련 학과 또는 동등 경력</li>
                                        <li>해외출장 결격사유 없음</li>
                                    </ul>
                                </div>
                                <div className={styles.detailGroup}>
                                    <div className={styles.detailLabel}>우대사항</div>
                                    <ul className={styles.detailContent}>
                                        <li>JPA, MySQL, PostgreSQL 경험</li>
                                        <li>Docker·CI/CD 등 DevOps 환경 경험</li>
                                        <li>공공기관 프로젝트 경험</li>
                                        <li>정보처리기사 등 관련 자격증 보유</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* System Engineer */}
                        <div className={styles.jobCard}>
                            <div className={styles.jobHeader}>
                                <div className={styles.jobTitle}>시스템 엔지니어 (System Engineer)</div>
                                <div className={styles.jobBadge}>경력 / 신입</div>
                            </div>
                            <div className={styles.jobDetails}>
                                <div className={styles.detailGroup}>
                                    <div className={styles.detailLabel}>주요업무</div>
                                    <ul className={styles.detailContent}>
                                        <li>서버·스토리지·가상화 환경 구축 및 운영</li>
                                        <li>OS(Linux/Unix/Windows) 설치 및 관리</li>
                                        <li>시스템 모니터링 및 장애 대응</li>
                                        <li>백업 및 보안 정책 운영</li>
                                    </ul>
                                </div>
                                <div className={styles.detailGroup}>
                                    <div className={styles.detailLabel}>상세자격요건</div>
                                    <ul className={styles.detailContent}>
                                        <li>전문대졸(2~3년) 이상 또는 동일 경력</li>
                                        <li>Linux/Unix 기반 시스템 운영 경험</li>
                                        <li>Windows Server, AD 운영 경험</li>
                                        <li>Storage·SAN·VMware 경험</li>
                                        <li>해외출장 결격사유 없음</li>
                                    </ul>
                                </div>
                                <div className={styles.detailGroup}>
                                    <div className={styles.detailLabel}>우대사항</div>
                                    <ul className={styles.detailContent}>
                                        <li>Shell Script/Python 자동화 경험</li>
                                        <li>AWS/Azure/GCP 클라우드 운영 경험</li>
                                        <li>네트워크 기초 지식 보유</li>
                                        <li>AWS SAA, RHCE 등 관련 자격증 보유</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Designer */}
                        <div className={styles.jobCard}>
                            <div className={styles.jobHeader}>
                                <div className={styles.jobTitle}>디자이너 (UI/UX Designer)</div>
                                <div className={styles.jobBadge}>경력 / 신입</div>
                            </div>
                            <div className={styles.jobDetails}>
                                <div className={styles.detailGroup}>
                                    <div className={styles.detailLabel}>주요업무</div>
                                    <ul className={styles.detailContent}>
                                        <li>웹/모바일 UI·UX 디자인</li>
                                        <li>서비스 화면 설계(와이어프레임·프로토타입)</li>
                                        <li>디자인 시스템 구축 및 관리</li>
                                        <li>웹사이트·관리자 페이지·프로모션 디자인 제작</li>
                                    </ul>
                                </div>
                                <div className={styles.detailGroup}>
                                    <div className={styles.detailLabel}>상세자격요건</div>
                                    <ul className={styles.detailContent}>
                                        <li>Figma, Adobe XD, Photoshop, Illustrator 사용 가능</li>
                                        <li>웹/모바일 UI·UX 실무 경험 또는 포트폴리오 보유</li>
                                        <li>사용자 흐름(User Flow) 설계 이해</li>
                                        <li>협업툴을 활용한 커뮤니케이션 가능</li>
                                    </ul>
                                </div>
                                <div className={styles.detailGroup}>
                                    <div className={styles.detailLabel}>우대사항</div>
                                    <ul className={styles.detailContent}>
                                        <li>Design System 제작 경험</li>
                                        <li>HTML/CSS 기본 이해</li>
                                        <li>공공기관 또는 SaaS 프로젝트 디자인 경험</li>
                                        <li>브랜드·마케팅 디자인 가능자</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Recruitment Process Section */}
                <div className={styles.processSection}>
                    <div className={styles.sectionTitle}>전형방법</div>
                    <div className={styles.processSteps}>
                        <div className={styles.stepItem}>
                            <div className={styles.stepCircle}>
                                <span className={styles.stepNumber}>STEP 01</span>
                                <span className={styles.stepName}>서류전형</span>
                            </div>
                            <div className={styles.benefitDesc}>이력서, 자기소개서<br />포트폴리오(선택)</div>
                        </div>
                        <div className={styles.stepArrow}>&gt;</div>
                        <div className={styles.stepItem}>
                            <div className={styles.stepCircle}>
                                <span className={styles.stepNumber}>STEP 02</span>
                                <span className={styles.stepName}>면접전형</span>
                            </div>
                            <div className={styles.benefitDesc}>실무진/임원 면접</div>
                        </div>
                        <div className={styles.stepArrow}>&gt;</div>
                        <div className={styles.stepItem}>
                            <div className={styles.stepCircle}>
                                <span className={styles.stepNumber}>STEP 03</span>
                                <span className={styles.stepName}>최종합격</span>
                            </div>
                            <div className={styles.benefitDesc}>처우협의 및 입사</div>
                        </div>
                    </div>
                </div>
                {/* Benefits Section */}
                <div className={styles.benefitsSection}>
                    <div className={styles.sectionTitle}>복리후생</div>
                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitItem}>
                            <Image className={styles.benefitIcon} width={41} height={41} alt="주 5일 근무" src="/leadit-web/icon_workhour.png" />
                            <div className={styles.benefitContent}>
                                <div className={styles.benefitTitle}>주 5일 근무</div>
                                <div className={styles.benefitDesc}>연차 유급휴가</div>
                            </div>
                        </div>
                        <div className={styles.benefitItem}>
                            <Image className={styles.benefitIcon} width={43} height={39} alt="보험" src="/leadit-web/icon_insurance.png" />
                            <div className={styles.benefitContent}>
                                <div className={styles.benefitTitle}>보험</div>
                                <div className={styles.benefitDesc}>국민연금, 의료보험, 산재보험, 고용보험</div>
                            </div>
                        </div>
                        <div className={styles.benefitItem}>
                            <Image className={styles.benefitIcon} width={36} height={48} alt="휴대폰 통신비 지원" src="/leadit-web/icon_phone.png" />
                            <div className={styles.benefitContent}>
                                <div className={styles.benefitTitle}>휴대폰 통신비 지원</div>
                                <div className={styles.benefitDesc}>매월 일정금액 지급</div>
                            </div>
                        </div>
                        <div className={styles.benefitItem}>
                            <Image className={styles.benefitIcon} width={39} height={29} alt="문화생활비 지원" src="/leadit-web/icon_entertainment.png" />
                            <div className={styles.benefitContent}>
                                <div className={styles.benefitTitle}>문화생활비 지원</div>
                                <div className={styles.benefitDesc}>매월 일정금액 지급</div>
                            </div>
                        </div>
                        <div className={styles.benefitItem}>
                            <Image className={styles.benefitIcon} width={37} height={23} alt="교통비 지원" src="/leadit-web/icon_transportation.png" />
                            <div className={styles.benefitContent}>
                                <div className={styles.benefitTitle}>교통비 지원</div>
                                <div className={styles.benefitDesc}>매월 일정금액 지급</div>
                            </div>
                        </div>
                        <div className={styles.benefitItem}>
                            <Image className={styles.benefitIcon} width={37} height={41} alt="명절 선물" src="/leadit-web/icon_gift.png" />
                            <div className={styles.benefitContent}>
                                <div className={styles.benefitTitle}>명절 선물</div>
                                <div className={styles.benefitDesc}>추석/설 상품권 지급</div>
                            </div>
                        </div>
                        <div className={styles.benefitItem}>
                            <Image className={styles.benefitIcon} width={41} height={41} alt="경조사비 지원" src="/leadit-web/icon_money.png" />
                            <div className={styles.benefitContent}>
                                <div className={styles.benefitTitle}>경조사비 지원</div>
                                <div className={styles.benefitDesc}>경조사 규정에 따라 지급</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Inquiry Section */}
                <div className={styles.philosophySection} id='inquiry'>
                    <div className={styles.sectionTitle}>문의</div>

                    <form className={styles.frameParent} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.frameGroup}>
                            <div className={styles.frameContainer}>
                                <label className={styles.b}>이름*</label>
                                <input
                                    type="text"
                                    name="name"
                                    className={styles.inputField}
                                    placeholder="이름"
                                    required
                                />
                            </div>
                            <div className={styles.frameContainer}>
                                <label className={styles.b}>이메일*</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={styles.inputField}
                                    placeholder="이메일"
                                    required
                                />
                            </div>
                            <div className={styles.frameContainer}>
                                <label className={styles.b}>연락처*</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className={styles.inputField}
                                    placeholder="연락처"
                                    required
                                />
                            </div>
                            <div className={styles.frameContainer}>
                                <label className={styles.b}>문의유형*</label>
                                <select
                                    name="category"
                                    className={styles.inputField}
                                    required
                                >
                                    <option value="">문의유형 선택</option>
                                    <option value="business">사업제안</option>
                                    <option value="career">채용문의</option>
                                    <option value="etc">기타문의</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.frameGroup}>
                            <div className={styles.frameContainer}>
                                <label className={styles.b}>내용*</label>
                                <textarea
                                    name="message"
                                    className={styles.textAreaField}
                                    placeholder="문의 내용을 입력해주세요"
                                    required
                                />
                            </div>
                            <div className={styles.frameParent3}>
                                <div className={styles.parent3}>
                                    <label className={styles.b}>첨부파일*</label>
                                    {/* 숨겨진 실제 파일 input */}
                                    <input
                                        id="fileInput"
                                        type="file"
                                        name="file"
                                        className={styles.hiddenFileInput}
                                        onChange={(e) => {
                                            const fileName = e.target.files?.[0]?.name || '선택된 파일 없음';
                                            const label = document.getElementById('fileNameLabel');
                                            if (label) label.innerText = fileName;
                                        }}
                                    />
                                    <div className={styles.frameContainer2}>
                                        {/* 파일명 표시 UI */}
                                        <div id="fileNameLabel" className={styles.inputField}>
                                            선택된 파일 없음
                                        </div>
                                        {/* 파일 선택 버튼 */}
                                        <button
                                            type="button"
                                            className={styles.fileButton}
                                            onClick={() => document.getElementById('fileInput')?.click()}
                                        >
                                            파일찾기
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                문의하기
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <Footer />
        </div >
    );
};

export default Careers;

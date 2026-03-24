import Image from "next/image";
import styles from './index.module.css';

const Desktop = () => {
	return (
		<div className={styles.desktop}>
			<div className={styles.logo1Parent}>
				<Image src="/placeholder.svg" className={styles.logo1Icon} width={107} height={23} sizes="100vw" alt="logo" />
				<div className={styles.parent}>
					<div className={styles.div}>개인정보처리방침</div>
					<div className={styles.div}>입사지원서 양식</div>
					<div className={styles.div}>채용사이트</div>
				</div>
			</div>

			<div className={styles.desktopChild} />

			<div className={styles.menuItem}>
				<div className={styles.skV1Center}>
					주식회사 리드정보기술  |  대표이사 조병직  |  대표번호 02-761-3871<br />
					주소 서울시 영등포구 당산로 41길 11 SK V1 Center E동 1312호  |  대표이메일 leaditleadit@leadit.co.kr
				</div>
			</div>

			<div className={styles.desktopItem} />

			<div className={styles.bottom}>
				<div className={styles.leaditAllRight}>@2021 LEADIT All Right Reserved.</div>
			</div>

			<div className={styles.main}>
				<div className={styles.heroSection}>
					<div className={styles.content}>
						<div className={styles.block}>
							<div className={styles.text}>
								<div className={styles.heroTitle}>
									LONG-LASTING<br />EFFICIENT<br />AGREEABLE<br />DISTINCTIVE<br />IT SERVICES
								</div>
								<div className={styles.heroDescription}>
									리드정보기술은 1998년 창립이래 공공기관 대규모 SI사업 단독구축 경험이 풍부한 강소기업입니다.<br />
									언제나 고객에게 가장 필요한 서비스를 효율적으로 제공하겠습니다.
								</div>
							</div>

							<div className={styles.largeButton}>
								<div className={styles.connectWithOur}>회사소개 바로가기</div>
							</div>
						</div>

						<div className={styles.image} />
					</div>
				</div>

				<div className={styles.servicesSection}>
					<div className={styles.introSection}>
						<div className={styles.content2}>
							<div className={styles.introTitle}>LEAD IT</div>
							<div className={styles.introSubtitle}>
								고객의 성공이<br />우리의 기술 입니다.
							</div>
							<div className={styles.introDescription}>
								리드정보기술'은 맞춤형 솔루션과 전략으로<br />
								고객의 비즈니스 목표에 맞는 기술과 서비스를 제공합니다.
							</div>
							<div className={styles.largeButton2} />
							<div className={styles.largeButton2} />
							<div className={styles.largeButton4}>
								<div className={styles.connectWithOur}>솔루션 바로가기</div>
							</div>
						</div>
					</div>

					<div className={styles.section1}>
						<div className={styles.card}>
							<Image src="/placeholder.svg" className={styles.cardImageIcon} width={214} height={230} sizes="100vw" alt="card1" />
							<div className={styles.content3}>
								<div className={styles.text2}>
									<div className={styles.cardTitle}>통합인사관리 프로그램</div>
									<div className={styles.cardSubtitle}>비즈맨 Biz-Man</div>
									<div className={styles.heroDescription}>효율적인 전자결재 시스템으로 사내업무 및 사원관리를 간편하게</div>
								</div>

								<div className={styles.labels}>
									<div className={styles.labels2}><div className={styles.taxes}># 전자결재 시스템</div></div>
									<div className={styles.labels2}><div className={styles.taxes}># 다양한 문서관리 지원</div></div>
									<div className={styles.labels2}><div className={styles.taxes}># 인터넷 환경</div></div>
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
									<div className={styles.heroDescription}>효율적인 전자결재 시스템으로 사내업무 및 사원관리를 간편하게</div>
								</div>

								<div className={styles.labels}>
									<div className={styles.labels2}><div className={styles.taxes}># 수강관리 시스템</div></div>
									<div className={styles.labels2}><div className={styles.taxes}># 수강, 인강, 강의</div></div>
									<div className={styles.labels2}><div className={styles.taxes}># 인터넷 환경</div></div>
								</div>
							</div>

							<Image src="/placeholder.svg" className={styles.cardImageIcon2} width={235} height={232} sizes="100vw" alt="card2" />
						</div>
					</div>

					<div className={styles.section3}>
						<div className={styles.card3}>
							<Image src="/placeholder.svg" className={styles.cardImageIcon3} width={243} height={209} sizes="100vw" alt="card3" />
							<div className={styles.content3}>
								<div className={styles.text2}>
									<div className={styles.cardTitle}>후원관리 프로그램</div>
									<div className={styles.cardSubtitle}>비즈서포트 Biz-Support</div>
									<div className={styles.heroDescription}>효율적인 전자결재 시스템으로 사내업무 및 사원관리를 간편하게</div>
								</div>

								<div className={styles.labels}>
									<div className={styles.labels2}><div className={styles.taxes}># 후원자 정보관리</div></div>
									<div className={styles.labels2}><div className={styles.taxes}>{`# 각종 통계, 게시물 관리`}</div></div>
									<div className={styles.labels2}><div className={styles.taxes}>{`# 콜센터 관리`}</div></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.benefitsSection}>
					<div className={styles.content6}>
						<div className={styles.header}>
							<div className={styles.benefitsTitle}>비즈니스 혁신의 시작,<br /> 리드정보기술에서</div>
							<div className={styles.benefitsDescription}>
								리드정보기술'은 맞춤형 솔루션과 전략으로<br />
								고객의 비즈니스 목표에 맞는 기술과 서비스를 제공합니다.
							</div>
						</div>

						<div className={styles.ctaSection}>
							<div className={styles.card4}>
								<div className={styles.content7}>
									<div className={styles.benefitTitle}>소프트웨어 개발</div>
									<div className={styles.buttonWhite}><div className={styles.taxes}>Learn More</div></div>
								</div>
							</div>

							<div className={styles.card5}>
								<div className={styles.content8}>
									<div className={styles.benefitTitle}>시스템 통합 및 컨설팅</div>
									<div className={styles.buttonWhite}><div className={styles.taxes}>Learn More</div></div>
								</div>
							</div>

							<div className={styles.card6}>
								<div className={styles.content7}>
									<div className={styles.benefitTitle}>하드웨어 공급</div>
									<div className={styles.buttonWhite}><div className={styles.taxes}>Learn More</div></div>
								</div>
							</div>

							<div className={styles.card7}>
								<div className={styles.content10}>
									<div className={styles.benefitTitle}>통합 유지 보수 서비스</div>
									<div className={styles.buttonWhite}><div className={styles.taxes}>Learn More</div></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.expertsSection}>
					<div className={styles.carouselDesktopTablet}>
						<div className={styles.secTitle}>고객과 함께한 성공 스토리</div>

						<div className={styles.quotes}>
							<div className={styles.quotes2}>
								<div className={styles.managingMyTaxes}>
									“업무 효율이 눈에 띄게 향상되었습니다.”<br />
									기성 제품으로는 해결하기 어려운 부분이 많았는데,
									고객의 요구사항을 세세히 반영한 맞춤형 솔루션을 제안해 주셔서 만족도가 매우 높습니다.
								</div>
								<div className={styles.byline}>
									<Image src="/placeholder.svg" className={styles.imageIcon} width={46} height={48} sizes="100vw" alt="" />
									<div className={styles.taylorM28}>B물류(주) IT팀 박00 차장</div>
								</div>
							</div>

							<div className={styles.quotes3}>
								<div className={styles.managingMyTaxes}>
									“프로젝트 관리 능력이 탁월합니다.”<br />
									여러 시스템이 분산되어 있었는데, 통합 SI 사업을 통해 전사 시스템이 하나로 연결되었습니다.
								</div>
								<div className={styles.byline}>
									<Image src="/placeholder.svg" className={styles.imageIcon} width={46} height={48} sizes="100vw" alt="" />
									<div className={styles.taylorM28}>C공공기관 전산담당 이00 주무관</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.footer} />

				<div className={styles.expertsSection2}>
					<div className={styles.content11}>
						<div className={styles.secTitle}>문의사항이 있으신가요?</div>
						<div className={styles.heroDescription}>
							리드정보기술'은 맞춤형 솔루션과 전략으로<br />
							고객의 비즈니스 목표에 맞는 기술과 서비스를 제공합니다.
						</div>

						<div className={styles.largeButtonParent}>
							<div className={styles.largeButtonBlack}>
								<div className={styles.connectWithOur}>사업제안 / 문의</div>
							</div>
							<div className={styles.largeButtonWhite}>
								<div className={styles.connectWithOur}>채용</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.footer2}>
					<div className={styles.leftColumn}>
						<div className={styles.logo}>
							<Image src="/placeholder.svg" className={styles.image16Icon} width={139} height={31} sizes="100vw" alt="" />
						</div>

						<div className={styles.managingMyTaxes}>
							<span>Financial Clarity You Can Trust<br /></span>
							<span className={styles.trustedFinancialGuidance}>
								Trusted financial guidance for every stage of life and business since 1987
							</span>
						</div>
					</div>

					<div className={styles.rightColumn}>
						<div className={styles.labels13}>
							<div className={styles.content12}>
								<div className={styles.div6}>회사소개</div>
								<div className={styles.div6}>프로젝트</div>
								<div className={styles.div6}>솔루션</div>
								<div className={styles.div6}>채용/문의</div>
								<div className={styles.buttonWhite5}>
									<div className={styles.div6}>회사 소개서</div>
								</div>
							</div>
						</div>

						<div className={styles.allRightsReserved}>© 2025 All Rights Reserved</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Desktop;

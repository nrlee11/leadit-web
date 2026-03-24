import Image from "next/image";
import styles from './page.module.css';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Enquiry from "@/components/enquiry";

export default function DesktopServices() {
    return (
        <div className={styles.desktopServices}>
            <Header />
            <div className={styles.main}>
                <div className={styles.philosophySection}>
                    <div className={styles.content}>
                        <div className={styles.intro}>
                            <div className={styles.vision}>Vision</div>
                            <div className={styles.div5}>비전</div>
                        </div>
                        <div className={styles.div6}>
                            <span>{`"리드정보기술은 `}</span>
                            <span className={styles.span}>성장</span>
                            <span>{`과 `}</span>
                            <span className={styles.span2}>혁신</span>
                            <span>을 통해 발전된 가치를 만드는 기업입니다."</span>
                        </div>
                        <div className={styles.card1}>
                            <Image className={styles.image77Icon} width={85} height={107} sizes="100vw" alt="" src="/leadit-web/icon_growth.png" />
                            <div className={styles.growthParent}>
                                <div className={styles.growth}>Growth</div>
                                <div className={styles.div7}>기술과 사람의 성장을 함께 추구하여 지속 가능한 미래를 만듭니다.</div>
                            </div>
                        </div>
                        <div className={styles.card2}>
                            <Image className={styles.image78Icon} width={70} height={110} sizes="100vw" alt="" src="/leadit-web/icon_innovation.png" />
                            <div className={styles.growthParent}>
                                <div className={styles.growth}>Innovation</div>
                                <div className={styles.div7}>변화를 두려워하지 않고, 새로운 기술로 세상의 문제를 해결합니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image className={styles.imageBreakIcon} width={1920} height={737} sizes="100vw" alt="" src="/leadit-web/services_bg.png" />
                <div className={styles.howItWorksSection}>
                    <div className={styles.intro2}>
                        <div className={styles.content2}>
                            <div className={styles.certificationsAwards}>{`Certifications & Awards`}</div>
                            <div className={styles.div9}>대외기관 인증 및 수상내역</div>
                            <div className={styles.servingIndividualsAnd}>Serving individuals and small businesses since 1998</div>
                        </div>
                    </div>
                    <div className={styles.step6Parent}>
                        <div className={styles.step6}>
                            <div className={styles.div10}>2001. 12</div>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.div11}>정보통신부 장관 표창 수상</div>
                                    <div className={styles.servingIndividualsAnd}>정보통신부</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.step6}>
                            <div className={styles.div10}>2005. 01</div>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.div11}>공용 테크니컬 컴퓨팅 인프라 구축 공로 감사패 수상</div>
                                    <div className={styles.servingIndividualsAnd}>국방과학연구소 제 2체계 개발 본부</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.step6}>
                            <div className={styles.div10}>2007. 08</div>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.div11}>관세청장 표창수상</div>
                                    <div className={styles.servingIndividualsAnd}>관세청</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.step6}>
                            <div className={styles.div10}>2009. 12</div>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.div11}>기업부설연구소 설립 인증</div>
                                    <div className={styles.servingIndividualsAnd}>한국산업기술진흥협회</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.step6}>
                            <div className={styles.div10}>2010. 03</div>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.div11}>기술혁신형 중소기업</div>
                                    <div className={styles.servingIndividualsAnd}>중소벤처기업부 Inno-Biz 인증</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.step6}>
                            <div className={styles.div10}>2014. 02</div>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.div11}>정보통신공사업 등록</div>
                                    <div className={styles.servingIndividualsAnd}>서울특별시</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.step6}>
                            <div className={styles.div10}>2015. 01</div>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.div11}>현장추진형 강소기업 선정</div>
                                    <div className={styles.servingIndividualsAnd}>서울지방고용노동청</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.step6}>
                            <div className={styles.div10}>2016. 11  ~  2018. 06</div>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.div11}>청년친화강소기업 선정</div>
                                    <div className={styles.servingIndividualsAnd}>고용노동부</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.step6}>
                            <div className={styles.div10}>2019. 01</div>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.div11}>청년친화강소기업 선정</div>
                                    <div className={styles.servingIndividualsAnd}>고용노동부 고용안정 우수, 일생활균형 우수</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.step6}>
                            <div className={styles.div10}>2019. 02</div>
                            <div className={styles.content3}>
                                <div className={styles.text2}>
                                    <div className={styles.div11}>기술혁신형 중소기업</div>
                                    <div className={styles.servingIndividualsAnd}>중소벤처기업부 Inno-Biz인증</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.content20}>
                    <div className={styles.text18}>
                        <div className={styles.text19}>
                            <div className={styles.subtit}>심벌 마크</div>
                            <div className={styles.subeng}>Symbol Mark</div>
                            <div className={styles.it}>심벌마크의 세 꼭짓점은 '과거', '현재', '미래'를 상징합니다.<br />시대의 첨단을 달리는 IT 산업 속에서 리드정보기술이 지금까지 쌓아왔던 경험과 노하우를 통하여 현재에 최선을 다하며 미래를 준비하는 것을 의미합니다.</div>
                        </div>
                    </div>

                    <Image className={styles.imageIcon} width={750} height={750} sizes="100vw" alt="" src="/leadit-web/symbol.png" />

                </div>
                <div className={styles.content21}>
                    <Image className={styles.imageIcon2} width={750} height={750} sizes="100vw" alt="" src="/leadit-web/brandlogo.png" />
                    <div className={styles.text18}>
                        <div className={styles.text19}>
                            <div className={styles.subtit}>브랜드 로고</div>
                            <div className={styles.subeng}>Brand Logo</div>
                            <div className={styles.it}>리드정보기술의 로고입니다.</div>
                        </div>
                    </div>
                </div>
                <div className={styles.content22}>
                    <div className={styles.text18}>
                        <div className={styles.text19}>
                            <div className={styles.subtit}>조직도</div>
                            <div className={styles.subeng}>Organizational Chart</div>
                            <div className={styles.it}>명확한 역할과 협업을 통해 더 큰 가치를 창출합니다.</div>
                        </div>
                    </div>
                    <Image className={styles.imageIcon} width={750} height={750} sizes="100vw" alt="" src="/leadit-web/organizationchart.svg" />
                </div>
                <div className={styles.philosophySection2}>
                    <div className={styles.intro3}>
                        <div className={styles.location}>Location</div>
                        <div className={styles.div9}>오시는 길</div>
                    </div>
                    <div className={styles.content23}>
                        <div className={styles.parent}>
                            <div className={styles.div63}>오시는 길</div>
                            <div className={styles.skV1E}>서울특별시 영등포구 당산로41길 11 SK V1센터 E동 1312호</div>
                        </div>
                        <div className={styles.parent}>
                            <div className={styles.div63}>대표전화</div>
                            <div className={styles.skV1E}>02-761-3871</div>
                        </div>
                        <div className={styles.parent}>
                            <div className={styles.div63}>팩스</div>
                            <div className={styles.skV1E}>02-761-3875</div>
                        </div>
                        <div className={styles.parent}>
                            <div className={styles.div63}>버스 이용시</div>
                            <div className={styles.skV1E}>05520, 6631, 6550, 70-3번 버스 당산유원아파트 하차 후 도보 5분</div>
                        </div>
                        <div className={styles.parent}>
                            <div className={styles.div63}>지하철 이용시</div>
                            <div className={styles.skV1E}>당산역 하차 후 1번 출구에서 도보 5분 영등포구청역 하차 후 3번출구에서 도보 8분</div>
                        </div>
                    </div>
                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.1810814288524!2d126.89937171930086!3d37.52722847480072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f22d44b9227%3A0x2916f3330285ec85!2z66as65Oc7KCV67O06riw7Iig!5e0!3m2!1sko!2skr!4v1764635200361!5m2!1sko!2skr"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <Enquiry />
                <Footer />
            </div>

        </div>
    )
}

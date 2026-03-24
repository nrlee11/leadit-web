import Link from "next/link";
import Image from "next/image";
import styles from "./enquiry.module.css";

export default function Enquiry() {
    return (
        <div className={styles.expertsSection2}>
            <div className={styles.content11}>
                <h2 className={styles.secTitle}>문의사항이 있으신가요?</h2>
                <div className={styles.heroDescription}>사업 및 채용 문의는 이곳에서 확인해보세요!</div>
                <div className={styles.largeButtonParent}>
                    <Link href="/careers#inquiry">
                        <div className={styles.largeButton5}>
                            <div className={styles.connectWithOur}>사업제안 / 문의</div>
                        </div>
                    </Link>
                    <Link href="/careers">
                        <div className={styles.largeButton6}>
                            <div className={styles.connectWithOur}>채용</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
import { useState } from 'react';

import downBtnImg from '../assets/img/hotKeyword/arrow_under_white1.png';

import styles from "../style/HotKeyword.module.scss"

const HotKeyword = () => {
    const [isOpen, setIsOpen] = useState(false);

    const keywords = [
        { rank: 1, text: "듀테로" },
        { rank: 2, text: "암피스트" },
        { rank: 3, text: "폴로" },
        { rank: 4, text: "베르노" },
        { rank: 5, text: "킨치" },
        { rank: 6, text: "리퍼브" },
        { rank: 7, text: "나이키" },
        { rank: 8, text: "델디오" },
        { rank: 9, text: "아크블루" },
        { rank: 10, text: "토니호크" },
    ];

    const topKeyword = keywords[0];
    const leftKeywords = keywords.slice(0, 5);
    const rightKeywords = keywords.slice(5, 10);

    return (
        <div className={styles.hotKeyword}>
            <div className={`${styles.header} ${isOpen ? styles.open : ''}`}>
                <p className={styles.title}>HOT KEYWORD</p>
                <div className={styles.divider}>|</div>
                <button className={styles.dropdownBtn} onClick={() => setIsOpen(!isOpen)}>
                    <div className={styles.currentKeyword}>
                        <span className={styles.topRank}>{topKeyword.rank}</span>
                        <span>{topKeyword.text}</span>
                    </div>
                    <img src={downBtnImg} alt="드롭다운 화살표" />
                </button>
            </div>
            
            <div className={`${styles.listContainer} ${isOpen ? styles.open : ''}`}>
                <div className={styles.innerWrap}>
                    <div className={styles.listWrap}>
                        <ul className={styles.listCol}>
                            {leftKeywords.map(kw => (
                                <li key={kw.rank} className={styles.listItem}>
                                    <a href={`/shopMobile/etc/search.do?searchKeyword=${kw.text}`}>
                                        <span className={`${styles.rank} ${kw.rank <= 3 ? styles.top : ''}`}>
                                            {kw.rank}
                                        </span>
                                        <span>{kw.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        
                        <ul className={styles.listCol}>
                            {rightKeywords.map(kw => (
                                <li key={kw.rank} className={styles.listItem}>
                                    <a href={`/shopMobile/etc/search.do?searchKeyword=${kw.text}`}>
                                        <span className={`${styles.rank} ${kw.rank <= 3 ? styles.top : ''}`}>
                                            {kw.rank}
                                        </span>
                                        <span>{kw.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotKeyword;
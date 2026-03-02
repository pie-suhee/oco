import styles from "../style/ProductItem.module.scss"

const ProductItem = ({
    brand = "폴로랄프로렌", 
    name = "폴로 랄프로렌 남성 피마코튼 긴팔 무지니트", 
    price = "109,000", 
    discount = "61%", 
    imgSrc
}) => {
    return (
        <a href="#!" className={styles.productItem}>
            <div className={styles.imageWrap}>
                <img src={imgSrc} alt={name} />
            </div>
            
            <div className={styles.infoWrap}>
                <h4 className={styles.brand}>{brand}</h4>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.priceRow}>
                    <div className={styles.price}>
                        <span>{price}</span>
                    </div>
                    <span className={styles.discount}>{discount}</span>
                </div>
            </div>
        </a>
    );
}

export default ProductItem;
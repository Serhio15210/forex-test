import shoppingBagIcon from "@/assets/icons/shopping-bag.svg";
import styles from "../plan-card.module.scss";

type PlanCardFooterProps = {
    buyHref: string;
    isSoldOut: boolean;
};

export const PlanCardFooter = ({ buyHref, isSoldOut }: PlanCardFooterProps) => (
    <div className={styles.footer}>
        {isSoldOut ? (
            <button type="button" className={styles.buyButton} disabled>
                Buy
            </button>
        ) : (
            <a href={buyHref} className={styles.buyButton}>
                Buy
            </a>
        )}
        <button type="button" className={styles.cartButton} disabled={isSoldOut}>
            <img src={shoppingBagIcon} alt="" width={24} height={24} />
        </button>
    </div>
);

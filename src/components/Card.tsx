import heroImage from "../assets/illustration-hero.svg";
import { CardPlan } from "./CardPlan";

const styles = {
  wrapper: "rounded-3xl overflow-hidden bg-white w-[340px] xl:w-[480px]",
  imgWrapper: "h-40 xl:h-60 w-full overflow-hidden",
  cardHeroImg: "object-cover w-full h-full",
  cardBody: {
    bodyWrapper: "px-5 xl:px-12 py-8 xl:py-12 text-center",
    cardTitle: "font-black text-dark-blue text-2xl xl:text-3xl mb-4 px-4 xl:px-6",
    cardDescription: "text-desaturated-blue mb-7 xl:text-lg leading-7 px-4 xl:px-6",
    submitBtn:
      "bg-bright-blue hover:bg-bright-blue/70 text-white font-bold text-base w-full py-3 rounded-xl mt-7 xl:mt-9 mb-8 shadow-xl shadow-bright-blue/30",
    cancelOrder: "font-black text-desaturated-blue hover:text-black",
  },
};

export function Card(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img
          src={heroImage}
          alt="An illustration of a woman enjoying music on her phone."
          className={styles.cardHeroImg}
        />
      </div>
      <div className={styles.cardBody.bodyWrapper}>
        <h1 className={styles.cardBody.cardTitle}>Order Summary</h1>
        <p className={styles.cardBody.cardDescription}>
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere
          you like!
        </p>
        <CardPlan planName="Annual Plan" planPrice="59.99" />
        <button type="button" className={styles.cardBody.submitBtn}>
          Proceed to Payment
        </button>
        <a href="#" className={styles.cardBody.cancelOrder}>
          Cancel Order
        </a>
      </div>
    </div>
  );
}

import React from "react";
import planImage from "../assets/icon-music.svg";

interface ICardPlan {
  planName: string;
  planPrice: string | number;
}

const styles = {
  wrapper: "flex items-center p-5 bg-very-pale-blue rounded-xl",
  image: "mr-6",
  pricing: {
    wrapper: "flex flex-col items-center justify-center",
    title: "font-black",
    price: "text-base text-desaturated-blue",
  },
  link: "ml-auto text-bright-blue hover:text-bright-blue/70 underline hover:no-underline text-sm font-bold",
};

export const CardPlan: React.FC<ICardPlan> = ({ planName, planPrice }) => {
  return (
    <div className={styles.wrapper}>
      <img src={planImage} alt="" className={styles.image} />
      <div className={styles.pricing.wrapper}>
        <p className={styles.pricing.title}>{planName}</p>
        <p className={styles.pricing.price}>{`$${planPrice}/year`}</p>
      </div>
      <a href="#" className={styles.link}>
        Change
      </a>
    </div>
  );
};

import heroImage from "../assets/illustration-hero.svg";
import { CardPlan } from "./CardPlan";

export function Card(): JSX.Element {
  return (
    <div className="rounded-3xl overflow-hidden bg-white w-[340px] xl:w-[480px]">
      <div className="h-40 xl:h-60 w-full overflow-hidden">
        <img
          src={heroImage}
          alt="An illustration of a woman enjoying music on her phone."
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-5 xl:px-12 py-8 xl:py-12 text-center">
        <h1 className="font-black text-dark-blue text-2xl xl:text-3xl mb-4 px-4 xl:px-6">
          Order Summary
        </h1>
        <p className="text-desaturated-blue mb-7 xl:text-lg leading-7 px-4 xl:px-6">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere
          you like!
        </p>
        <CardPlan planName="Annual Plan" planPrice="59.99" />
        <button
          type="button"
          className="bg-bright-blue hover:bg-bright-blue/70 text-white font-bold text-base w-full py-3 rounded-xl mt-7 xl:mt-9 mb-8 shadow-xl shadow-bright-blue/30"
        >
          Proceed to Payment
        </button>
        <a href="#" className="font-black text-desaturated-blue hover:text-black">
          Cancel Order
        </a>
      </div>
    </div>
  );
}

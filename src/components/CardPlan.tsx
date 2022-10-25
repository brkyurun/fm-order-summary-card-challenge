import planImage from "../assets/icon-music.svg";

interface ICardPlan {
  planName: string;
  planPrice: string | number;
}

export function CardPlan({ planName, planPrice }: ICardPlan) {
  return (
    <div className="flex items-center p-5 bg-very-pale-blue rounded-xl">
      <img src={planImage} alt="" className="mr-6" />
      <div className="flex flex-col items-start justify-center">
        <p className="font-black">{planName}</p>
        <p className="text-base text-desaturated-blue">{`$${planPrice}/year`}</p>
      </div>
      <a
        href="#"
        className="ml-auto text-purple-800 underline hover:no-underline text-sm font-bold"
      >
        Change
      </a>
    </div>
  );
}

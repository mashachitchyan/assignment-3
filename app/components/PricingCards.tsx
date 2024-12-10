import React from "react";

interface PricingCardItemProps {
  title: string;
  description: string;
  price: number;
  bgColor: string;
  textColor: string;
  priceColor: string;
  paragraphTextColor: string;
}

const PricingCardItem: React.FC<PricingCardItemProps> = ({
  title,
  description,
  price,
  bgColor,
  textColor,
  priceColor,
  paragraphTextColor
}) => (
  <div className={`flex flex-col 2xl:w-1/3 xl:1/3 lg:1/3 sm:100% md:100% p-6 max-w-lg text-center rounded-3xl ${bgColor}`}>
    <h3 className={`mb-4 2xl:text-2xl xl:text-2xl lg-text-2xl md:text-xl sm:text-xl font-bold ${textColor}`}>{title}</h3>
    <p className={`font-light 2xl:text-lg xl:text-lg lg-text-lg md:text-base sm:text-base ${paragraphTextColor}`}>{description}</p>
    <div className="flex justify-center items-baseline my-8">
      <span className={`mr-2 text-5xl font-extrabold ${priceColor}`}>${price}</span>
      <span className="text-gray-500">/month</span>
    </div>
  </div>
);

function PricingCard() {
  const pricingOptions = [
    {
      title: "Starter",
      description: "Best option for personal use or for smaller scale projects",
      price: 29,
      bgColor: "bg-white-10",
      textColor: "text-white",
      priceColor: "text-white",
      paragraphTextColor: "text-white"
    },
    {
      title: "Professional",
      description: "Relevant for multiple users, extended premium support.",
      price: 49,
      bgColor: "bg-lime",
      textColor: "text-black",
      priceColor: "text-black",
      paragraphTextColor: "text-black"
    },
    {
      title: "Premium",
      description: "Most suited for larger teams, with full premium support",
      price: 99,
      bgColor: "bg-off-black",
      textColor: "text-lime",
      priceColor: "text-lime",
      paragraphTextColor: "text-white"
    },
  ];

  return (
    <div className="2xl:h-[100vh] 2xl:px-64 xl:px-24 lg:px-16 md:px-12 px-8">
      <div className="flex-col text-center pt-2 2xl:pt-0">
        <p className="text-s text-lime uppercase bold-font">Pricing</p>
        <h2 className="text-3xl font-light pb-4 pt-2">Pricing made simple, tailored for you</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center 2xl:h-[40vh] ">
      {pricingOptions.map((option, index) => (
          <PricingCardItem
            key={index}
            title={option.title}
            description={option.description}
            price={option.price}
            bgColor={option.bgColor}
            textColor={option.textColor}
            priceColor={option.priceColor}
            paragraphTextColor={option.paragraphTextColor}
          />
        ))}
      </div>
    </div>
  );
}

export default PricingCard;

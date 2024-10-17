import React from "react";

type SubscriptionCard = {
  planType: string;
  monthlyPrice: number;
  monthlyPriceSubtitle: string;
  listTitle: string;
  benefits: string[];
  promoText: string;
  buttonText: string;
};

type SubscriptionCardProps = {
  card: SubscriptionCard;
};

export default function SubscriptionCard({ card }: SubscriptionCardProps) {
  return (
    <div className='w-[300px] rounded-lg border border-gray-300 p-6 shadow-lg max-w-sm mx-auto bg-white flex flex-col'>
      <div className='text-sm uppercase font-bold text-gray-500 mb-4'>
        {card.planType}
      </div>

      <div className='text-4xl font-extrabold text-gray-800 mb-2'>
        ${card.monthlyPrice}
        <span className='text-sm text-gray-500 ml-1'>
          {card.monthlyPriceSubtitle}
        </span>
      </div>

      <div className='text-lg font-semibold text-gray-700 mb-4'>
        {card.listTitle}
      </div>

      <ul className='mb-6 space-y-2 flex-grow'>
        {card.benefits.map((benefit, index) => (
          <li key={index} className='text-gray-600'>
            • {benefit}
          </li>
        ))}
      </ul>

      <div className='text-sm text-gray-500 mb-4'>{card.promoText}</div>

      <button className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200'>
        {card.buttonText}
      </button>
    </div>
  );
}

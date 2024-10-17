import React from "react";
import type { SubscriptionCard } from "~/types/subscription";

type SubscriptionCardProps = {
  card: SubscriptionCard;
};

export default function SubscriptionCard({ card }: SubscriptionCardProps) {
  return (
    <div className='w-[300px] rounded-lg p-6 shadow-lg max-w-sm mx-auto bg-gray-500 flex flex-col'>
      <div className='text-2xl uppercase font-bold text-gray-200 mb-4'>
        {card.planType}
      </div>

      <div className='text-4xl font-extrabold text-gray-900 mb-2'>
        ${card.monthlyPrice}
        <span className='text-sm text-gray-100 ml-1'>
          {card.monthlyPriceSubtitle}
        </span>
      </div>

      <div className='text-lg font-semibold text-gray-700 mb-4'>
        {card.listTitle}
      </div>

      <ul className='mb-6 space-y-2 flex-grow'>
        {card.benefits.map((benefit, index) => (
          <li key={index} className='font-bold text-white'>
            <span className='text-gray-300 text-lg'>•</span> {benefit}
          </li>
        ))}
      </ul>

      <div className='text-sm text-gray-500 mb-4'>{card.promoText}</div>

      <button className='w-full bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-950 transition duration-200'>
        {card.buttonText}
      </button>
    </div>
  );
}

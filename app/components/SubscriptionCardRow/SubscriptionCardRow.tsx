import React, { Fragment } from "react";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";

type Props = {
  subscriptionCardType: any[];
};

export default function SubscriptionCardRow({ subscriptionCardType }: Props) {
  return (
    <Fragment>
      <div className='flex flex-row gap-4 justify-center items-stretch my-4'>
        {subscriptionCardType &&
          subscriptionCardType.map((card, index) => (
            <SubscriptionCard key={index} card={card} />
          ))}
      </div>
    </Fragment>
  );
}

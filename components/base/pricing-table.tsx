'use client'

import { useState } from 'react';
import Button from './button';
import Link from 'next/link';

interface PricingTabProps {
  yearly: boolean;
  popular?: boolean;
  planName: string;
  price: {
    monthly: number;
    yearly: number;
  };
  planDescription: string;
  features: string[];
}

function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full ${props.popular ? 'dark' : ''}`}>
      <div className="relative flex flex-col h-full p-6 rounded-2xl  bg-background border  border-primary shadow shadow-slate-950/5">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4"></div>
        )}
        <div className="mb-5 text-start font-helvetica">
          <div className="text-slate-900 dark:text-slate-200  text-start font-semibold mb-1">{props.planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-primary  text-xl">R</span>
            <span className="text-primary   text-xl">{props.yearly ? props.price.yearly : props.price.monthly}</span>
            <span className="text-secondary text-xs px-2 font-medium">per month</span>
          </div>
         
          
        </div>
        <ul className="text-textColor font-helvetica font-light text-[13px] space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg className="w-3 h-3 fill-primary mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        <div className="pt-8 text-start">
        <Link href="/">
        <Button color={'primary'}>Sign Up</Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default function PricingTable() {
  const [yearly, setYearly] = useState<boolean>(true);

  return (
    <div>
      {/* Pricing toggle */}
      <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16"> </div>
      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start  lg:max-w-none">
        {/* Pricing tab 1 */}
        <PricingTab
          yearly={yearly}
          planName="All Access Workshop"
          price={{ yearly: 1500.00, monthly: 1500.00 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'Dedicated storage and workspace',
            'Access for 3 members',
            'Unlimited access to tools and machine',
            'Protected from load shedding',
            'Dispatch and goods reciveing',
            'Dedicated trolley',
          ]}
        />

        {/* Pricing tab 2 */}
        <PricingTab
          yearly={yearly}
          popular={true}
          planName="Professional Freelancer"
          price={{ yearly:4539 , monthly: 0 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'No Storage',
            'R499 joining fee for first time members',
            '15 day access valid over 2 months',
            'Multiuser access',
            'Unlimited access to tools and machines',
          ]}
        />

        {/* Pricing tab 3 */}
        <PricingTab
          yearly={yearly}
          planName="Hobbyist"
          price={{ yearly:1500 , monthly: 0 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'No Storage ',
            'R499 joining fee for first time members',
            '3 day access valid over 1 month',
            'Multiuser access',
            'Unlimited access to tools and machines',
            
          ]}
        />
      </div>
    </div>
  );
}

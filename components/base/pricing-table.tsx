'use client'
import Button from './button';
import Link from 'next/link';

interface PricingTabProps {
  planName: string;
  popular?: boolean
  price:  string;
  planDescription: string;
  features: string[];
}

function PricingTab(props: PricingTabProps) {
  const isPopular = props.popular;
  return (
    <div className={`h-full ${isPopular ? 'dark' : ''} ${isPopular ? 'border-4 border-primary' : 'border border-primary border-opacity-60'} rounded-2xl bg-background ${isPopular ? 'border-bold' : 'border-primary'} 2xl:h-96 xl:h-[400px] lg:h-[460px] md:h-[400px]`}>
      <div className="relative flex flex-col p-6 py-8 rounded-2xl 2xl:h-96 xl:h-[400px] lg:h-[460px] md:h-[400px]">
      {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-secondary text-background rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
          </div>
        )}
        {(
          <div className="absolute top-0 right-0 mr-6 -mt-4"></div>
        )}
        <div className="mb-5 text-start font-helvetica">
          <div className="text-secondary font-helvetica text-lg text-start font-semibold mb-1">{props.planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-primary text-xl">R</span>
            <span className="text-primary text-xl">{props.price}</span>
            <span className="text-secondary text-xs px-2 font-medium">/ per month</span>
          </div>
        </div>
        <ul className="text-textColor font-helvetica font-normal text-[13px] space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg className="w-3 h-3 fill-primary mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                </svg>
                <p>{feature}</p>
              </li>
            );
          })}
        </ul>
        <div className="pt-8 text-start">
        <Link href="/becomeAMember">
        <Button color={'primary'}>Sign Up</Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default function PricingTable() {
  
  return (
    <div className="xl:mx-40 2xl:mx-72 lg:mx-16 md:mx-12 sm:mx-32 mx-8">
      {/* Pricing toggle */}
      <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16"> </div>
      <div className="mx-auto grid gap-6 lg:grid-cols-3 md:grid-cols-2 items-start lg:max-w-none px-0">
        {/* Pricing tab 1 */}
        <PricingTab
         
          planName="Monthly Membership"
          price= "8358 to R10999"
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
         popular={true}
          planName="15 Day Membership"
          price= "4992"
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'No Storage',
            'R549 joining fee for first time members',
            '15 day access valid over 2 months',
            'Multiuser access',
            'Unlimited access to tools and machines',
          ]}
        />

        {/* Pricing tab 3 */}
        <PricingTab
       
          planName="3 Day Membership"
          price= "1507"
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'No Storage ',
            'R549 joining fee for first time members',
            '3 day access valid over 1 month',
            'Multiuser access',
            'Unlimited access to tools and machines',
            
          ]}
        />
      </div>
    </div>
  );
}

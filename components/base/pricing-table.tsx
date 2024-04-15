import Button from "./button";
import Link from "next/link";

interface PricingTabProps {
  planName: string;
  popular?: boolean;
  price: string;
  planDescription: string;
  features: string[];
  planIdeal: string;
}

function PricingTab(props: PricingTabProps) {
  const isPopular = props.popular;
  return (
    <div
      className={`h-full ${isPopular ? "dark" : ""} ${isPopular ? "border-4 border-primary" : "border border-primary border-opacity-60"} rounded-2xl bg-background ${isPopular ? "border-bold" : "border-primary"} md:h-[640px] lg:h-[740px] xl:h-[680px] 2xl:h-[600px]`}
    >
      <div className="relative flex flex-col rounded-2xl p-6 py-8 md:h-[400px] lg:h-[460px] xl:h-[400px] 2xl:h-96">
        {props.popular && (
          <div className="absolute right-0 top-0 -mt-4 mr-6">
            <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-background shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        {<div className="absolute right-0 top-0 -mt-4 mr-6"></div>}
        <div className="mb-5 text-start font-helvetica">
          <div className="mb-1 text-start font-helvetica text-lg font-semibold text-secondary">
            {props.planName}
          </div>
          <div className="mb-2 inline-flex items-baseline">
            <span className="text-xl text-primary">R</span>
            <span className="text-xl text-primary">{props.price}</span>
            <span className="px-2 text-xs font-medium text-secondary">
              / per month
            </span>
          </div>
          <p className="pt-8 text-textColor">{props.planDescription}</p>{" "}
          {/* Display plan description */}
        </div>

        <ul className="grow space-y-3 font-helvetica text-[13px] font-normal text-textColor">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="mr-3 h-3 w-3 shrink-0 fill-primary"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <p>{feature}</p>
              </li>
            );
          })}
        </ul>
        <p className="pt-8 font-helvetica text-textColor">{props.planIdeal}</p>
        <div className="pt-8 text-start">
          <Link href="/becomeAMember">
            <Button color={"primary"}>Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PricingTable() {
  return (
    <div className="mx-8 sm:mx-32 md:mx-12 lg:mx-16 xl:mx-40">
      {/* Pricing toggle */}
      <div className="m-auto mb-8 flex max-w-[14rem] justify-center lg:mb-16">
        {" "}
      </div>
      <div className="mx-auto grid items-start gap-6 px-0 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {/* Pricing tab 1 */}
        <PricingTab
          planName="Monthly Membership"
          price="8358 to R10999"
          planDescription="The monthly membership is our premium offering, providing everything you and your team need to bring ambitious projects to life."
          features={[
            "Dedicated Storage and Workspace",
            "Access for 3 Members",
            "R499 Joining Fee for First-Time Members",
            "Unlimited Access to Tools and Machines",
            "Protected from Load Shedding",
            "Dispatch and Goods Receiving Services",
          ]}
          planIdeal="Ideal for small teams and serious makers committed to making their mark."
        />

        {/* Pricing tab 2 */}
        <PricingTab
          popular={true}
          planName="15 Day Membership"
          price="4992"
          planDescription="Tailored for freelancers who require flexibility and access to professional tools without the commitment of a full-time space."
          features={[
            "No Storage",
            "R499 Joining Fee for First-Time Members",
            "15-Day Access Valid Over 2 Months",
            "Multi-user Access",
            "Unlimited Access to Tools and Machines",
            "Protected from Load Shedding",
          ]}
          planIdeal="Perfect for freelancers who need a professional workspace on a part-time basis."
        />

        {/* Pricing tab 3 */}
        <PricingTab
          planName="3 Day Membership"
          price="1507"
          planDescription="The three-day membership is crafted for enthusiasts exploring their creativity and working on personal projects."
          features={[
            "No Storage",
            "R499 Joining Fee for First-Time Member",
            "3-Day Access Valid Over 1 Month",
            "Multi-user Access",
            "Unlimited Access to Tools and Machines",
            "Protected from Load Shedding",
          ]}
          planIdeal="Ideal for hobbyists seeking a supportive environment to explore new projects."
        />
      </div>
    </div>
  );
}

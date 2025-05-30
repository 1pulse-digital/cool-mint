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
      className={`h-full ${isPopular ? "dark" : ""} ${isPopular ? "border-4 border-primary" : "border border-primary border-opacity-60"} rounded-2xl bg-background ${isPopular ? "border-bold" : "border-primary"} md:h-[680px] lg:h-[700px] xl:h-[640px] 2xl:h-[600px]`}
    >
      <div className="relative flex flex-col rounded-2xl p-6 py-8 md:h-[400px] lg:h-[460px] xl:h-[400px] 2xl:h-96">
        {props.popular && (
          <div className="absolute right-0 top-0 -mt-4 mr-6">
            <div className="inline-flex items-center rounded-full bg-foreground px-3 py-1.5 sm:text-Body text-sm font-semibold text-background shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        {<div className="absolute right-0 top-0 -mt-4 mr-6"></div>}
        <div className="mb-5 text-start font-helvetica">
          <div className="mb-1 text-start font-helvetica text-lg font-semibold text-foreground">
            {props.planName}
          </div>
          <div className="mb-2 inline-flex items-baseline">
            <span className="text-xl text-primary">R</span>
            <span className="text-xl text-primary">{props.price}</span>
            <span className="px-2 sm:text-Body text-sm font-medium text-foreground">
              / per month
            </span>
          </div>
          <p className="pt-8 text-muted-foreground sm:text-Body text-sm">{props.planDescription}</p>{" "}
        </div>

        <ul className="grow space-y-3 font-helvetica sm:text-Body text-sm font-normal text-muted-foreground">
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
        <p className="pt-8 font-helvetica text-muted-foreground">{props.planIdeal}</p>
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
    <div className="mx-8 sm:mx-12 md:mx-12 lg:mx-8 xl:mx-16 2xl:mx-40">
      {/* Pricing toggle */}
      <div className="m-auto mb-8 flex max-w-[14rem] justify-center lg:mb-16">
      </div>
      <div className="mx-auto grid items-start gap-6 px-0 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {/* Pricing tab 1 */}
        <PricingTab
          popular={true}
          planName="3 Day Membership"
          price="1899"
          planDescription="The three-day membership is crafted for enthusiasts exploring their creativity and working on personal projects."
          features={[
            "No Storage",
            "R499 Joining Fee for First-Time Member",
            "3-Day Access Valid Over 1 Month",
            "Can be used by multiple users simutanueously",
            "Unlimited Access to Tools and Machines",
            "No dispatch or receiving",
            "Protected from Load Shedding",
          ]}
          planIdeal="Ideal for first timers and startups."
        />

        {/* Pricing tab 2 */}
        <PricingTab
          planName="15 Day Membership"
          price="6699"
          planDescription="Tailored for freelancers who require flexibility and access to professional tools without the commitment of a full-time space."
          features={[
            "No Storage",
            "R499 Joining Fee for First-Time Members",
            "15-Day Access Valid Over 2 Months",
            "Can be used by multiple users simutanueously",
            "Unlimited Access to Tools and Machines",
            "No dispach or receiving",
            "Protected from Load Shedding",
          ]}
          planIdeal="Perfect for freelancers who need a professional workspace on a part-time basis."
        />

        {/* Pricing tab 3 */}
        <PricingTab
          planName="30 Days Membership"
          price="7999"
          planDescription="The monthly membership is our premium offering, providing everything you and your team need to bring ambitious projects to life."
          features={[
            "No Storage",
            "R499 Joining Fee for First-Time Members",
            "30 days vaild of 3 months",
            "Can be used by multiple user simutanueously",
            "Unlimited Access to Tools and Machines",
            "Dispatch and Goods Receiving Services",
            "Protected from Load Shedding",
          ]}
          planIdeal="Ideal for small teams and serious makers committed to making their mark."
        />
      </div>
    </div>
  )
}

import Button from "./button"
import Link from "next/link"

interface PricingTabProps {
  planName: string
  popular?: boolean
  price: string
  planDescription: string
  features: string[]
  planIdeal: string
}

function PricingTab(props: PricingTabProps) {
  const isPopular = props.popular
  return (
    <div
      className={`h-full ${isPopular ? "dark" : ""} ${isPopular ? "border-4 border-primary" : "border border-primary border-opacity-60"} rounded-2xl bg-background ${isPopular ? "border-bold" : "border-primary"}`}
    >
      <div className="relative flex h-full flex-col rounded-2xl p-6 py-8">
        {props.popular && (
          <div className="absolute right-0 top-0 -mt-4 mr-6">
            <div className="inline-flex items-center rounded-full bg-foreground px-3 py-1.5 text-sm font-semibold text-background shadow-sm shadow-slate-950/5 sm:text-Body">
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
            <span className="px-2 text-sm font-medium text-foreground sm:text-Body">
              / Vat Incl
            </span>
          </div>
          <p className="pt-8 text-sm text-muted-foreground sm:text-Body">
            {props.planDescription}
          </p>{" "}
        </div>

        <ul className="space-y-3 font-helvetica text-sm font-normal text-muted-foreground sm:text-Body">
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
            )
          })}
        </ul>
        <div className="mt-auto">
          <p className="pt-8 font-helvetica text-muted-foreground">
            {props.planIdeal}
          </p>
          <div className="pt-8 text-start">
            <Link href="/becomeAMember">
              <Button color={"primary"}>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PricingTable() {
  return (
    <div className="mx-8 sm:mx-12 md:mx-12 lg:mx-8 xl:mx-16 2xl:mx-28">
      {/* Pricing toggle */}
      <div className="m-auto mb-8 flex max-w-[14rem] justify-center lg:mb-16"></div>
      <div className="mx-auto grid items-start gap-6 px-0 md:grid-cols-2 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
        {/* Pricing tab 1 : 1 Day Membership */}
        <PricingTab
          planName="1 Day Membership"
          price="899"
          planDescription="The one day access is for the user who needs short term access to the workshop and machinery. CNC machines are excluded."
          features={[
            "No storage",
            "No joining fee",
            "1-day access",
            "Single user",
            "Limited access. No access to CNC machines",
            "No dispatch or receiving",
            "Protected from load shedding",
          ]}
          planIdeal="Ideal for that quick one day job. Hobbyist etc."
        />
        {/* Pricing tab 2 : 3 Day Membership */}
        <PricingTab
          popular={true}
          planName="3 Day Membership"
          price="2099"
          planDescription="The three-day membership is crafted for
enthusiasts exploring their creativity and
working on personal projects. 3 days of
access over one month."
          features={[
            "No storage",
            "R499 joining fee for first-time members",
            "3-day access valid over 1 month",
            "Single user",
            "Unlimited access to tools and machines",
            "No dispatch or receiving",
            "Protected from load shedding",
          ]}
          planIdeal="Ideal for first timers and startups."
        />

        {/* Pricing tab 3 : 15 Day Membership */}
        <PricingTab
          planName="15 Day Membership"
          price="7299"
          planDescription="Tailored for freelancers who require
flexibility and access to professional tools
without the commitment of a full-time
space. 15 days of access over 2 months."
          features={[
            "No storage",
            "R499 joining fee for first-time members",
            "15-day access valid over 2 months",
            "Can be used by multiple users simultaneously. One user equals one day",
            "Unlimited access to tools and machines",
            "No dispatch or receiving",
            "Protected from load shedding",
          ]}
          planIdeal="Perfect for freelancers or teams who need
a professional workspace on a part-time
basis."
        />

        {/* Pricing tab 4 : 30 Day Membership */}
        <PricingTab
          planName="30 Day Membership"
          price="8799"
          planDescription="The monthly membership is our
premium offering, providing everything
you and your team need to bring
ambitious projects to life. 30 days
access over 3 months."
          features={[
            "No storage",
            "R499 joining fee for first-time members",
            "30-day access valid over 3 months",
            "Can be used by multiple users simultaneously. One user equals one day",
            "Unlimited access to tools and machines",
            "Dispatch and goods receiving services",
            "Protected from load shedding",
          ]}
          planIdeal="Ideal for small teams and serious
makers committed to making their mark."
        />
      </div>
    </div>
  )
}

import { Check, Info } from "lucide-react";

const plans = [
  {
    title: "Free",
    subtitle: "Write without spelling and grammar mistakes.",
    price: "$0 USD/month",
    features: [
      "Write without mistakes",
      "See your writing tone",
      "Generate text with 100 AI prompts",
    ],
    buttonText: "Current plan",
    buttonDisabled: true,
  },
  {
    title: "Student",
    subtitle: "Ace your assignments with clear and confident writing.",
    originalPrice: "$12 USD",
    trialMessage: "Try for free",
    trialNote: "We'll remind you by email 2 days before your trial ends.",
    buttonText: "Start 7-Day Trial",
    highlight: "Best for school",
    features: [
      "Rewrite full sentences with a click",
      "Detect plagiarism and AI-generated text",
      "Instant citations in APA, MLA, Chicago",
      "Unlimited personalized suggestions",
      "Write fluently in English",
      "Generate text with 2,000 AI prompts",
    ],
  },
  {
    title: "Pro",
    subtitle: "Drive results across your entire organization with trusted AI.",
    buttonText: "Contact Sales",
    features: [
      "Dedicated support",
      "BYOK encryption",
      "Custom roles and permissions",
      "Data loss prevention",
      "Cost center visibility",
      "Generate text with unlimited AI prompts",
    ],
  },
];

const comparisonFeatures = [
  { name: "Write without mistakes", free: true, student: true, pro: true },
  { name: "See your writing tone", free: true, student: true, pro: true },
  {
    name: "Adjust your writing tone",
    free: false,
    student: true,
    pro: true,
  },
  { name: "Rewrite full sentences", free: false, student: true, pro: true },
  {
    name: "Write fluently in English",
    free: false,
    student: true,
    pro: true,
  },
  { name: "Use inclusive language", free: false, student: true, pro: true },
  {
    name: "Keep your citations consistent",
    free: false,
    student: true,
    pro: true,
  },
  {
    name: "Catch accidental plagiarism",
    free: false,
    student: true,
    pro: true,
  },
  {
    name: "Generate text with AI prompts",
    free: "100 prompts/month",
    student: "2,000 prompts/member/month",
    pro: "Unlimited",
  },
  {
    name: "Complete workflows from Grammarly",
    free: "Limited",
    student: "Full",
    pro: "Full",
  },
];

export default function WritingBuddyPricing() {
  return (
    <div className="min-h-screen bg-[var(--color-gradient-from)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-primary)]">
          Pricing Plans
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                index === 1 ? "border-2 border-[var(--color-primary)]" : ""
              }`}
            >
              {plan.highlight && (
                <div className="bg-[var(--color-primary)] text-white text-center py-2 font-semibold">
                  {plan.highlight}
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-[var(--color-text-primary)]">
                  {plan.title}
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  {plan.subtitle}
                </p>
                {plan.price && (
                  <p className="text-3xl font-bold mb-4 text-[var(--color-text-primary)]">
                    {plan.price}
                  </p>
                )}
                {plan.originalPrice && (
                  <div className="mb-4">
                    <span className="line-through text-gray-400 mr-2">
                      {plan.originalPrice}
                    </span>
                    <span className="text-green-500 font-semibold">
                      {plan.trialMessage}
                    </span>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                      {plan.trialNote}
                    </p>
                  </div>
                )}
                <button
                  className={`w-full py-2 px-4 rounded-md font-semibold ${
                    index === 1
                      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]"
                      : index === 2
                      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]"
                      : "bg-gray-200 text-[var(--color-text-secondary)]"
                  } ${
                    plan.buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={plan.buttonDisabled}
                >
                  {plan.buttonText}
                </button>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-[var(--color-text-secondary)]"
                    >
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-[var(--color-text-primary)]">
              Compare Plans
            </h2>
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)]">
              Writing Features
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-gradient-from)]">
                    <th className="py-2 px-4 text-left text-[var(--color-text-primary)]">
                      Feature
                    </th>
                    <th className="py-2 px-4 text-center text-[var(--color-text-primary)]">
                      Free
                    </th>
                    <th className="py-2 px-4 text-center text-[var(--color-text-primary)] bg-[var(--color-gradient-to)]">
                      Student
                    </th>
                    <th className="py-2 px-4 text-center text-[var(--color-text-primary)]">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[var(--color-hover)]" : ""
                      }
                    >
                      <td className="py-2 px-4 flex items-center text-[var(--color-text-primary)]">
                        {feature.name}
                        <Info className="h-4 w-4 text-[var(--color-text-secondary)] ml-2 cursor-help" />
                      </td>
                      <td className="py-2 px-4 text-center">
                        {typeof feature.free === "boolean" ? (
                          feature.free ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">-</span>
                          )
                        ) : (
                          feature.free
                        )}
                      </td>
                      <td className="py-2 px-4 text-center">
                        {typeof feature.student === "boolean" ? (
                          feature.student ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">-</span>
                          )
                        ) : (
                          feature.student
                        )}
                      </td>
                      <td className="py-2 px-4 text-center">
                        {typeof feature.pro === "boolean" ? (
                          feature.pro ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-300">-</span>
                          )
                        ) : (
                          feature.pro
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

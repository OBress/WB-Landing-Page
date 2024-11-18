import { Check, Info } from "lucide-react";
import { plans, comparisonFeatures } from "./pricingData";

export default function WritingBuddyPricing({ hasPurchased = false }) {
  return (
    <div className="min-h-screen bg-[var(--color-gradient-from)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-20 text-[var(--color-text-primary)]">
          Pricing Plans
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={plan.title} className="relative">
              {plan.highlight && (
                <div className="absolute -top-10 left-0 right-0 bg-[var(--color-primary)] text-white text-center py-2 mb-4 font-semibold rounded-t-lg flex items-center justify-center gap-2 translate-y-2">
                  {plan.highlight}
                </div>
              )}
              <div
                className={`bg-white rounded-lg shadow-lg overflow-hidden h-full ${
                  index === 1 ? "border-2 border-[var(--color-primary)]" : ""
                }`}
              >
                <div className="p-6 h-full flex flex-col">
                  <h2 className="text-2xl font-bold mb-2 text-[var(--color-text-primary)]">
                    {plan.title}
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    {plan.subtitle}
                  </p>
                  {plan.price ? (
                    <div className="text-center mb-4">
                      <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                        {plan.price}
                      </p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        per month
                      </p>
                    </div>
                  ) : (
                    <div className="mb-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-3xl font-bold text-[var(--color-text-primary)] line-through opacity-50">
                          {plan.originalPrice}
                        </p>
                        {!hasPurchased && plan.discountedPrice && (
                          <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                            {plan.discountedPrice}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                        per month
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
                  <ul className="mt-6 space-y-4 flex-1">
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

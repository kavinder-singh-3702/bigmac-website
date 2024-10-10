import Image from "next/image";
import { useForm } from "@/hooks/use-form";
import { priceFormatter } from "@/util/price-formatter";

export function PlanCard({
  plan,
  icon,
  isSelected,
  handleSelectPlan,
  freeTrialDescription,
}) {
  const { isYearly } = useForm();
  const planType = isYearly ? "yearly" : "monthly";

  return (
    <button
      className={`
        flex gap-4 justify-start items-center w-full rounded border-[1px] border-border-grey bg-white p-4 transition duration-200
        hover:border-purple-400 hover:bg-very-light-grey 
        ${isSelected ? "border-purple-700 bg-gray-400" : ""}
        sm:flex-col sm:gap-0 sm:justify-between sm:items-start sm:h-[181px]
      `}
      onClick={() => handleSelectPlan({ name: plan.name, price: plan.price })}
    >
      <Image src={icon} alt="Plan icon" width={40} height={40} />
      <div className="flex flex-col gap-1 items-start">
        <strong className="text-base font-medium text-denim">
          {plan.name}
        </strong>

        <span className="text-sm font-normal text-gray-500 leading-5">
          {priceFormatter(plan.price[planType], isYearly)}
        </span>

        {isYearly && freeTrialDescription && (
          <span className="hidden text-xs font-normal text-denim sm:block">
            {freeTrialDescription}
          </span>
        )}

        {/* Add the list of features */}
        {/* <ul className="text-xs text-gray-500 leading-5">
          {plan.features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul> */}
      </div>
    </button>
  );
}

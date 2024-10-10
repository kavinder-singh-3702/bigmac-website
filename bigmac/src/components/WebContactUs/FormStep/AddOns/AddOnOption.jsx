import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { useForm } from "@/hooks/use-form";
import { priceFormatter } from "@/util/price-formatter";

export function AddOnOption({
  addOn,
  isSelected,
  handleSelectAddon,
  handleUnselectedAddon,
}) {
  const { isYearly } = useForm();

  const planType = isYearly ? "yearly" : "monthly";

  function handleClick() {
    if (isSelected) {
      handleUnselectedAddon(addOn);
    } else {
      handleSelectAddon(addOn);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center gap-4 px-4 py-3 bg-white rounded-lg border-gray-300 border
        ${isSelected ? "border-purple-500 bg-gray-100" : ""}
        hover:border-purple-500 duration-200 hover:bg-gray-200
        sm:gap-6 sm:px-6
      `}
    >
      <Checkbox.Root
        className={`
            rounded h-5 w-5 flex items-center justify-center border border-black 
            duration-200 
            ${isSelected ? "bg-purple-600" : "bg-white"}
            hover:bg-purple-400  // Darker on hover
          `}
        checked={isSelected}
        onCheckedChange={() => handleClick()} // Handle checked change
      >
        <Checkbox.Indicator className="text-white">
          <CheckIcon width={20} height={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div className="flex flex-col gap-1 items-start">
        <strong className="text-sm text-blue-600 font-medium sm:text-base">
          {addOn.title}
        </strong>
        <span className="text-xs text-gray-600 font-normal sm:text-sm">
          {addOn.description}
        </span>
      </div>
      <span className="text-xs text-purple-600 font-normal leading-5 ml-auto sm:text-sm ">
        {"+" + priceFormatter(addOn.price[planType], isYearly)}
      </span>
    </button>
  );
}

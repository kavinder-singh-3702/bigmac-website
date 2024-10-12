
export function Step({ step, isActive = false }) {
  return (
    <div className="flex items-center gap-6 group">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
          ${isActive ? "bg-gradient-to-r from-cyan-400 to-blue-600" : "bg-gray-700"}
          border-2 ${isActive ? "border-blue-500" : "border-gray-500"}
          group-hover:scale-110 shadow-md`}
      >
        <span
          className={`text-base font-semibold transition-colors duration-300
            ${isActive ? "text-white" : "text-gray-300"}`}
        >
          {step.number}
        </span>
      </div>
      <div className="hidden sm:flex sm:flex-col">
        <span className="text-xs text-blue-300 font-light tracking-wide">
          STEP {step.number}
        </span>
        <strong
          className="text-sm text-white font-bold uppercase tracking-widest transition-all
            group-hover:text-blue-400"
        >
          {step.title}
        </strong>
      </div>
    </div>
  );
}


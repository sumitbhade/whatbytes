import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils";

const Progress = React.forwardRef(
  ({ className, value, variant, ...props }, ref) => {
    const getVariantColor = () => {
      switch (variant) {
        case "blue":
          return "bg-blue-600";
        case "orange":
          return "bg-orange-500";
        case "red":
          return "bg-red-500";
        case "green":
          return "bg-green-500";
        default:
          return "bg-blue-600";
      }
    };

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-gray-100",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all",
            getVariantColor()
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };

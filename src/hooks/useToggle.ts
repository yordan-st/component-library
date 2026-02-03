import { useState } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate.ts";

// Options for the useToggle hook
interface UseToggleOptions {
  initialValue?: boolean;
  onToggle?: () => void;
}

export default function useToggle(options: UseToggleOptions = {}): {
  on: boolean;
  toggle: () => void;
} {
  // Destructure options with default values
  const { initialValue = false, onToggle = () => {} } = options;
  // Implementation of useToggle hook
  const [on, setOn] = useState(initialValue);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  // Call onToggle callback on state change
  useEffectOnUpdate(onToggle, [on]);

  return { on, toggle };
}

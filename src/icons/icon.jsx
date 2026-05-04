import { icons } from "./index";

export default function Icon({ name }) {
  return (
    <svg viewBox="0 0 12.5851 8.14286" className="icon">
      {icons[name]}
    </svg>
  );
}
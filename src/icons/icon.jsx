import { icons } from "./index";

export default function Icon({ name }) {
  const icon = icons[name];

  if (!icon) return null;

  return (
    <svg
      viewBox={icon.viewBox}
      className="icon"
    >
      {icon.paths}
    </svg>
  );
}
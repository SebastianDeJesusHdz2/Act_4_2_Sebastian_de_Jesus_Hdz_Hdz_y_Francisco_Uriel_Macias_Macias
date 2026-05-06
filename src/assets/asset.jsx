import { assets } from "./index";

export default function Asset({ name }) {
  const asset = assets[name];

  if (!asset) return null;

  return (
    <svg
      viewBox={asset.viewBox}
      className="asset"
    >
      {asset.paths}
    </svg>
  );
}
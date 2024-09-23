import "./HeadlinerBadge.scss";

export interface HeadlinerBadgeProps {
  name: string;
  bgColor: string;
  borderColor: string;
}

const HeadlinerBadge = ({
  name,
  bgColor,
  borderColor,
}: HeadlinerBadgeProps) => {
  return (
    <span
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
      className="headliner-badge"
    >
      @{name}
    </span>
  );
};

export default HeadlinerBadge;

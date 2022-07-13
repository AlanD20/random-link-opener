interface Props {
  name: string;
  label: string;
  value: boolean | undefined;
  onClick: any;
  disabled?: boolean;
  className?: string;
}

const ToggleInput = ({
  name,
  value,
  label,
  onClick,
  className = '',
  disabled = false,
}: Props) => {
  return (
    <div className="form-control px-20 bg-slate-100 rounded-lg py-2">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text text-lg text-gray-900">{label}</span>
        <input
          id={name}
          type="checkbox"
          className={`toggle ${className}`}
          defaultChecked={value}
          onClick={onClick}
          disabled={disabled}
        />
      </label>
    </div>
  );
};

export default ToggleInput;

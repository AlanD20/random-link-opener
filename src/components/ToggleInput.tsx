import { useState } from 'react';

interface Props {
  name: string;
  label: string;
  className?: string;
  value: boolean | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ToggleInput = ({
  name,
  value,
  label,
  className = '',
  onChange,
}: Props) => (
  <div className="form-control px-20 bg-slate-100 rounded-lg py-2">
    <label htmlFor={name} className="label cursor-pointer">
      <span className="label-text text-lg text-gray-900">{label}</span>
      <input
        id={name}
        type="checkbox"
        className={'toggle ' + className}
        defaultChecked={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default ToggleInput;

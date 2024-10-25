import { FunctionComponent, SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { value: string; label: string }[];
}

const Select: FunctionComponent<SelectProps> = ({ label, options, ...props }) => {
    return (
        <div className="flex flex-col mb-4">
            {label && <label className="mb-2 font-semibold text-gray-700">{label}</label>}
            <select
                className="border border-gray-300 rounded-[6px] px-4 py-3 focus:outline-none focus:border-blue-500 leading-title"
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;

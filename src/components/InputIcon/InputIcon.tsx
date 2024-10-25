import { FunctionComponent, InputHTMLAttributes, ReactNode } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: ReactNode; // Allows passing any JSX for an icon
}

const InputIcon: FunctionComponent<Props> = ({ label, icon, ...props }) => {
    return (
        <div className="flex flex-col mb-4">
            {label && <label className="mb-2 font-semibold text-gray-700">{label}</label>}
            <div className="relative flex items-center">
                {icon && (
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        {icon}
                    </span>
                )}
                <input
                    className={`border border-gray-300 rounded-[8px] px-3 py-2 pl-${icon ? '10' : '3'} focus:outline-none focus:border-blue-500 w-full`}
                    {...props}
                />
            </div>
        </div>
    );
};

export default InputIcon;


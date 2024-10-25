import { FunctionComponent, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const SubmitButton: FunctionComponent<ButtonProps> = ({ label, className, ...props }) => {
    return (
        <button
            className={`w-[129px] h-[40px] px-[12px] py-[8px] gap-[8px] rounded-[8px] opacity-0 bg-[#3C6CE7] ${className}`}
            {...props}
        >
            {label}
        </button>
    );
};

export default SubmitButton;

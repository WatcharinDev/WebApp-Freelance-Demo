import { FunctionComponent, TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const TextArea: FunctionComponent<TextAreaProps> = ({ label, ...props }) => {
    return (
        <div className="flex flex-col mb-4">
            {label && <label className="mb-2 font-semibold text-gray-700">{label}</label>}
            <textarea
                className="border border-gray-400 rounded-[8px] px-3 py-2 focus:outline-none focus:border-blue-500"
                {...props}
            />
        </div>
    );
}

export default TextArea;
import { NextPage } from 'next'
import { FunctionComponent, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: FunctionComponent<Props> = ({ label, ...props }) => {
    return (<div className="flex flex-col mb-4">
        {label && <label className="mb-2 font-semibold text-gray-700">{label}</label>}
        <input
            className="border border-gray-400 rounded-[6px] px-3 py-2 focus:outline-none focus:border-blue-500 "
            {...props}
        />
    </div>)
}

export default Input
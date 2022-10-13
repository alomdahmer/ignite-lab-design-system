import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputProps) {
    return (
        <div
            className={clsx(
                "py-4 px-3 flex items-center h-12 gap-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300"
            )}
        >
            {props.children}
        </div>
    );
}

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

export interface TextInputInputProps
    extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 w-full outline-none"
            {...props}
        />
    );
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
};

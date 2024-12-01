/// <reference types="react" />
export interface DropdownProps {
    options: {
        label: string;
        value: string;
    }[];
    disabled?: boolean;
    backgroundColor?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
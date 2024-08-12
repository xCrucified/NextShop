import React from "react";
import { FilterCheckbox, Title } from "./lib";
import { Input } from "../ui/lib";
import { RangeSlider } from "./range-slider";

interface Props{
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Filtration" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Man" value="1"/>
                <FilterCheckbox text="Woman" value="2"/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7s">
                <p className="font-bold mb-3">price min and max: </p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={7999} />
                    <Input type="number" placeholder="7999" min={100} max={7999} />
                </div>

                <RangeSlider min={0} max={7999} step={1} value={[0, 7999]} />
            </div>
        </div>
    )
}
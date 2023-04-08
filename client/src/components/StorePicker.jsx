import React from "react";
import CustomButton from "./CustomButton";

const StorePicker = () => {
    return (
        <div className="storepicker-container">
            <span className="text-white uppercase">Print Design</span>
            <div className="flex-wrap">
                <CustomButton
                    type="outlined"
                    title="Printful"
                    handleClick={() => {
                        window.open("https://printful.com", "_blank");
                    }}
                    customStyles="text-xs mt-2 mr-1"
                />
                <CustomButton
                    type="outlined"
                    title="Printify"
                    handleClick={() => {
                        window.open("https://printful.com", "_blank");
                    }}
                    customStyles="text-xs mt-2 mr-1"
                />
                <CustomButton
                    type="outlined"
                    title="Bonfire"
                    handleClick={() => {
                        window.open("https://bonfire.com", "_blank");
                    }}
                    customStyles="text-xs mt-2 mr-1"
                />
                <CustomButton
                    type="outlined"
                    title="Kin Custom"
                    handleClick={() => {
                        window.open("https://kincustom.com", "_blank");
                    }}
                    customStyles="text-xs mt-2 mr-1"
                />
                <CustomButton
                    type="outlined"
                    title="CustomCat"
                    handleClick={() => {
                        window.open("https://customink.com", "_blank");
                    }}
                    customStyles="text-xs mt-2 mr-1"
                />
                <CustomButton
                    type="outlined"
                    title="Contrado"
                    handleClick={() => {
                        window.open("https://contrado.com", "_blank");
                    }}
                    customStyles="text-xs mt-2 mr-1"
                />
                <CustomButton
                    type="filled"
                    title="Point Blanks"
                    handleClick={() => {
                        window.open("https://pointblanks.xyz", "_blank");
                    }}
                    customStyles="text-xs mt-2 mr-1"
                />
            </div>
        </div>
    );
};
export default StorePicker;

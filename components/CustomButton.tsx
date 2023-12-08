"use client";

import { CustomButtonProps } from "@/types";
import React from 'react';
import Image from 'next/image';

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon}:CustomButtonProps) => {
  return (
    <button
    disabled={'flase'}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}` }
    onClick={()=> {}}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
  )
}

export default CustomButton
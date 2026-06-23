import React from 'react';
import { Sparkles, ArrowRight, Zap, Target, Bookmark } from "lucide-react";

export default function Hero(){
    const handleScrollToForm = () => {
        const fromSection = document.getElementsById("idea-generator-form-section");
        if(fromSection){
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    }
}
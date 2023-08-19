import * as React from 'react';

export const handlePrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
};

export const fileToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

export function roundDecimal(number: number) {
    var roundedNumber = Math.round(number);
    var decimalPart = roundedNumber % 1;
    if (decimalPart >= 0.5) {
        return Math.ceil(number);
    } else {
        return Math.floor(number);
    }
}

export const generateRange = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (item, index) => start + index);
};

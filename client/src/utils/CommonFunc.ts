import { pid } from 'process';

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

export const getCodePrice = (price: number): string => {
    const priceNew = price / 1000000;
    switch (true) {
        case priceNew < 1:
            return 'OU1N';
        case priceNew >= 1 && priceNew < 2:
            return '1U2N';
        case priceNew >= 2 && priceNew < 3:
            return '2U3N';
        case priceNew >= 3 && priceNew < 5:
            return '3U5N';
        case priceNew >= 5 && priceNew < 7:
            return '5U7N';
        case priceNew >= 7 && priceNew < 10:
            return '7U0N';
        case priceNew >= 10 && priceNew < 15:
            return '1E1N';
        case priceNew >= 15:
            return 'EU5N';
        default:
            return '';
    }
};
export const getCodeArea = (area: number): string => {
    switch (true) {
        case area < 20:
            return 'ON2E';
        case area >= 20 && area < 30:
            return '2UMD';
        case area >= 30 && area < 50:
            return '3UMD';
        case area >= 50 && area < 70:
            return '5UMD';
        case area >= 70 && area < 90:
            return '7UMD';
        case area >= 90:
            return 'EN9E';
        default:
            return '';
    }
};

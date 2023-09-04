export function createImageObjects(images: any[]): any[] {
    const indexes = [0, 1, 2, 3];
    const imageObjects: any[] = [];
    images.filter((item, index) => indexes.includes(index)).forEach((item) => imageObjects.push(item));
    return imageObjects;
}

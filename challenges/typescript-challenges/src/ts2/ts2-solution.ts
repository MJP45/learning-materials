function isPrimary(color: string): boolean {
    return (color === "red") || (color === "yellow") || (color === "blue");
}

/**
 * Take in a list of colours and an index number. Check if the item at that index
 * is a primary colour, if not make that colour red
 * @param {string[]} colorAray list of colours to check.
 * @param {number} index The users last name.
 * @return {string[]} list of updated colours.
 */
export const fixColors = (colorArray: string[], index: number): string[] => {
    const clonedArray = colorArray.slice(0);
    if (!isPrimary(clonedArray[index])) {
      clonedArray[index] = "red";
    }
    return clonedArray;
}

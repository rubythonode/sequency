import {sequenceOf} from "../src/Sequence";

test('filterIndexed', () => {
    const array = sequenceOf(1, 2, 3)
        .filterIndexed((index, value) => index < 2)
        .toArray();

    expect(array.length).toBe(2);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
});
import Sequence from "./Sequence";
import {IterableIterator} from "./SequenceIterator";

/**
 * Returns a new sequence with all elements sorted ascending in natural order.
 *
 * @returns {Sequence<T>}
 */
function sorted<T>(this: Sequence<T>): Sequence<T> {
    const sorted: Array<T> = [];
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        sorted.push(item);
    }
    sorted.sort();
    return new Sequence(new IterableIterator(sorted));
}

export default sorted;
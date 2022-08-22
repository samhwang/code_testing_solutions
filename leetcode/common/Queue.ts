/**
 * @link https://leetcode.com/problems/implement-queue-using-stacks/
 */

interface IQueue<T> {
    push(value: T): void;
    pop(): T;
    peek(): T;
    empty(): boolean;
}

class Queue<T> implements IQueue<T> {
    private storage: T[] = [];

    push(value: T): void {
        this.storage.push(value);
    }

    pop(): T {
        if (this.empty()) {
            throw new Error('Queue is Empty');
        }

        return this.storage.shift()!;
    }

    peek(): T {
        if (this.empty()) {
            throw new Error('Queue is Empty');
        }
        return this.storage[0];
    }

    empty(): boolean {
        return this.storage.length === 0;
    }
}

class Queue2Stack<T> implements IQueue<T> {
    private stack: T[] = [];
    private queue: T[] = [];
    private top: T | undefined = undefined;

    push(value: T): void {
        if (this.stack.length === 0) {
            this.top = value;
        }
        this.stack.push(value);
    }

    pop(): T {
        if (this.queue.length === 0) {
            while (this.stack.length > 0) {
                const topOfStack = this.stack.pop()!;
                this.queue.push(topOfStack);
            }
        }
        return this.queue.pop()!;
    }

    peek(): T {
        if (this.queue.length > 0) {
            return this.queue[this.queue.length - 1];
        }
        return this.top!;
    }

    empty(): boolean {
        return this.stack.length === 0 && this.queue.length === 0;
    }
}

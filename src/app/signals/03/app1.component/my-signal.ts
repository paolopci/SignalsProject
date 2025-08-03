

export type MySignal<T> = () => T;


export function mysignal<T>(value: T): MySignal<T> {
    return () => value;
}
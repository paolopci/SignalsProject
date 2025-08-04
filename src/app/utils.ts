import { DestroyRef, inject } from "@angular/core";
import { interval } from "rxjs";

export function startCounting() {
    let count = 0;
    const rd = inject(DestroyRef);
    const sub = interval(1000).subscribe(() => {
        console.log(`Counter: ${count++}`);

        rd.onDestroy(() => sub.unsubscribe());
    });
}
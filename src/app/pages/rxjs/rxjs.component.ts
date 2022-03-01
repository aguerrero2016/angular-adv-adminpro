import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styles: [
    ]
})
export class RxjsComponent implements OnDestroy {

    public intervaloSubs: Subscription;
    constructor() {

        // this.retornaObservable().pipe(
        //     retry(3)
        // ).subscribe({
        //     next(valor) { console.log('Subs:', valor) },
        //     error(err) {console.warn('Error:', err) },
        //     complete() { console.info('Obs terminado') }
        // });

        this.intervaloSubs = this.retornaIntervalo()
            .subscribe(console.log);
    }
    ngOnDestroy(): void {
        this.intervaloSubs.unsubscribe();
    }

    retornaIntervalo(): Observable<number> {
        return interval(100)
            .pipe(
                //el orden (map, take, filter) es importante 
                map(valor => { return (valor + 1); }),
                //take(10),
                filter( valor => (valor % 2 === 0)? true: false),
            );
    }

    retornaObservable(): Observable<number> {
        let i = -1;
        const obs$ = new Observable<number>(observer => {
            const intervalo = setInterval(() => {
                i++;
                observer.next(i);
                if (i === 4) {
                    clearInterval(intervalo);
                    observer.complete();
                }
                if (i === 2) {
                    observer.error('i llegó al valor 2');
                }
            }, 1000);
        });

        return obs$;
    }

}

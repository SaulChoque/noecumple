import
{
    trigger,
    transition,
    query,
    style,
    animate
}
from '@angular/animations';

export const routeTransition =
trigger('routeAnimations', [
    transition('open => *', [
        query(':enter', [
            style({ opacity: 0, scale: 0.4 }),
        ], { optional: true },),
        query(':leave', [
            animate('2s', style({ opacity: 0, scale: 0.9 }))
        ], { optional: true }),
        query(':enter', [
            animate('2s', style({ opacity: 1, scale: 1 }))
        ], { optional: true })
    ])
]);

import { trigger, keyframes, animation, useAnimation } from '@angular/animations';
import { transition } from '@angular/animations';
import { state } from '@angular/animations';
import { animate } from '@angular/animations';
import { style } from '@angular/animations';

// animation - creating a re-usable Animation
export let bounceOutLeftAnimation = animation( 
    // here we are using keyframes (from animate.css) - bounce out
    animate('500ms ease-in', keyframes([
        style({ 
            offset: .2, // keyframe: 20% of total movement
            opacity: 1,
            transform: 'translateX(20px)'}),
        style({ 
            offset: 1, // keyframe: 100% of total movement
            opacity: 0,
            transform: 'translateX(-100%)'})
    ]))
);

export let fadeInAnimation = animation([
    style({opacity: 0}),
    animate('{{duration}} {{easing}}')
], { // passing the default animation values as the second argument for animation()
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let fade = trigger('fade', [
    
    transition(':enter', useAnimation(fadeInAnimation)),

    transition(':leave', [
        animate(2000, style({opacity: 0}))
    ])

]);

// re-usable TRIGGER - slide...
export let slide = trigger('slide', [
    transition(':enter', [style({transform: 'translateX(-20px)'}) ,animate(1000)]),
    transition(':leave', useAnimation(bounceOutLeftAnimation))
]);
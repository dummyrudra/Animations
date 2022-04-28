// 1)
// animations: [
//     trigger('fade', [
//       transition('void=>*', [
//         style({
//           opacity: 0,
//         }),
//         animate(1000),
//       ]),
//       transition('*=>void', [animate(500, style({ opacity: 0 }))]),
//     ]),
//   ],

// // 2)
// animations: [
//     trigger('fade', [
//       state('void', style({ opacity: 0 })),
//       transition('void=>*', [animate(1000)]),
//       transition('*=>void', [animate(500)]),
//     ]),
//   ],

// 3)
// animations: [
// trigger('fade', [
//   state('void', style({ opacity: 0 })),
// transition('void<=>*', [animate(1000)]),             //Or
// transition('void=>*,*=>void', [animate(1000)]),           //Or

// transition(':enter', [animate(400)]),
// transition(':leave', [animate(500)]),     //Or

// transition(':enter,:leave', [animate(1000)]),

// transition('*=>void', [animate(500)]),
// ]),
//   ],

// 4) Transition

// export let fade = trigger('fade', [
//   state('void', style({ opacity: 0 })),
//   transition(':enter,:leave', [animate(500)]),
// ]);

// 5) Animation
// export let slide = trigger('slide', [
//   transition(':enter', [
//     style({
//       transform: 'translateX(-10px)',
//     }),
//     animate(1000),
//   ]),
//   transition(':leave', [
//     animate(1000, style({ transform: 'translateX(-100%)' })),
//   ]),
// ]);

//6)

// export let slide = trigger('slide', [
//   transition(':enter', [
//     style({
//       transform: 'translateX(-10px)',
//     }),
//     animate(1000),
//   ]),
//   transition(':leave', [
//     // animate('0.5s 0.2s ease-in', style({ transform: 'translateX(-100%)' })),
//     animate(
//       '.5s  cubic-bezier(.61,.31,.78,.15)',
//       style({ transform: 'translateX(-100%)' })
//     ),
//   ]),
// ]);

// 7)
// export let slide = trigger('slide', [
//   transition(':enter', [
//     style({
//       transform: 'translateX(-10px)',
//     }),
//     animate(1000),
//   ]),
//   transition(':leave', [
//     // animate('0.5s 0.2s ease-in', style({ transform: 'translateX(-100%)' })),
//     animate(
//       '.5s  cubic-bezier(.61,.31,.78,.15)',
//       //   style({ transform: 'translateX(-100%)' })
//       keyframes([
//         style({
//           offset: 0.2,
//           opacity: 1,
//           transform: 'translateX(20px)',
//         }),
//         style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' }),
//       ])
//     ),
//   ]),
// ]);

# AngularNgrxCounter

Effects in NgRx | Use of NgRx Effects with Angular
https://ngrx.io/guide/effects
https://www.youtube.com/watch?v=uyW48EQge-8

# MergeMap ConcatMap

https://www.youtube.com/watch?v=r0BE5J8i7zw
https://www.youtube.com/watch?v=b59tcUwfpWU

of('1', '2', '3')
.pipe(mergeMap((num) => of(`the numb is ${num}`)))
.subscribe(console.log);

# SwitchMap

//-- send new request and cancel the old one --//
https://www.youtube.com/watch?v=ahogOJEGIOM
https://www.youtube.com/watch?v=6lKoLwGlglE

# ExhaustMap

exhaustMap operator from Rxjs is used where you don't want to make unnecessary calls to the server if the previous call is not finished. exhaustMap can be used in various scenarios like making calls to the server, getting mouse movement data, in the ngRx effects, etc

https://www.youtube.com/watch?v=UZ3a17cuN1o


# Tap

The tap operator from Rxjs is used for Transparently perform actions or side-effects, such as logging or any side task which will not affect the main purpose.

https://www.youtube.com/watch?v=osSL3IB1Myw

# Take Skip


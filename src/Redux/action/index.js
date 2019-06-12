export const Increment='increment';
export const Decrement='decrement';

export const increment=(counterCaption)=>({
        type:Increment
    }
);
export const decrement=(counterCaption)=>({
    type:Decrement
});
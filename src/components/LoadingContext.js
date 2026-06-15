'use client';

import { createContext, useContext } from "react";

// Shared signal so on-mount animations (the hero) know when the preloader
// has finished and it's safe to start animating.
export const LoadingContext = createContext({ ready: false });

export function useLoading() {
    return useContext(LoadingContext);
}

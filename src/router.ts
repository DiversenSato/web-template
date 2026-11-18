import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { keepPreviousData, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            placeholderData: keepPreviousData,
            staleTime: Infinity,
        },
    },
});

export const router = createRouter({
    routeTree,
    context: {
        queryClient,
    },
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

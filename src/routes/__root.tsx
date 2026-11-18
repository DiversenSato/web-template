import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';

interface RouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({ component: RootLayout });

function RootLayout() {
    return (
        <>
            <Outlet />
            <TanStackDevtools
                plugins={[
                    {
                        name: 'TanStack Router',
                        render: <TanStackRouterDevtoolsPanel />,
                    },
                    {
                        name: 'TanStack Query',
                        render: <ReactQueryDevtoolsPanel />,
                    },
                ]}
            />
        </>
    );
}

export default defineNuxtRouteMiddleware(async (to) => {
    // Skip middleware on server-side rendering to avoid issues
    if (process.server) return

    // Define which routes require authentication
    const protectedRoutes = ['/protected', '/admin', '/dashboard']

    const isProtectedRoute = protectedRoutes.some(route =>
        to.path.startsWith(route)
    )

    if (isProtectedRoute) {
        try {
            const { authenticated } = await $fetch('/api/auth/status')

            if (!authenticated) {
                return navigateTo(`/login?redirect=${encodeURIComponent(to.path)}`)
            }
        } catch (error) {
            return navigateTo(`/login?redirect=${encodeURIComponent(to.path)}`)
        }
    }
})
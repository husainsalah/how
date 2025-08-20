export const useAuth = () => {
    const checkAuth = async () => {
        try {
            const { authenticated } = await $fetch('/api/auth/status')
            return authenticated
        } catch {
            return false
        }
    }

    const login = async (password: string) => {
        return await $fetch('/api/auth/login', {
            method: 'POST',
            body: { password }
        })
    }

    const logout = async () => {
        return await $fetch('/api/auth/logout', { method: 'POST' })
    }

    return {
        checkAuth,
        login,
        logout
    }
}
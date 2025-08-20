export default defineEventHandler(async (event) => {
    const { password } = await readBody(event)
    const config = useRuntimeConfig()

    if (password === config.protectedPassword) {
        // Set session using nuxt-auth-utils
        await setUserSession(event, {
            user: {
                authenticated: true,
                loginTime: Date.now()
            }
        })

        return { success: true }
    }

    throw createError({
        statusCode: 401,
        statusMessage: 'Invalid password'
    })
})
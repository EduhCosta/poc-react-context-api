import users from './mocks/users';

/**
 * Simulate request
 */
export const getUsers = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(users)
    }, 2000))
}
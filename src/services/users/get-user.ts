import type { ApiContext, User } from "@/types/data"
import { fetcher } from "@/utils"

export type GetUserPramas = {
    id: number
}

const getUser = async (
    context: ApiContext,
    {id}: GetUserPramas,
): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
        {
            headers: {
                Accept: 'apllication/json',
                'Content-Type': 'apllication/json',
            }
        }
    )
}

export default getUser
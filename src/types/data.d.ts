// 商品のカテゴリ
export type Category = 'shoes' | 'cloths' | 'book'
// 商品の状態
export type Condition = 'new' | 'used'

export type User = {
    id: number,
    userName: string,
    displayName: string,
    email: string,
    profileImageUrl: string,
    description: string,
}

export type Product = {
    id: number,
    category: Category,
    title: string,
    description: string,
    imageUrl: string,
    blurDataUrl: string,
    price: number,
    condition: Condition,
    owner: User,
}

export type ApiContext = {
    apiRootUrl: string
}
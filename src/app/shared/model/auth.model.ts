
export interface RegisterUser {
    email: string,
    password: string,
    userRole: 'Buyer' | 'Admin' | 'super_Admin' | 'Seller',
}


export interface LoginUSer {
    email: string,
    password: string,
}

export interface SignUpResponce { } 
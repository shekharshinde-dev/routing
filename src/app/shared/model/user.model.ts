export interface Users {
    userName: string,
    userId: string,
    userRole: 'Candidate' | 'Admin' | 'super_Admin';
}
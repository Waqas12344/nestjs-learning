export declare class UserController {
    getUsers(name: string): {
        id: number;
        name: string;
    }[] | undefined;
    getUserById(id: string): {
        id: string;
        name: string;
    };
    createUser(body: any): {
        message: string;
    };
}

import { User } from "@prisma/client";

export interface IUserRepository {
    getUserById: (id: string) => Promise<User | null>;
    deleteUser: (id: string) => Promise<void>;
    createUser: (user: User, passwordHash: string) => Promise<User>;
    findFirst: (email: string) => Promise<User | null>;
    updateUser: (id: string, user: Partial<User>) => Promise<User | null>;
}

import { Role } from "@prisma/client";

export interface IRoleRepository {
    createRole(role: Role): Promise<Role>;
    getRoleById(id: string): Promise<Role | null>;
    updateRole(id: string, role: Partial<Role>): Promise<Role>;
    deleteRole(id: string): Promise<void>;
}

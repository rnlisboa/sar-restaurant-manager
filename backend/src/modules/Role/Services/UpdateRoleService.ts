import { Role } from "@prisma/client";
import { IRoleRepository } from "../RoleRepository/IRoleRepository";
import { RoleRepository } from "../RoleRepository/RoleRepository";

class UpdateRoleService {
    private readonly roleRepository: IRoleRepository;

    constructor() {
        this.roleRepository = new RoleRepository();
    }

    async execute(id: string, role: Partial<Role>): Promise<Role> {
        return await this.roleRepository.updateRole(id, role);
    }
}

export default UpdateRoleService;

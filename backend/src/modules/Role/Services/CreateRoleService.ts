import { Role } from "@prisma/client";
import { IRoleRepository } from "../RoleRepository/IRoleRepository";
import { RoleRepository } from "../RoleRepository/RoleRepository";


class CreateRoleService {
    private readonly roleRepository: IRoleRepository;

    constructor() {
        this.roleRepository = new RoleRepository();
    }

    async execute(role: Role): Promise<Role> {
        return await this.roleRepository.createRole(role);
    }
}

export default CreateRoleService;

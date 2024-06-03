import { Role } from "@prisma/client";
import { IRoleRepository } from "../RoleRepository/IRoleRepository";
import { RoleRepository } from "../RoleRepository/RoleRepository";


class RoleDetailService {
    private readonly roleRepository: IRoleRepository;

    constructor() {
        this.roleRepository = new RoleRepository();
    }

    async execute(id: string): Promise<Role | null> {
        return await this.roleRepository.getRoleById(id);
    }
}

export default RoleDetailService;

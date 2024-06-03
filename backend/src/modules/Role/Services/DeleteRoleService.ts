import { IRoleRepository } from "../RoleRepository/IRoleRepository";
import { RoleRepository } from "../RoleRepository/RoleRepository";

class DeleteRoleService {
    private readonly roleRepository: IRoleRepository;

    constructor() {
        this.roleRepository = new RoleRepository();
    }

    async execute(id: string): Promise<void> {
        await this.roleRepository.deleteRole(id);
    }
}

export default DeleteRoleService;

export interface UserDTO {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isActive: boolean;
    profileImage?: string;
    createdAt: Date;
    updatedAt: Date;
    roleId: string;
  }
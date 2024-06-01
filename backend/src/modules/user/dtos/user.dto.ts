export interface UserDTO {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    is_admin: boolean;
    is_active: boolean;
    profile_image?: string;
    createdAt: Date;
    updatedAt: Date;
    role_id: string;
  }
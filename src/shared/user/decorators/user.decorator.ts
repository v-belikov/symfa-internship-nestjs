import { SetMetadata } from '@nestjs/common';

import { RolesEnum } from '@shared/user/roles.enum';

export const HasRoles = (...roles: RolesEnum[]) => SetMetadata('roles', roles);

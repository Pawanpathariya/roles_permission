import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { mapPermissionsToCasl } from './mapPermissions';

export const AppAbility = createMongoAbility();

export const AbilityClass = createMongoAbility;

export const defineAbilitiesFor = (user) => {
  const { can, rules } = new AbilityBuilder(AbilityClass);

  if (user?.role?.permissions) {
    const permissions = mapPermissionsToCasl(user.role.permissions);

    permissions.forEach(([action, subject]) => {
      can(action, subject);
    });
  }

  return new AbilityClass(rules);
};

export function isPropertyExistingAndOwnedByUser(
  property: { ownerId: string },
  userId: string,
): boolean {
  return property && property.ownerId === userId;
}
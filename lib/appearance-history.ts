// Drizzle uses literal true values to infer the selected event fields.
export const appearanceHistory = {
  columns: {},
  with: {
    event: {
      columns: {
        name: true,
        slug: true,
        startDate: true,
      },
      with: {
        location: {
          columns: {
            city: true,
            country: true,
            state: true,
          },
        },
      },
    },
  },
} as const;

export function newestAppearancesFirst<
  T extends { event: { startDate: Date } },
>(appearances: readonly T[]): T[] {
  return [...appearances].sort(
    (first, second) =>
      second.event.startDate.getTime() - first.event.startDate.getTime(),
  );
}

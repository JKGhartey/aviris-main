import { getComponentIds } from "~/config/registry";

export function getComponentRoute(id: string): string {
  return `/components/${id}`;
}

export function getComponentRoutes(): Record<string, string> {
  return Object.fromEntries(
    getComponentIds().map((id) => [id, getComponentRoute(id)]),
  );
}

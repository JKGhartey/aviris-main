import {
  fileUploadConfig,
  folderStructureConfig,
  apiTableConfig,
} from "./components";
import { ComponentDoc } from "./types";

const registry: Record<string, ComponentDoc> = {
  "file-upload": fileUploadConfig,
  "folder-structure": folderStructureConfig,
  "api-table": apiTableConfig,
};

export function getComponent(id: string): ComponentDoc | undefined {
  return registry[id];
}

export function getAllComponents(): ComponentDoc[] {
  return Object.values(registry);
}

export function getComponentIds(): string[] {
  return Object.keys(registry);
}

export function registerComponent(id: string, config: ComponentDoc) {
  registry[id] = config;
}

export function getComponentsByStatus(
  status: ComponentDoc["status"],
): ComponentDoc[] {
  return Object.values(registry).filter(
    (component) => component.status === status,
  );
}

export function getComponentsByMetadata(
  key: keyof ComponentDoc["metadata"],
  value: string,
): ComponentDoc[] {
  return Object.values(registry).filter(
    (component) => component.metadata?.[key] === value,
  );
}

export function searchComponents(query: string): ComponentDoc[] {
  const lowercaseQuery = query.toLowerCase();
  return Object.values(registry).filter((component) => {
    return (
      component.name.toLowerCase().includes(lowercaseQuery) ||
      component.description.toLowerCase().includes(lowercaseQuery) ||
      component.props.some(
        (prop) =>
          prop.name.toLowerCase().includes(lowercaseQuery) ||
          prop.description.toLowerCase().includes(lowercaseQuery),
      )
    );
  });
}

import React from "react";

export interface ModuleMeta {
  path: string;
  name: string;
  icon: React.ElementType;
  component: React.ComponentType;
}

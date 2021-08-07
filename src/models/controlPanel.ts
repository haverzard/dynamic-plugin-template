export interface ControlConfig {
  id: string;
  label: string;
  Component: React.FC | React.ComponentClass;
}

export interface ControlPanelSectionConfig {
  name: string;
  controls: Array<ControlConfig>;
}
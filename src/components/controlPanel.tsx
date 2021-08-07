import React from "react";

import { ControlConfig, ControlPanelSectionConfig } from "../models/controlPanel";

const tableColor: ControlConfig = {
  id: "tableColor",
  label: "Table Color",
  Component: ({ onChange }: any) => <input type="color" onChange={onChange} />,
};

const controlPanel: Array<ControlPanelSectionConfig> = [
  {
    name: "Customization",
    controls: [tableColor],
  },
];

export default controlPanel;

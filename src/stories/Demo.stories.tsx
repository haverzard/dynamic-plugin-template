import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./globals.css";

import Plugin from "../index";

export default {
  title: "haverzard/Demo",
  component: Plugin.Chart,
} as ComponentMeta<typeof Plugin.Chart>;

const Template: ComponentStory<typeof Plugin.Chart> = ({ data, height, width }) => {
  const [formData, setFormData] = useState<any>(null);

  return (
    <div className="flex flex-col md:flex-row items-center w-full md:h-64 md:px-32">
      <div className="w-5/6 md:w-1/3 h-full bg-gray-100 dark:bg-blue p-4 md:p-8 overflow-y-auto">
        {Plugin.controlPanel.map((section: any, idx: number) => {
          return (
            <div key={idx}>
              <div className="mb-4 text-xl font-bold">{section.name}</div>
              <div className="grid gap-2">
                {section.controls.map((control: any) => (
                  <div key={control.id} className="flex p-2 items-center space-x-4">
                    <label>{control.label}:</label>
                    <control.Component
                      onChange={(e: any) => setFormData({ ...formData, [control.id]: e.target.value })}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-5/6 md:w-2/3 h-full bg-gray-300 dark:bg-gray-700 p-4 md:p-8">
        <div className="w-full h-full overflow-x-auto">
          <Plugin.Chart {...Plugin.transformProps({ height, width, data: data, formData })} />
        </div>
      </div>
    </div>
  );
};

export const CustomizeChart = Template.bind({});
CustomizeChart.args = {
  data: [
    {
      name: "Bob",
      age: 26,
    },
  ],
  height: 100,
  width: 500,
};

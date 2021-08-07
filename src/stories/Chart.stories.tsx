import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import "./globals.css";
import Chart from '../components/Chart';

export default {
  title: 'haverzard/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => (
  <Chart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      name: "Bob",
      age: 26,
      gender: "Male",
    },
  ],
  height: 100,
  width: 500,
};

export const Colorize = Template.bind({});
Colorize.args = {
  data: [
    {
      name: "Bob",
      age: 26,
      gender: "Male",
    },
  ],
  tableColor: "red",
  height: 100,
  width: 500,
};
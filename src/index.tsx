import React from "react";

function transformProps(props: any) {
  const { height, width, formData, data } = props;
  return { height, width, ...formData, data };
}

function Chart({ width, height, data, tableColor }: any) {0
  return (
    <div style={{ width: width, height: height, overflow: "auto", backgroundColor: tableColor }}>
      <table>
        <tbody>
          {data.map((d: any, idx: number) => (
            <tr key={idx}>
              {Object.keys(d).map((k: string) => (
                <td key={k}>{d[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const controlPanel = [
  {
    name: "Customization",
    controls: [
      {
        id: "tableColor",
        label: "Table Color",
        Component: ({ onChange }: any) => <input type="color" onChange={onChange} />,
      },
    ],
  },
];

const Plugin = {
  transformProps: transformProps,
  Chart: Chart,
  controlPanel: controlPanel,
};

export default Plugin;
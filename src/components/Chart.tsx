import React from "react";

export default function Chart({ width, height, data, tableColor }: any) {
  return (
    <div style={{ width: width, height: height, overflow: "auto" }}>
      <table style={{ width: "100%", backgroundColor: tableColor }}>
        <tbody>
          {data.length && (
            <tr>
              {Object.keys(data[0]).map((k: string) => (
                <th key={k} style={{ padding: 10, border: "1px solid #000", textAlign: "left" }}>{k}</th>
              ))}
            </tr>
          )}
          {data.map((d: any, idx: number) => (
              <tr key={idx}>
              {Object.keys(d).map((k: string) => (
                <td key={k} style={{ padding: 10, border: "1px solid #000" }}>{d[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

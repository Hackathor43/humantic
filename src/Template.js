
import React from "react";
import { useState } from "react";
export default function Template(props) {
    const [expand, setExpand] = useState(false);
  if (props.data.isFolder) {
    
    return (
      <div>
        <span onClick={() => {
            setExpand(!expand);
            props.onChange(props.data);
        }}>{props.data.name}</span>
        <br></br>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
          {props.data.items.map((element) => {
            return <Template data={element} onChange={props.onChange}></Template>;
          })}
        </div>
      </div>
    );
  } else {
    return (
    <div>    <span>{props.data.name}</span>
<br></br>
    </div>
);
  }
}

import React, { useState } from "react";
import { Button, Card, TextBox } from "../src";

export default function DemoApp() {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <h1>Danimation Components</h1>

      <Card recommended>
        <TextBox
          labelText="Your name"
          name="name"
          error={null}
          onChange={(event) =>
            setValue(event.target.value ?? "")
          }
        />
        <p>Value: {value}</p>
        <Button onClick={() => alert("Clicked!")}>Click</Button>
      </Card>
    </div>
  );
}

import React from "react";
import { Button } from "./components/ui/button/button";
import { Input } from "./components/ui/input/input";
import { Select } from "./components/ui/select/select";
import { Icon } from "./assets/icon";

const App = () => {
  return (
    <div className="container">
      <h1>Components</h1>
      <div className="component-group">
        <Button variant="primary" startIcon={<Icon />} endIcon={<Icon />}>
          Primary Button
        </Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
      </div>
      <div className="component-group">
        <Input placeholder="Enter text here" />
        <Select
          options={[
            { value: "", label: "Select an option" },
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
        />
      </div>
    </div>
  );
};

export default App;


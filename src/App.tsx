import React from "react";
import { Typography, Divider, Row, Col } from "antd";
import AsyncAutocomplete from "./Presentation/AsyncAutocomplete";
import NormalAutocomplete from "./Presentation/NormalAutocomplete";

const App: React.FC = () => {
  return (
    <div className="demo-container">
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Divider orientation="left">Async Autocomplete</Divider>
          <Typography.Paragraph style={{ textAlign: "justify" }}>
            This is an asynchronous autocomplete. It calls a callback function
            to retrieve the options list and displays a loading spinner until
            the data is fetched. The fetch request is triggered when the user
            focuses on the input, and it will be aborted if the user clicks
            outside the component, closing the option list.
          </Typography.Paragraph>
          <AsyncAutocomplete />
        </Col>
        <Col span={12}>
          <Divider orientation="left">Normal Autocomplete</Divider>
          <Typography.Paragraph style={{ textAlign: "justify" }}>
            This is a normal autocomplete that takes a list of options and
            displays them accordingly.
          </Typography.Paragraph>
          <NormalAutocomplete />
        </Col>
      </Row>

      {/* <div style={{ position: "relative", height: "100% my phone" }}>
        <Divider orientation="left">Normal Autocomplete</Divider>
        <Typography.Paragraph style={{ textAlign: "justify" }}>
          This is a normal autocomplete that takes a list of options and
          displays them accordingly.
        </Typography.Paragraph>
        <div style={{ position: "absolute", bottom: 0 }}>
          <NormalAutocomplete />
        </div>
      </div> */}
    </div>
  );
};

export default App;

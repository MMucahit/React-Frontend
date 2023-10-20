import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { Button, Modal } from "semantic-ui-react";

import "../css/Shap.css";

function LineCharts(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchUserLineChart = useSelector(
    (state) => state.search.userLineChart
  );

  return (
    <Modal
      className="custom-modal"
      onClose={handleClose}
      onOpen={handleShow}
      open={show}
      trigger={<Button>{props.user.employee_status_id}</Button>}
    >
      <Modal.Header>{props.user.name_surname}</Modal.Header>
      <Modal.Content image>
        <LineChart
          width={800}
          height={500}
          data={searchUserLineChart}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="Gain" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default LineCharts;

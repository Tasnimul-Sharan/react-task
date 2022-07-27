import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import DataTable from "../DataTable/DataTable";

const Home = () => {
  const [datas, setDatas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = e.target.date.value;
    let id = new Date().getTime().toString();
    let amount = e.target.amount.value;
    let paymentMode = e.target.paymentMode.value;
    let remark = e.target.remark.value;
    let data = { id, date, amount, remark, paymentMode };
    // datas.push(data);
    setDatas([...datas, data]);
    // localStorage.setItem("datas");
  };

  return (
    <div className="my-5">
      <Form
        onSubmit={handleSubmit}
        className="container shadow-lg p-5 w-75 form-group text-start"
      >
        <h5 className="text-start text-decoration-underline">
          Receipt Details
        </h5>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Enter Date<span className="text-danger">*</span>
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name="date"
              type="date"
              placeholder=" Enter Date"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Amount<span className="text-danger">*</span>
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name="amount"
              type="number"
              placeholder="Enter Amount (in INR)"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Payment Mode<span className="text-danger">*</span>
          </Form.Label>
          <Col sm={10}>
            <Form.Select name="paymentMode" aria-label="Default select example">
              <option selected value="Cash">
                Cash
              </option>
              <option value="Paypal">Paypal</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalRemark">
          <Form.Label column sm={2}>
            Enter Remark
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name="remark"
              type="text"
              placeholder="Enter Remark"
              required
            />
          </Col>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button type="reset" className="mx-3 px-5" variant="outline-danger">
            CANCEL <br /> (ESC)
          </Button>
          <Button type="submit" className="px-5 btn btn-success">
            SUBMIT <br /> (CTRL + S)
          </Button>
        </div>
      </Form>
      <DataTable datas={datas} />
    </div>
  );
};

export default Home;

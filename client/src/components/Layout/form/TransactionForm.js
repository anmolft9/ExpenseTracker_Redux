import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postDataAction } from "../../../pages/transaction/transactionAction";
// import { postData } from "../components/Layout/form/TransactionForm.js";

// import { postTransactions } from "../../../helpers/axiosHelper";

export const TransactionForm = ({ postData }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(sessionStorage);
    dispatch(postDataAction(form));
    // console.log(form);
  };

  return (
    <Form onSubmit={handleOnSubmit} className="mb-5" required>
      <Row className="g-2">
        <Col md="2">
          <Form.Select
            onChange={handleOnChange}
            name="type"
            placeholder="choose"
          >
            {/* <option value="">Choose</option> */}
            <option value="choose">choose</option>
            <option value="expense">expense</option>
            <option value="income">income</option>
          </Form.Select>
        </Col>
        <Col md="5">
          <Form.Control
            onChange={handleOnChange}
            name="title"
            placeholder="Title"
            required
          />
        </Col>
        <Col md="2">
          <Form.Control
            onChange={handleOnChange}
            name="amount"
            placeholder="Amount"
            required
          />
        </Col>
        <Col md="2">
          <Form.Control
            onChange={handleOnChange}
            name="date"
            type="date"
            placeholder="date"
            required
          />
        </Col>

        <Col md="2">
          <Form.Control type="submit" className="btn btn-primary" />
        </Col>
      </Row>
    </Form>
  );
};

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { TransactionForm } from "../components/Layout/form/TransactionForm";
import { MainLayout } from "../components/Layout/MainLayout";
import { TransactionTable } from "../components/Layout/transaction-table/TransactionTable.js";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    !user._id && navigate("/");
  }, [user]);

  return (
    <MainLayout>
      <Container>
        <Row>
          <h3 className="mt-4">Dashboard</h3>
          <TransactionForm />
          <TransactionTable />
        </Row>
      </Container>
    </MainLayout>
  );
};

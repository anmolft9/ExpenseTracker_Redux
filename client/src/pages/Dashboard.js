import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { TransactionForm } from "../components/Layout/form/TransactionForm";
import { MainLayout } from "../components/Layout/MainLayout";
import { TransactionTable } from "../components/Layout/transaction-table/TransactionTable.js";

import {
  deleteTransaction,
  getTransaction,
  postTransactions,
} from "../helpers/axiosHelper.js";

export const Dashboard = ({ isLoggedIn }) => {
  return (
    <MainLayout isLoggedIn={isLoggedIn}>
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

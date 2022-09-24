import React from "react";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableColumnType,
  TableHeader,
} from "react-bs-datatable";
import { Button, Col, Row, Table } from "react-bootstrap";
import "./AllHost.css";

// Create table headers consisting of 4 columns.
import TABLE_BODY from "../../../../data.json";

type ArrayElementType = (typeof TABLE_BODY)[number] & {
  button: any,
};

// Create table headers consisting of 4 columns.
const STORY_HEADERS: TableColumnType<ArrayElementType>[] = [
  {
    prop: "name",
    title: "Name",
    isFilterable: true,
  },
  {
    prop: "username",
    title: "Username",
  },
  {
    prop: "location",
    title: "Location",
  },
  {
    prop: "date",
    title: "Last Update",
  },
  {
    prop: "score",
    title: "Score",
    isSortable: true,
  },
  {
    prop: "button",
    cell: (row) => (
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => {
          alert(`${row.username}'s score is ${row.score}`);
        }}
      >
        Click me
      </Button>
    ),
  },
];

const AllHost = () => {
  return (
    <div>
      <DatatableWrapper
        body={TABLE_BODY}
        headers={STORY_HEADERS}
        paginationOptionsProps={{
          initialState: {
            rowsPerPage: 10,
            options: [5, 10, 15, 20],
          },
        }}
      >
        <Row className="mb-4 p-2">
          <Col
            xs={12}
            lg={4}
            className="d-flex flex-col justify-content-end align-items-end"
          >
            <Filter />
          </Col>
          <Col
            xs={12}
            sm={6}
            lg={4}
            className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
          >
            <PaginationOptions />
          </Col>
        </Row>
        <Table>
          <TableHeader />
          <TableBody />
        </Table>
        <Row>
          <Col
            xs={12}
            sm={6}
            lg={4}
            className="d-flex flex-col justify-content-end align-items-end"
          >
            <Pagination />
          </Col>
        </Row>
      </DatatableWrapper>
    </div>
  );
};

export default AllHost;

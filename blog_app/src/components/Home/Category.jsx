import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { categoires } from "../data";
import styled from "@emotion/styled";
import { Link, useSearchParams } from "react-router-dom";
const Styledtable = styled(Table)`
  border: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Category = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get(`category`);
 
  return (
    <>
      <Link to={`/create?category=${category || ''}`}>
        <Button
          variant="container"
          style={{
            margin: "20px",
            width: "85%",
            background: "#6495ED",
            color: "white",
          }}
        >
          CREATE BLOG
        </Button>
      </Link>
      <Styledtable>
        <TableHead>
          <TableRow>
            <TableCell>
              <StyledLink to="/">All Categories</StyledLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoires.map((e) => (
            <TableRow key={e.id}>
              <TableCell>
                <StyledLink to={`/?category=${e.type}`}>{e.type}</StyledLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Styledtable>
    </>
  );
};

export default Category;

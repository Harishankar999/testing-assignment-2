import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Components/Button";

const Quesdata = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = () => {
    setData([]);
    fetch(`http://localhost:8080/Important?_page=${page}&_limit=1`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  console.log(page);
  return (
    <div>
      <div>
        {data.map((el) => {
          return (
            <div key={el.id}>
              <p>Question: {el.question}</p>
              <p>Answer: {el.answer}</p>
            </div>
          );
        })}
      </div>
      <div>
        <Button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            if (page <= 9) {
              setPage(page + 1);
            }
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Quesdata;

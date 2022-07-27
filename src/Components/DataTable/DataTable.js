import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const DataTable = ({ datas }) => {
  console.log(datas);
  return (
    <div className="container my-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Remark</th>
          </tr>
        </thead>
        {datas &&
          datas?.map((data) => (
            <tbody key={data?.id}>
              <tr>
                <td>{data?.date}</td>
                <td>{data?.amount}</td>
                <td>{data?.paymentMode}</td>
                <td>
                  <Button
                    onClick={() => {
                      Swal.fire({
                        html: `${data?.remark}`,
                        showCloseButton: true,
                      });
                    }}
                  >
                    Read more
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </div>
  );
};

export default DataTable;

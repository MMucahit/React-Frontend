import React from "react";

import { Pagination } from "semantic-ui-react";

function Paginate(props) {
  return (
    <Pagination
      activePage={props.currentPage}
      totalPages={props.totalPages}
      onPageChange={props.onPageChange}
    ></Pagination>
  );
}

export default Paginate;

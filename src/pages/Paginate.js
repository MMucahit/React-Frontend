import React from "react";

import { Pagination } from "semantic-ui-react";

class Paginate extends React.Component {
  render() {
    const { currentPage, totalPages, onPageChange } = this.props;

    return (
      <Pagination
        activePage={currentPage}
        // defaultActivePage={5}
        totalPages={totalPages}
        onPageChange={onPageChange}
      ></Pagination>
    );
  }
}

export default Paginate;

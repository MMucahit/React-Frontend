import React from "react";

import OfficeSelectBox from "../pages/OfficeSelectBox";
import PointSelectBox from "../pages/PointSelectBox";
import RegionSelectBox from "../pages/RegionSelectBox";

import { Menu } from "semantic-ui-react";
import CiroSelectBox from "../pages/CiroSelectBox";

function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <OfficeSelectBox />
      </Menu>

      <Menu pointing vertical>
        <PointSelectBox />
      </Menu>

      <Menu pointing vertical>
        <RegionSelectBox />
      </Menu>

      <Menu pointing vertical>
        <CiroSelectBox />
      </Menu>
    </div>
  );
}

export default Categories;

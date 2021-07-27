import { Col, Table } from "antd";


import VendorApps from "./VendorApps";

function VendorAntdTableLayout({columns, data}) {
  return (
    <Col span={24}>
      <Table
        bordered
        columns={columns}
        expandable={{
          expandedRowRender: (record) => <VendorApps />,
        }}
        dataSource={data}
        title={() => "The Vendors Applications"}
        footer={() => "Footer"}
      />
    </Col>
  );
}
export default VendorAntdTableLayout;

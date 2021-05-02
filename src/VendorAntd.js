import { Col, Card, Tabs, Typography, Table, Descriptions, Collapse } from 'antd';

import {  AppleFilled } from '@ant-design/icons';
const { Text } = Typography;
const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Meta } = Card; 
function callback(key) {
  console.log(key);
}
const columns = [
    {
      title: 'Application Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Category',
      dataIndex: 'cat',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.cat - b.cat,
    },
    {
      title: 'Licenses Bought',
      dataIndex: 'licenses',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.licenses.indexOf(value) === 0,
      sorter: (a, b) => a.licenses.length - b.licenses.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'App Covered in Contract',
        dataIndex: 'apps',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.apps - b.apps,
    },
  ];
  
  const data = [
    {
        key: '1',
        name: 'iPhone',
        cat: 'abc',
        licenses: '6',
        apps: '4',
    },
    {
        key: '2',
        name: 'iPad',
        cat: 'xyz',
        licenses: '4',
        apps: '4',
    },
    {
        key: '3',
        name: 'iPod',
        cat: 'pqr',
        licenses: '12',
        apps: '4',
    },
    {
        key: '4',
        name: 'iTunes',
        cat: 'lmn',
        licenses: '9',
        apps: '4',
    },
    {
        key: '5',
        name: 'iPhone',
        cat: 'abc',
        licenses: '6',
        apps: '4',
    },
    {
        key: '6',
        name: 'iPad',
        cat: 'xyz',
        licenses: '4',
        apps: '4',
    },
    {
        key: '7',
        name: 'iPod',
        cat: 'pqr',
        licenses: '12',
        apps: '4',
    },
    {
        key: '8',
        name: 'iTunes',
        cat: 'lmn',
        licenses: '9',
        apps: '4',
    },
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
function Vendor() {
   
    return (  
        <Col span={12}>
        <Card hoverable bordered={false} title={<div className="cardTitle"><AppleFilled /> Apple Store | <Text type="secondary"> &nbsp; 4 Apps (Inactive)</Text> </div>} bodyStyle={{padding: "0"}} >
        <Tabs defaultActiveKey="1" centered onChange={callback}>
            <TabPane tab="Vendor Information" key="1">
                <Card title="" bordered={true}>
                    <Meta title="Mr. Vladimir Preobrazhensky" description="July 10, 2008" />
                    <Collapse defaultActiveKey={['1']} accordion className="site-collapse-custom-collapse">
                        <Panel header="Personal Information" key="1">
                            <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} title="">
                                <Descriptions.Item label="Website">www.appstore.com</Descriptions.Item>
                                <Descriptions.Item label="Telephone">+371 29231472</Descriptions.Item>
                                <Descriptions.Item label="# of Applications">4 Applications</Descriptions.Item>
                                <Descriptions.Item label="Source">Expensify</Descriptions.Item>
                                <Descriptions.Item label="Address">
                                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                                </Descriptions.Item>
                            </Descriptions>
                        </Panel>
                        <Panel header="Expense Information" key="2">
                            <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} title="">
                                <Descriptions.Item label="Contract">Inactive</Descriptions.Item>
                                <Descriptions.Item label="Contract Value">$1</Descriptions.Item>
                                <Descriptions.Item label="Total Spend (YTD)">$1,121</Descriptions.Item>
                                <Descriptions.Item label="Total Spend (Last 12 months)">$1,121</Descriptions.Item>
                            </Descriptions>
                        </Panel> 
                    </Collapse>
                    
                </Card>
            </TabPane>
            <TabPane tab="Vendor Applications" key="2">
                <Card title="" bordered={true}>
                    <Meta title="List of Apple Store Applications" description="Total 500 applications available from apple store vendor" />
                    <Table bordered columns={columns} dataSource={data} onChange={onChange} pagination={{ pageSize: 6 }} scroll={{ y: 200 }} />
                </Card>                    
            </TabPane> 
        </Tabs>
        </Card>
      </Col>
    )
}
export default Vendor;
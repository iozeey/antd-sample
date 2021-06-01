import { Col, Table } from 'antd';
import {  AppleFilled, ApartmentOutlined, BoxPlotOutlined, CloudOutlined, MenuOutlined, CheckSquareOutlined } from '@ant-design/icons';

import VendorApps from './VendorApps';

const columns = [
    { 
        title: 'VENDOR NAME', dataIndex: 'vendorName', key: 'vendorName',
        sorter: (a, b) => a.vendorName.length - b.vendorName.length,
        sortDirections: ['descend'], 
        render: (key, record) => {
            const  {Icon} = record;
            return(
              <>
               {Icon && <Icon />} {key}
              </>
          )},
    },
    { title: '# OF APPLICATIONS', dataIndex: 'noOfApplications', key: 'noOfApplications' },
    { title: 'TOTAL SPEND (YTD)', dataIndex: 'totalSpendYtd', key: 'totalSpendYtd' },
    { 
        title: 'ACTIVE CONTRACT', dataIndex: 'activeContract', key: 'activeContract',
        sorter: (a, b) => a.activeContract.length - b.activeContract.length,
        sortDirections: ['descend'], 
    },
    { title: 'SOURCE', dataIndex: 'source', key: 'source' },
    { title: 'TOTAL SPEND (LAST 12 MONTHS)', dataIndex: 'totalSpendLast12Months', key: 'totalSpendLast12Months' },
    { title: 'CONTRACT VALUE', dataIndex: 'contractValue', key: 'contractValue' },
];

const data = [
    {
        key: 1,
        Icon: ApartmentOutlined,
        vendorName: 'harish2junevendor',
        noOfApplications: '0 Apps',
        totalSpendYtd: '$50,000',
        activeContract: 'Inactive',
        source: 'QUICK_BOOKS',
        totalSpendLast12Months: '$50,000',
        contractValue: '$1',  
    },
    {
        key: 2,
        Icon: BoxPlotOutlined,
        vendorName: 'Box',
        noOfApplications: '8 Apps',
        totalSpendYtd: '$2,176',
        activeContract: 'Active',
        source: '',
        totalSpendLast12Months: '$2,176',
        contractValue: '$10,000',
    },
    {
        key: 3,
        Icon: AppleFilled,
        vendorName: 'Apple Store',
        noOfApplications: '4 Apps',
        totalSpendYtd: '$1,212',
        activeContract: 'Inactive',
        source: 'EXPENSIFY',
        totalSpendLast12Months: '$1,212',
        contractValue: '$1',
    },

    {
        key: 4,
        Icon: MenuOutlined,
        vendorName: 'newvendor',
        noOfApplications: '0 Apps',
        totalSpendYtd: '$1,000',
        activeContract: 'Inactive',
        source: 'QUICK_BOOKS',
        totalSpendLast12Months: '$1,000',
        contractValue: '$0',
    },
    {
        key: 5,
        Icon: CheckSquareOutlined,
        vendorName: 'Verizon',
        noOfApplications: '1 Apps',
        totalSpendYtd: '$333',
        activeContract: 'Inactive',
        source: 'EXCEL',
        totalSpendLast12Months: '$333',
        contractValue: '$0',
    },
    {
        key: 6,
        Icon: MenuOutlined,
        vendorName: 'V2 Vikas Vashistha',
        noOfApplications: '0 Apps',
        totalSpendYtd: '$324',
        activeContract: 'Inactive',
        source: 'QUICK_BOOKS',
        totalSpendLast12Months: '$324',
        contractValue: '$13,434',
    },
    {
        key: 7,
        Icon: CloudOutlined,
        vendorName: 'Cloudeagle',
        noOfApplications: '1 Apps',
        totalSpendYtd: '$200',
        activeContract: 'Active',
        source: '',
        totalSpendLast12Months: '$200',
        contractValue: '$12',
    },
    {
        key: 8,
        Icon: MenuOutlined,
        vendorName: 'Verizon Wireless',
        noOfApplications: '1 Apps',
        totalSpendYtd: '$200',
        activeContract: 'Inactive',
        source: 'EXPENSIFY',
        totalSpendLast12Months: '$300',
        contractValue: '$0',
    },
    {
        key: 9,
        Icon: CheckSquareOutlined,
        vendorName: 'Dec14Test4',
        noOfApplications: '0 Apps',
        totalSpendYtd: '$150',
        activeContract: 'Inactive',
        source: 'EXCEL',
        totalSpendLast12Months: '$150',
        contractValue: '$0',
    },
];
function VendorAntdTableLayout() {
   
    return ( 
        <Col span={24}>
            <Table
                bordered
                columns={columns}
                expandable={{
                expandedRowRender: record => <VendorApps />,
                }}
                dataSource={data}
                title={() => 'The Vendors Applications'}
                footer={() => 'Footer'}
            />
        </Col>
    )
}
export default VendorAntdTableLayout;
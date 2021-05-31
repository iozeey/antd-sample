import { Col, Table } from 'antd';
import VendorApps from './VendorApps';

const columns = [
    { title: 'VENDOR NAME', dataIndex: 'vendorName', key: 'vendorName' },
    { title: '# OF APPLICATIONS', dataIndex: 'noOfApplications', key: 'noOfApplications' },
    { title: 'TOTAL SPEND (YTD)', dataIndex: 'totalSpendYtd', key: 'totalSpendYtd' },
    { title: 'ACTIVE CONTRACT', dataIndex: 'activeContract', key: 'activeContract' },
    { title: 'SOURCE', dataIndex: 'source', key: 'source' },
    { title: 'TOTAL SPEND (LAST 12 MONTHS)', dataIndex: 'totalSpendLast12Months', key: 'totalSpendLast12Months' },
    { title: 'CONTRACT VALUE', dataIndex: 'contractValue', key: 'contractValue' },
];

const data = [
    {
        key: 1,
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
                columns={columns}
                expandable={{
                expandedRowRender: record => <VendorApps />,
                }}
                dataSource={data}
            />
        </Col>
    )
}
export default VendorAntdTableLayout;
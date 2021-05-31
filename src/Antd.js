
import 'antd/dist/antd.css'; 
import './App.css';

import { Layout, Row } from 'antd';
import VendorAntdTableLayout from './VendorAntdTableLayout';

const { Content } = Layout; 

  const style = { background: '#ccc', padding: '40px' };
function Antd() {
  return (
    <Layout>
      <Content style={style}>
        <Row justify="center" gutter={32}>
            <VendorAntdTableLayout />            
        </Row>
      </Content>
    </Layout>
  );
}

export default Antd;

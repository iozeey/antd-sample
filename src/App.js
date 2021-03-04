
import 'antd/dist/antd.css'; 
import './App.css';

import { Layout, Row, Col, Card, List, Progress } from 'antd';
import {  DropboxOutlined, GoogleOutlined, CloseOutlined, CloseCircleTwoTone } from '@ant-design/icons';

const { Content } = Layout;
const data = [
  'Product Description',
  'Funding History',
  'Pricing',
  'Features',
  'Customer case studies',
]; 
const dropbox = [
  'Dropbox is a cloud based file management',
  'Total funding $170m',
  'www.dropbox.com/pricing',
  '5 different features present',
  '4 customer case studies found',
]; 
const drive = [
  'Store, sync and share files easily',
  'Total funding $36.1m',
  'www.drive.google.com/pricing',
  '4 different features present',
  '6 customer case studies found',
]; 
function App() {
  return (
    <Layout>
      <Content>
        <Row justify="center">

          <Col span={6}>
            <Card hoverable title={<div className="cardTitle"><p>Note: To add more vendors to compare you need to first remove one or more vendors. At a time maximum four vendors are allowed to compare.</p></div>} bodyStyle={{padding: "0"}} >
              <div className="scoreBar">
                Overall Score
              </div>
              <List 
                bordered
                dataSource={data}
                renderItem={item => (
                  <List.Item actions={[<a href="/del" key="list-loadmore-more"><CloseCircleTwoTone twoToneColor="rgb(255, 45, 90)" /></a>]}>
                   {item}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable title={<div className="cardTitle"><DropboxOutlined /> Dropbox </div>} bodyStyle={{padding: "0"}} extra={<CloseOutlined />} >
              <div className="scoreBar">
                <Progress type="circle" percent={75} format={percent => `6`} width={40} />
              </div>
              <List 
                bordered
                dataSource={dropbox}
                renderItem={item => (
                  <List.Item>
                   {item}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={6}>
          <Card hoverable title={<div className="cardTitle"><GoogleOutlined /> Google Drive </div>} bodyStyle={{padding: "0"}} extra={<CloseOutlined />} >
              <div className="scoreBar">
                <Progress type="circle" percent={45} format={percent => `4.5`} width={40} />
              </div>
              <List 
                bordered
                dataSource={drive}
                renderItem={item => (
                  <List.Item>
                   {item}
                  </List.Item>
                )}
              />
            </Card>
          </Col> 
          <Col span={6}>
          <Card hoverable title={<div className="cardTitle"><GoogleOutlined /> Sales Force </div>} bodyStyle={{padding: "0"}} extra={<CloseOutlined />} >
              <div className="scoreBar">
                <Progress type="circle" percent={60} format={percent => `6.2`} width={40} />
              </div>
              <List 
                bordered
                dataSource={drive}
                renderItem={item => (
                  <List.Item>
                   {item}
                  </List.Item>
                )}
              />
            </Card>
          </Col> 
        </Row>
      </Content>
    </Layout>
  );
}

export default App;

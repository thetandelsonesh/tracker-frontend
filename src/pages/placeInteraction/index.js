import {useState} from "react";
import {Button, DatePicker, Form, Table} from "antd";

import './style.scss'

const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Vehicle',
    dataIndex: 'vehicle',
    key: 'vehicle',
  },
  {
    title: 'Date',
    dataIndex: 'logDate',
    key: 'logDate',
  },
];

const PlaceInteraction = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 1,
  });

  const handleTableChange = (pagination) => {
    const params = { page: pagination.current }
    setPagination(pagination);
  }

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className="page">
      <div className="page-title">
        <h1>Place Interactions</h1>
      </div>

      <div className="page-content">
        <div className="content-search">
          <Form
            name="basic"
            layout="inline"
            onFinish={onFinish}
          >
            <Form.Item
              name="dateRange"
              rules={[{ required: true, message: 'Please select date range!' }]}
            >
              <RangePicker size="large" />
            </Form.Item>

            <Form.Item>
              <Button type="default" htmlType="submit" size="large">
                Search
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="content-table">
          <Table
            rowKey={'id'}
            columns={columns}
            loading={loading}
            dataSource={content}
            pagination={pagination}
            onChange={handleTableChange}
          />
        </div>
      </div>
    </div>
  )
}

export default PlaceInteraction;
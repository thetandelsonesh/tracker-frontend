import {useState} from "react";
import {Button, DatePicker, Form, Select} from "antd";

import './style.scss'

const { RangePicker } = DatePicker;

const VehicleActivity = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState([]);

  const onFinish = (values) => {
    console.log(values)
  }

  const options = [{name: "a", value: "a"}];

  return (
    <div className="page">
      <div className="page-title">
        <h1>Vehicle Activities</h1>
      </div>

      <div className="page-content">
        <div className="content-search">
          <Form
            name="basic"
            layout="inline"
            onFinish={onFinish}
          >
            <Form.Item
              name="vehicle"
              rules={[{ required: true, message: 'Please select vehicle!' }]}
            >
              <Select
                size="large"
                placeholder={'Select Vehicle'}
              >
                {options.map((d) => <Select.Option key={d.value} value={d.value}>{d.text}</Select.Option>)}
              </Select>
            </Form.Item>

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

        </div>
      </div>
    </div>
  )
}

export default VehicleActivity;
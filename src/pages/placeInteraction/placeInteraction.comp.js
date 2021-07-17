import {useEffect, useState} from "react";
import moment from 'moment';
import {Button, DatePicker, Form, message, Select, Table} from "antd";

import './style.scss';

const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Vehicle License',
    dataIndex: 'vehicleLicense',
    key: 'vehicleLicense',
    render: (text, data) => data?.vehicle?.license
  },
  {
    title: 'Vehicle Model',
    dataIndex: 'vehicleModel',
    key: 'vehicleModel',
    render: (text, data) => data?.vehicle?.model
  },
  {
    title: 'Coordinates',
    dataIndex: 'location',
    key: 'location',
    render: (text, data) => `${data?.location?.coordinates[0]}, ${data?.location?.coordinates[1]}`
  },
  {
    title: 'Time',
    dataIndex: 'trackedAt',
    key: 'trackedAt',
    render: (text) => moment(text).format('lll')
  },
];

const PlaceInteraction = ({list, places, total, error, loading, fetchPlaceList, fetchPlaceInteraction}) => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: 50,
    showSizeChanger: false,
  });
  const [params, setParams] = useState({
    placeId: null,
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    fetchPlaceList();
  }, [])

  useEffect(() => {
    error?.code && message.error(error.msg);
  }, [error?.code]);

  useEffect(() => {
    setPagination({...pagination, total: total})
  }, [total]);

  useEffect(() => {
    (params.placeId && params.startDate && params.endDate) && onChange(pagination);
  }, [params]);

  const onChange = (pagination) => {
    const query = {
      ...params,
      page: pagination.current,
    }
    fetchPlaceInteraction(query);
    setPagination(pagination);
  }

  const onFinish = ({placeId, dateRange}) => {
    const range = dateRange.map(d => d.format('YYYY-MM-DD'));
    setParams({
      placeId: placeId,
      startDate: range[0],
      endDate: range[1],
    })
  }

  const options = places.map((p) => (<Select.Option key={p.id} value={p.id}>{p.name}</Select.Option>));

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
              name="placeId"
              rules={[{ required: true, message: 'Please select Place!' }]}
            >
              <Select size="large" placeholder={'Select Place'} allowClear>
                {options}
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
          <Table
            rowKey={'id'}
            columns={columns}
            loading={loading}
            dataSource={list}
            pagination={pagination}
            onChange={onChange}
            scroll={{ y: '55vh' }}
          />
        </div>
      </div>
    </div>
  )
}

export default PlaceInteraction;
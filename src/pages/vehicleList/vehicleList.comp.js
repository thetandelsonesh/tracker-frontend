import {useEffect} from "react";
import {message, Table} from "antd";

const columns = [
  {
    title: 'Vehicle License',
    dataIndex: 'license',
    key: 'license',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Engine No',
    dataIndex: 'engine',
    key: 'engine',
  },
  {
    title: 'Chassis No.',
    dataIndex: 'chassis',
    key: 'chassis',
  },
];

const VehicleListComp = ({loading, list, error, fetchVehicleList}) => {

  useEffect(() => {
    fetchVehicleList();
  }, []);

  useEffect(() => {
    error?.code && message.error(error.msg);
  }, [error?.code]);

  return (
    <div className="page">
      <div className="page-title">
        <h1>Vehicle List</h1>
      </div>

      <div className="page-content">

        <div className="content-table">
          <Table
            rowKey={'id'}
            columns={columns}
            loading={loading}
            dataSource={list}
            pagination={false}
          />
        </div>
      </div>
    </div>
  )
}

export default VehicleListComp;
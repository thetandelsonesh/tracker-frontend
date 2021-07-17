import {useEffect} from "react";
import {Button, DatePicker, Form, message, Select} from "antd";

import './style.scss'
const { RangePicker } = DatePicker;

let map = null;
let track = null;

const VehicleActivity = ({vehicles, list, loading, error, fetchVehicleActivity, fetchVehicleList}) => {

  useEffect(() => {
    vehicles.length === 0 && fetchVehicleList();
    initMap();
  }, []);

  useEffect(() => {
    error?.code && message.error(error.msg);
  }, [error?.code]);

  useEffect(() => {
    if(list.length){
      const coord = list.filter(({location}) => !!location).map(({location}) => {
        return {
          lat: location.coordinates[0],
          lng: location.coordinates[1],
        }
      });
      track.setPath(coord);
      track.setMap(map);
      map.setCenter(new window.google.maps.LatLng(coord[0].lat, coord[0].lng));
    }
  }, [list]);

  const onFinish = ({dateRange, vehicleId}) => {
   const formatRange = dateRange.map(d => d.format('YYYY-MM-DD'));
   const params = {
     startDate: formatRange[0],
     endDate: formatRange[1],
     vehicleId: vehicleId,
   }
   fetchVehicleActivity(params);
  }

  const initMap = () => {
    map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 0, lng: -180 },
      mapTypeId: "terrain",
    });

    track = new window.google.maps.Polyline({
      path: [],
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    track.setMap(map);
  }


  const options = vehicles.map((v) => (<Select.Option key={v.id} value={v.id}>{v.license}</Select.Option>));

  return (
    <div className="page vehicle-activity">
      <div className="page-title">
        <h1>Vehicle Activity</h1>
      </div>

      <div className="page-content">
        <div className="content-search">
          <Form
            name="basic"
            layout="inline"
            onFinish={onFinish}
          >
            <Form.Item
              name="vehicleId"
              rules={[{ required: true, message: 'Please select Vehicle!' }]}
            >
              <Select size="large" placeholder={'Select Vehicle'} allowClear>
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
              <Button loading={loading} type="default" htmlType="submit" size="large">
                Show Vehicle Activity
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="content-map" id="map"/>
      </div>
    </div>
  )
}

export default VehicleActivity;
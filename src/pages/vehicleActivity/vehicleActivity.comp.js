import {useEffect} from "react";
import {Button, DatePicker, Form, message, Select} from "antd";

import './style.scss';

const { RangePicker } = DatePicker;

let map = null;
let track = null;

const VehicleActivity = ({vehicles, polyline, loading, error, fetchVehicleActivity, fetchVehicleList, vehicleActivityReset}) => {

  useEffect(() => {
    vehicles.length === 0 && fetchVehicleList();
    initMap();
    return () => vehicleActivityReset(); //unmount
  }, []);

  useEffect(() => {
    error?.code && message.error(error.msg);
  }, [error?.code]);

  useEffect(() => {
    if(polyline){
      const polyLineObj = JSON.parse(polyline);
      const {coordinates} = polyLineObj[0].polyline
      const coor = coordinates.map((loc) => {
        return {
          lat: loc[1],
          lng: loc[0],
        }
      });
      console.log(coordinates, coordinates.length);
      track.setPath(coor);
      track.setMap(map);
      map.setCenter(new window.google.maps.LatLng(coor[0].lat, coor[0].lng));
    }
  }, [polyline]);

  const onFinish = ({dateRange, vehicleId}) => {
   const params = {
     startDate: dateRange[0].unix(),
     endDate: dateRange[1].unix(),
     vehicleId: vehicleId,
   }
   fetchVehicleActivity(params);
  }

  const initMap = () => {
    map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 15.2993, lng: 74.1240 }
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
              <RangePicker size="large" showTime/>
            </Form.Item>

            <Form.Item>
              <Button loading={loading} type="default" htmlType="submit" size="large">
                Show Vehicle Activity
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="content-map" id="content-map">
          <div id="map"/>
        </div>
      </div>
    </div>
  )
}

export default VehicleActivity;
import React from "react";
import { Select } from "antd";
import "./Courses.css";
import { Rate, Button } from "antd";
import courseImge from "../../asset/course-img/Python-for-Everybod.jpg";

const { Option } = Select;
const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
};

export default function Courses() {
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(
    cityData[provinceData[0]][0]
  );

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  return (
    <div>
      <div className="courses__filter">
        <h1>Showing 363 total results for "coding" </h1>
        <p>Filter By</p>
        <Select
          defaultValue={provinceData[0]}
          style={{ width: 120 }}
          onChange={handleProvinceChange}
        >
          {provinceData.map((province) => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
        &nbsp;
        <Select
          style={{ width: 120 }}
          value={secondCity}
          onChange={onSecondCityChange}
        >
          {cities.map((city) => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
        &nbsp;
        <Select
          style={{ width: 120 }}
          value={secondCity}
          onChange={onSecondCityChange}
        >
          {cities.map((city) => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
        &nbsp;
        <Select
          style={{ width: 120 }}
          value={secondCity}
          onChange={onSecondCityChange}
        >
          {cities.map((city) => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
        &nbsp;
        <Select
          style={{ width: 120 }}
          value={secondCity}
          onChange={onSecondCityChange}
        >
          {cities.map((city) => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
      </div>
      //TODO Generalizatioln
      <div className="coursesList">
        <img className="coursesList__img" src={courseImge} alt="python"></img>
        <div className="courseList__content">
          <h3>Python for Everybod</h3>
          <p> Descriptions / Descriptions /Descriptions /Descriptions</p>
          <Rate allowHalf defaultValue={4.5}></Rate>
          <strong> 4.5 / 5</strong> <br />
          <br />
          <br />
          <Button type="primary" shape="round">
            More Details
          </Button>
        </div>
      </div>
      <div className="coursesList">
        <img className="coursesList__img" src={courseImge} alt="python"></img>
        <div className="courseList__content">
          <h3>Python for Everybod</h3>
          <p> Descriptions / Descriptions /Descriptions /Descriptions</p>
          <Rate allowHalf defaultValue={4.5}></Rate>
          <strong> 4.5 / 5</strong> <br />
          <br />
          <br />
          <Button type="primary" shape="round">
            More Details
          </Button>
        </div>
      </div>
      <div className="coursesList">
        <img className="coursesList__img" src={courseImge} alt="python"></img>
        <div className="courseList__content">
          <h3>Python for Everybod</h3>
          <p> Descriptions / Descriptions /Descriptions /Descriptions</p>
          <Rate allowHalf defaultValue={4.5}></Rate>
          <strong> 4.5 / 5</strong> <br />
          <br />
          <br />
          <Button type="primary" shape="round">
            More Details
          </Button>
        </div>
      </div>
    </div>
  );
}

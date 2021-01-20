import React from "react";
import "./CourseContent.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function CourseContent() {
  return (
    <div className="courseContent">
      <div className="courseContent__card">
        <p>
          简介：本课程会依次向大家介绍中台的诞生背景、数据中台的架构以及如何进行合理得技术选型，并结合一个通用的关系型数据库同步至HDFS的工具套件实现，带大家拓展了基于Spark的多源异构数据同步工具的设计思路。
        </p>
      </div>
      <div className="courseContent__card">
        <h1>第1章 中台的前世今生</h1>
        <p>
          本章中会依次向大家介绍，中台的系统架构是如何诞生的、各类型架构的特点和存在的问题、数据中台架构是如何解决这些问题的，以及中台的演进过程，帮助大家对中台有初步得了解。
        </p>
        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

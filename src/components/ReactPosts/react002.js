import React, { Component } from "react";
import { firestore } from "../../firebase/firebase";

export default class react002 extends Component {

  componentDidMount = async () => {
    const doc = await firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .get();


    let allPostPageCount = doc.data().react002;

    firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .update({
        react002: allPostPageCount + 1
      });
  };

  render() {
    return (
      <div className="inner-container">
        <p className="title"> {this.props.postDetails.title}</p>
        <p className="date">Published on: {this.props.postDetails.date}</p>
        <p className="tags">
          Tags :
          {this.props.postDetails.tags.map((tag, index) => {
            return (
              <span key={index}>
                <span className="tag">{tag}</span>
                <span> </span>
              </span>
            );
          })}
        </p>

        <div className="img-one">
          <img src="/images/react002-01.png" width="100%" alt="" />
        </div>
        <p className="content1">
          Lately, I have been using echarts lot in my projects with react. So i
          decided to make a post on it.
        </p>
        <p className="content1">
          ECharts, an open-sourced, web-based, cross-platform framework that
          supports the rapid construction of interactive visualization. It is
          used for making charts and there is a wide range of example in their
          examples page.
        </p>
        <p className="content1">
          So in this tutorial, we will see how to use it in React. Further, i
          will also post how to use features of echarts such as making custom
          tools and many more.
        </p>
        <p className="seperator1">...</p>
        <ins
          class="adsbygoogle"
          style={{ display: "inline-block", width: "468px", height: "60px" }}
          data-ad-client="ca-pub-1381796141216228"
          data-ad-slot="9686871571"
        />
        <p className="content1">
          Step 1 —
          <br />
          First let's create a blank react project
          <br />
          create-react-app echarts-demo
          <br />
          <br />
          Step 2 —
          <br />
          Then cd into that project
          <br />
          cd echarts-demo
          <br />
          Then install dependencies by using below command —
          <br />
        </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
npm install --save echarts-for-react
npm install --save echarts`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Step 3 —
          <br />
          Open file src → App.js and replace all content of App.js with below
          code
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
import React, {
    Component
} from "react";
import ReactEcharts from "echarts-for-react";
import "./App.css";
class App extends Component {
getOption = () => ({
        title: {
            text: "JS Front End Frameworks",
            x: "center"
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            left: "left",
            data: ["React", "Angular", "Vue"]
        },
        series: [{
            name: "JS FrontEnd",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [{
                    value: 50,
                    name: "React"
                },
                {
                    value: 22,
                    name: "Angular"
                },
                {
                    value: 28,
                    name: "Vue"
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    });
render() {
return ( 
<div className = "App" >  
  <ReactEcharts option={this.getOption()} style={{ height: 300 }}/> </div>
   );
  }
 }
export default App;`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Now run your program with
          <br />
          npm start
          <br />
          and you will see a pie chart.
        </p>
        <div className="img-one">
          <img src="/images/react002-02.png" width="100%" alt="" />
        </div>
        <p className="content1">
          In getOption method , we return a object which configure our charts.
          There are lot of configuration options for each charts which can be
          found in documentation of echarts.
          <br />
          <br />
          In render method, we return Echart Component with option props with
          getOption method.
          <br />
          <br />
          We can also visit echarts examples page and click on any example which
          then opens the editor where we can see code and corresponding chart.
          We can play around with different options there and get options for
          that chart.
          <br />
          <br />
          Later we will see how to make complex charts with echarts and how to
          create custom toolbox and much more about this library.
        </p>
        <ins
          class="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-fb+5w+4e-db+86"
          data-ad-client="ca-pub-1381796141216228"
          data-ad-slot="6474438773"
        />
      </div>
    );
  }
}

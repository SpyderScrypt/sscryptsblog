import React, { Component } from "react";
import { firestore } from "../../firebase/firebase";
import { Helmet } from "react-helmet";

export default class algo002 extends Component {
  componentDidMount = async () => {
    const doc = await firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .get();

    let allPostPageCount = doc.data().algo002;

    firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .update({
        algo002: allPostPageCount + 1
      });
  };

  render() {
    return (
      <div className="inner-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Find second largest number in an array using javascript and python
          </title>
          <meta
            name="description"
            content="Find second largest number in an array using javascript and python"
          />
          <meta
            name="keywords"
            content="python,node,javascript,algorithm,node.js"
          />
        </Helmet>
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
        <p className="content1">
          This is a very common question in any job interview. There are
          multiple ways to solve it, but most of the time the interviewer do not
          want you to use pre-built functions to get the result. Today we will
          solve this problem using 4 ways.
        </p>
        <br />
        <p className="seperator1">...</p>
        <p className="content1">
          First way → 
          <br />
          Here we will reverse sort the array and return element at index 1 i.e
          second element.
          <br />
          Program in Javascript -
        </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
function secondLargest(arr) {
    let reverseSortedArray = arr.sort(function(a, b) {
      return b - a;
    });
    return reverseSortedArray[1]
  }
  
console.log(secondLargest([4, 2, 9, -10, 20, -4]));                    
                    `}
            </code>
          </pre>
        </div>
        <p className="content1">Program in py -</p>
        <br />
        <div className="code-block">
          <pre>
            <code className="code">
              {`
def secondLargest(arr):
    arr.sort(reverse=True)
    return arr[1]


print(secondLargest([4, 2, 9, -10, 20, -4]))                    
                    `}
            </code>
          </pre>
        </div>
        <p className="seperator1">...</p>

        <p className="content1">
          Second way - 
          <br />
          Here we will first find the largest number in array using the
          pre-built function. Then we remove the largest number from an array
          <br />
          Then again find the largest number in that array using a pre-built
          function.
          <br />
          Program in Javascript -
        </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
function secondLargest(arr) {
  // Find Largest number
  let largest = Math.max.apply(Math, arr);
  //   Remove Largest number
  arr.splice(arr.indexOf(largest), 1);
  // Again find largest number , which will be second largest as we removed largest number above
  let secondLargest = Math.max.apply(Math, arr);
  return secondLargest;
}

console.log(secondLargest([4, 2, 9, -10, 20, -4]));
                    `}
            </code>
          </pre>
        </div>
        <p className="content1">Program in Python -</p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
def secondLargest(arr):
    largest = max(arr)
    arr.remove(largest)
    secondLargest = max(arr)
    return secondLargest

print(secondLargest([4, 2, 9, -10, 20, -4]))
                    `}
            </code>
          </pre>
        </div>
        <p className="seperator1">...</p>

        <p className="content1">
          Third Way - 
          <br />
          Some interviewer does not want us to use pre-built functions, so we
          can use below two solutions
          <br />
          Program in Javascript -
        </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
function secondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest([4, 2, 9, -10, 20, -4]));
                    `}
            </code>
          </pre>
        </div>
        <p className="content1">Program in Python -</p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
def secondLargest(arr):
    largest = arr[0]
    secondLargest = arr[1]

    for i in range(0, len(arr)):
        if(arr[i] > largest):
            secondLargest = largest
            largest = arr[i]
        elif(arr[i] < largest and arr[i] > secondLargest):
            secondLargest = arr[i]

    return secondLargest

print(secondLargest([4, 2, 9, -10, 20, -4]))
                    `}
            </code>
          </pre>
        </div>
        <p className="seperator1">...</p>

        <p className="content1">
          Fourth Way - 
          <br />
          Here we use any sorting algorithm like bubble sort without using the
          prebuilt sort function and after sorting, return secondlast element in
          array
          <br />
          Program in Javascript -
        </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
function secondLargest(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array[array.length - 2];
}

console.log(secondLargest([4, 2, 9, -10, 20, -4]));
                    `}
            </code>
          </pre>
        </div>

        <p className="content1">Code in Python - </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
def secondLargest(array):
    for i in range(len(array)):
        for j in range(len(array) - 1 - i):
            if(array[j] > array[j + 1]):
                temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
    return array[-2]


print(secondLargest([4, 2, 9, -10, 20, -4]))
                    `}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

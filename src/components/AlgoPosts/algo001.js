import React, { Component } from "react";
import { firestore } from "../../firebase/firebase";

export default class algo001 extends Component {
  componentDidMount = async () => {
    const doc = await firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .get();

    let allPostPageCount = doc.data().algo001;
    console.log(allPostPageCount);

    firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .update({
        algo001: allPostPageCount + 1
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
        <p className="content1">
          The above qt can also be asked as below
          <br />
          Given an array, A[] and a number x, check for pair in A[] with sum as
          x
        </p>
        <br />
        <p className="content1">
          So the problem says that suppose we are given -
          <br />
          an array [6,2,4,8,10]
          <br />
          and target sum to be 12 
          <br />
          so we have to find two numbers from an array whose sum is 12
          <br />
          in the above array case, it would be [4,8][2,10]
        </p>
        <br />
        <p className="content1">
          Input → So the input will be an array and targetSum 
          <br />
          Output → The output will be an array containing a pair whose sum is
          equal to the targetSum
        </p>
        <br />
        <p className="content1">
          We are going to solve the above problem using 3 ways
        </p>
        <p className="seperator1">...</p>
        <ins
          class="adsbygoogle"
          style={{ display: "inline-block", width: "468px", height: "60px" }}
          data-ad-client="ca-pub-1381796141216228"
          data-ad-slot="9686871571"
        />
        <br />
        <p className="content1">
          First Way → 
          <br />
          The first way is easiest and you would have guessed it that we are
          going to use two for loops and compare each number in an array with
          all number in the array and check if their sum is equal to the target
          sum.
          <br />
          <br />
          Program in Javascript →
        </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
              function twoNumberSum(array, targetSum) {
                for (let i = 0; i < array.length - 1; i++) {
                  let firstNum = array[i];
                  for (let j = i + 1; j < array.length; j++) {
                    let secondNum = array[j];   

                    if (firstNum + secondNum === targetSum) {
                      return [firstNum, secondNum];
                    }
                  }
                }
                return [];
              }

              console.log(twoNumberSum([6, 5, 4, 3, 2, 1], 10));
              `}
            </code>
          </pre>
        </div>
        <br />
        <p className="content1">Program in Python →</p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
              def twoNumberSum(array, targetSum):
                for i in range(len(array) - 1):
                    firstNum = array[i]
                    for j in range(i + 1, len(array)):
                        print(array[i], array[j])
                        secondNum = array[j]
                        if(firstNum + secondNum) == targetSum:
                            return[firstNum, secondNum]
            
                return[]


              print(twoNumberSum([6, 5, 4, 3, 2, 1], 10))
              `}
            </code>
          </pre>
        </div>

        <p className="content1">
          Time Complexity - O(n^2) <br />
          Space Complexity - Space O(1)
        </p>
        <p className="seperator1">...</p>
        <ins
          class="adsbygoogle"
          style={{ display: "inline-block", width: "468px", height: "60px" }}
          data-ad-client="ca-pub-1381796141216228"
          data-ad-slot="9686871571"
        />
        <p className="content1">
          Second Way →
          <br />
        </p>
        <p className="content1">
          In the second method, we are going to use a hash table
          <br />
          <br />
          Here, we create a hash table which will have values we have traversed
          <br />
          <br />
          eg → 
          <br />
          Suppose if given array is [1,2,3,4] and targetSum is 7<br />
          at first, hashTable will be empty {}
          <br />
          we will loop through the array 
          <br />
          <br />
          {`1)The first element is "1"`} <br />
          we will check if targetSum - 1 i.e 7–1 i.e 6 is present in our
          hashTable
          <br />
          as our hashTable is empty, there is nothing in there so we will add
          "1" to hashTable
          <br />
          {`hashTable = {1 : true}`}
          <br />
          <br />
          {`2) Now we will go to next element in array i.e 2`}
          <br />
          again we will check if targetSum - 2 i.e 7–2 i.e 5 is present in our
          hashTable
          <br />
          as our hashTable does not contain 5 so we will add "2" to hashTable
          <br />
          {`hashTable = {1 : true , 2 : true}`}
          <br />
          <br />
          {`3) Now we will go to the next element, which is 3`}
          <br />
          again we will check if targetSum - 3 i.e 7–3 i.e 4 is present in our
          hashTable
          <br />
          as our hashTable does not contain 4 so we will add "3" to hashTable
          <br />
          {`hashTable = {1 : true , 2 : true, 3: true}`}
          <br />
          <br />
          {`4) Now we will go to the next element, which is 4`}
          <br />
          again we will check if targetSum - 4 i.e 7–4 i.e 3 is present in our
          hashTable
          <br />
          Our hashTable has "3" in it, so we got a pair, i.e 3 and 4
        </p>
        <br />
        <p className="content1">Program in Javascript →</p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
      function twoNumberSum(array, targetSum) {
        let hashTable = {};
      
        for (let i = 0; i < array.length; i++) {
      
          if (hashTable[targetSum - array[i]] === true) {
            return [targetSum - array[i], array[i]];
          } else {
            hashTable[array[i]] = true;
          }
        }
      }

      console.log(twoNumberSum([1,2,3,4], 7));

      `}
            </code>
          </pre>
        </div>
        <p className="content1">Program in Python →</p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
      def twoNumberSum(array, targetSum):
        hashTable = {}
    
        for num in array:
            if(targetSum - num) in hashTable:
                return [targetSum - num, num]
            else:
                hashTable[num] = True
  

      print(twoNumberSum([1,2,3,4], 7))

      `}
            </code>
          </pre>
        </div>

        <p className="content1">
          Time Complexity - O(n) <br />
          Space Complexity - Space O(n)
        </p>
        <p className="seperator1">...</p>
        <p className="content1">
          Third Way →
          <br />
          <br />
          Here we are going to use sorting logic.
          <br />
          Eg -
          <br />
          Suppose the array is [ 3 , 2 , 1 , 4 , 5] and targetElement is 9
          <br />
          First we sort the array for this to work
          <br />
          So the sorted array will be <br />
          [ 1 , 2 , 3 , 4 , 5]
          <br />
          Now we will need two pointer pointing to left and right <br />
          left pointer will point to element "1" and right pointer will point to
          element "5"
        </p>
        <div className="img-one">
          <img src="/images/algo001-01.png" width="100%" alt="" />
        </div>
        <p className="content1">
          Now lets sum elements in left and right pointer <br />
          So 1 + 5 = 6 <br />
          which is less than 9 <br />
          <b>
            If sum of elements in left and right pointer is less than targetSum
            then we move left pointer to right one step{" "}
          </b>
          <br />
          <b>
            {" "}
            And if sum of elements in left and right pointer is greater than
            targetSum we move right pointer to left one step{" "}
          </b>
          <br />
          So , we will move our left pointer to right
        </p>
        <div className="img-one">
          <img src="/images/algo001-02.png" width="100%" alt="" />
        </div>
        <p className="content1">
          Now again lets sum elements in left and right pointer <br />
          So 2 + 5 = 7 <br />
          which is less than 9 <br />
          So , we will move our left pointer to right
        </p>
        <div className="img-one">
          <img src="/images/algo001-03.png" width="100%" alt="" />
        </div>

        <p className="content1">
          Now again lets sum elements in left and right pointer <br />
          So 3 + 5 = 8 <br />
          which is less than 9 <br />
          So , we will move our left pointer to right
        </p>
        <div className="img-one">
          <img src="/images/algo001-04.png" width="100%" alt="" />
        </div>
        <p className="content1">
          Now again lets sum elements in left and right pointer <br />
          So 4 + 5 = 9 <br />
          which is equal to 9 <br />
          So we got our pair
        </p>

        <p className="content1">Program in Javascript → </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
              function twoNumberSum3(array, targetSum) {
                let sortedArr = array.sort(function(a, b) {
                  return a - b;
                });
              
                let left = 0;
                let right = sortedArr.length - 1;
              
                while (left < right) {
                    let sum = sortedArr[left] + sortedArr[right]
                  if (sum === targetSum) {
                    return [sortedArr[left], sortedArr[right]];
                  }
                  else if(sum < targetSum){
                      left+=1
                  }
                  else if(sum > targetSum){
                      right-=1
                  }
                }
              
                return[]
              
              }

              console.log(twoNumberSum([ 3 , 2 , 1 , 4 , 5], 9));

              `}
            </code>
          </pre>
        </div>

        <p className="content1">Program in Python → </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
              def twoNumberSum2(array, targetSum):
                array.sort()
                left = 0
                right = len(array) - 1
            
                while(left < right):
                    sum = array[left] + array[right]
                    if(sum == targetSum):
                        return [array[left], array[right]]
                    elif sum < targetSum:
                        left += 1
                    elif sum > targetSum:
                        right -= 1
            
                return[]
          
                print(twoNumberSum([ 3 , 2 , 1 , 4 , 5], 9))

              `}
            </code>
          </pre>
        </div>
        <p className="content1">
          Time Complexity - O(nLog(n)) <br />
          Space Complexity - Space O(1)
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

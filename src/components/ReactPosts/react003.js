import React, { Component } from "react";
import { firestore } from "../../firebase/firebase";
import { Helmet } from "react-helmet";

export default class react003 extends Component {
  componentDidMount = async () => {
    const doc = await firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .get();

    let allPostPageCount = doc.data().react003;

    firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .update({
        react003: allPostPageCount + 1
      });
  };
  render() {
    return (
      <div className="inner-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dynamic form in React without a library</title>
          <meta
            name="description"
            content="Dynamic(Reactive) form in React without a library"
          />
          <meta
            name="keywords"
            content="react,form,echarts,javascript,react.js"
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

        <div className="img-one">
          <img src="/images/react003-01.png" width="100%" alt="" />
        </div>
        <p className="content1">
          In this tutorial, we will learn how to make a reactive i.e dynamic
          input for dynamic form in react like the above image.
          <br />
          <br />
          Many times we need a form where we have to add input box or any input
          dynamically based on user input. Today we will make such input box
          where a user will add and remove input box. Also, this input box will
          support two-way data binding, so we can fully control them. Such form
          in angular is called reactive forms. But we will implement it in react
          without any external library.
        </p>
        <p className="seperator1">...</p>
        <p className="content1">
          Step 1 →
          <br />
          First, create a new react app with create-react-app and remove all
          useless code in the app.js file inside the src folder.
        </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
import React, { Component } from “react”;
class App extends Component {
 render() {
  return (
   <div>
   </div>
  );
 }
}
export default App;
`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Step 2 →
          <br />
          Now we will need a state which will store all values of all input
          fields. We will create a property in a state called values which will
          be an array which will store all values of all input field.
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
import React, { Component } from “react”;
class App extends Component {
 state = {
 values: [“”]
 };
 render() {
  return (
   <div>
   </div>
  );
 }
}
export default App;`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Step 3 →
          <br />
          Now let's create input field, buttons to add, remove input field and
          submit a form.
        </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
import React, { Component } from "react";
class App extends Component {
state = {
values: [""]
};
render() {
return (
<div>
   {this.state.values.map((data, index) => {
   return (
   <div>
      <input
         type="text"
         value={this.state.values[index]}
         />
      <button>
      Remove
      </button>
   </div>
   );
   })}
   <br />
   <button>Add</button>
   <input type="submit" value="submit" />
</div>
);
}
}
export default App;`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Here we use a map to create input field and remove button associated
          to that input field based on state’s values property i.e
          this.state.values.
          <br />
          <br />
          Above we are creating Add and submit button outside map as they are
          not associated with any particular input field.
          <br />
          <br />
          Step 4 →
          <br />
          Now we will add two-way binding to our input field and print values
          inside the input field below form.
          <br />
          To do that first add onChange event to an input field.
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
<input
type=”text”
value={this.state.values[index]}
onChange={e => {
 this.changeHandler(e, index);
}}
/>`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Here we are passing event and index to changeHandler as we need an
          index of the input field to which we want to change the value.
          <br />
          Now create a method called changeHandler as below
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
changeHandler = (e, index) => {
    let values = […this.state.values]; 
    values[index] = e.target.value;
    this.setState({
     values: values 
    });
   };`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Here we accept index which we are passing through the input field.
          <br />
          <br />
          Inside a method, we first copy the state’s values inside a variable
          called values.
          <br />
          <br />
          Then we change the value of the input field whose index is passed to
          the user’s input.
          <br />
          <br />
          Then we set state to new values variable which contains updated user
          input value.
          <br />
          <br />
          Now we will print user value below submit button using map
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
<button>Add</button>
<input type=”submit” value=”submit” />
{this.state.values.map(value => {
return <p>{value}</p>;
})}`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Complete code until now →<br />
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
import React, { Component } from "react";
class App extends Component {
  state = {
    values: [""]
  };
  changeHandler = (e, index) => {
    let values = [...this.state.values];
    values[index] = e.target.value;
    this.setState({
      values: values
    });
  };
  render() {
    return (
      <div>
        {this.state.values.map((data, index) => {
          return (
            <div>
              <input
                type="text"
                value={this.state.values[index]}
                onChange={e => {
                  this.changeHandler(e, index);
                }}
              />
              <button>Remove</button>
            </div>
          );
        })}
        <br />
        <button>Add</button>
        <input type="submit" value="submit" />
        {this.state.values.map(value => {
          return;
          <p>{value}</p>;
        })}
      </div>
    );
  }
}
export default App;
`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Step 5 →
          <br />
          <br />
          We have now simple two-way bounded input filed.
          <br />
          Now let's make that add and remove button work
          <br />
          Attach an onClick event to add and remove buttons
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
<div>
<input
  type="text"
  value={this.state.values[index]}
  onChange={e => {
    this.changeHandler(e, index);
  }}
/>
<button
  onClick={e => {
    this.removeHandler(e, index);
  }}
>
  Remove
</button>
</div>
);
})}
<br />
<button onClick={this.addHandler}>Add</button>
`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Now create an addHandler method like below
          <br />
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
addHandler = () => {
    let values = [...this.state.values];
    values.push("");
    this.setState({
     values: values
    });
   };
`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Here we first copy all state’s value to a variable called values.
          <br />
          <br />
          Then we push an empty string in that array and set state to new values
          variable.
          <br />
          <br />
          Now try clicking on that add button, it should work.
          <br />
          <b />
          Now create a method called removeHandler like below —
          <br />
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
removeHandler = (e, index) => {
    let values = [...this.state.values];
    values.splice(index, 1);
    this.setState({
     values: values
    });
   };
`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Here we take the index of the input field as we want to remove only
          that input field which user has selected.
          <br />
          <br />
          create a variable called values which will contain all the state
          values.
          <br />
          <br />
          Then remove the value from an array using splice method and pass it
          index and 1 as we want to remove one element from the array starting
          from index
          <br />
          <br />
          Then use setState to set values as new values variable
          <br />
          Below is a complete code →
          <br />
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
import React, { Component } from "react";
class App extends Component {
  state = {
    values: [""]
  };
changeHandler = (e, index) => {
    let values = [...this.state.values];
    values[index] = e.target.value;
    this.setState({
      values: values
    });
  };
addHandler = () => {
    let values = [...this.state.values];
    values.push("");
    this.setState({
      values: values
    });
  };
removeHandler = (e, index) => {
    let values = [...this.state.values];
    values.splice(index, 1);
    this.setState({
      values: values
    });
  };
render() {
    return (
      <div>
        {this.state.values.map((data, index) => {
          return (
            <div>
              <input
                type="text"
                value={this.state.values[index]}
                onChange={e => {
                  this.changeHandler(e, index);
                }}
              />
              <button
                onClick={e => {
                  this.removeHandler(e, index);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
<br />
        <button onClick={this.addHandler}>Add</button>
        <input type="submit" value="submit" />
        {this.state.values.map(value => {
          return <p>{value}</p>;
        })}
      </div>
    );
  }
}
export default App;
`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Hope you have learned how to make dynamic input field and can proceed
          to make a complete dynamic form with multiple dynamic input types.
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

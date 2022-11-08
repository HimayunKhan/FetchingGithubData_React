import React, { useContext, useState } from "react";
import { AppContext } from "../Context/ContextApi";

export default function GitHub() {
  const { state, dispatch } = useContext(AppContext);
  const [text, setText] = useState("");

  const fetchUser = async (query) => {
    let url = `https://api.github.com/search/users?q=${query}`;

    try {
      dispatch({ type: "loading" });

      let data = await fetch(url);
      data = await data.json();
      console.log(data.items);
      dispatch({ ...state, type: "Success", payload: data.items });
      setText("")
    } catch (err) {
      dispatch({ type: "Error" });
      console.log(err);
    }
  };

  return (
    <div>
      <div>

      <header><h1>Fetching-Githubdata-using-ReducerHOOk and ContextApi</h1></header>
        <div><input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search here your GitHub UserName..."
        />
        </div>
        <div>
        <button  onClick={() => fetchUser(text)}>
          Search
        </button>
        </div>
      </div>
      <div className="note1">
        {state.data?.map((item) => (
          <div className="note" key={item.login}>
            <h1>{item.login}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

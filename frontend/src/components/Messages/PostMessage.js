import React, { useState } from "react";
import {toastMessagePosted} from "../../_utils/toasts/messages"
import 'react-toastify/dist/ReactToastify.css';


const PostMessage = ({ onPost }) => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  async function SendData(e){
    e.preventDefault();
    console.log(titleValue, contentValue);
    //useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        title: titleValue,
        content: contentValue,
      }),
    };
    await fetch("http://localhost:3000/api/messages/new", requestOptions)
      .then((response) => {
        //console.log(response.status);
        if (response.status !== 201) {
          // Actualisation?
          // setMessageSent(false);
        } else {
          // setMessageSent(true);
          onPost();
          setTitleValue("");
          setContentValue("");
          toastMessagePosted();
          // console.log(messageSent);
        }
      })

      //.then((response) => response.json())
      .catch((error) => console.log(error));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
  };

  return (
    
    <section className="row justify-content-center mb-5">
      <form className="col-11" onSubmit={SendData}>
        <div className="card">
          <div className="card-header ">Publish an article</div>
          <div className="card-body">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="posts"
                
              >
                <div className="form-group">
                  <label className="sr-only" htmlFor="title">
                    title
                  </label>
                  <input
                  id="title"
                  required
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder="Title?"
                    value={titleValue}
                    onChange={(event) => setTitleValue(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="message">
                    post
                  </label>
                  {/* <ArticleEditor /> */}
                  <textarea
                    className="form-control"
                    required
                    id="message"
                    rows="3"
                    placeholder="Content?"
                    value={contentValue}
                    onChange={(event) => setContentValue(event.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="btn-toolbar justify-content-between">
              <div className="btn-group">
                <button type="submit" className="btn btn-primary">
                  share
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PostMessage;

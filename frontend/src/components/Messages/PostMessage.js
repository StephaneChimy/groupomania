import React, { useState } from "react";
import { toastMessagePosted } from "../../_utils/toasts/messages";
import "react-toastify/dist/ReactToastify.css";
import { REGEX } from "../../_utils/auth/auth.functions";

const PostMessage = ({ onPost }) => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  async function SendData(e) {
    e.preventDefault();
    console.log(titleValue, contentValue);

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
        if (response.status !== 201) {

        } else {
          onPost();
          setTitleValue("");
          setContentValue("");
          toastMessagePosted();
        }
      })

      .catch((error) => console.log(error));

  }

  return (
    <section className="row justify-content-center mb-5">
      <form className="col-11" onSubmit={SendData}>
        <div className="card">
          <div className="card-header ">Publish an article</div>
          <div className="card-body">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="posts">
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
                    pattern={REGEX.TITLE_REGEX}
                    title="Character a à Z"
                    onChange={(event) => setTitleValue(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="message">
                    post
                  </label>
                  <textarea
                    className="form-control"
                    required
                    id="message"
                    rows="3"
                    placeholder="Minimum 5 character"
                    value={contentValue}
                    minLength="5"
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

import globalFunctions from "../../_utils/_functions";
import { deleteOneMessage } from "../../_utils/messages/messages.functions";

const Message = ({ ...message }) => {

  const onClickDeleteMessage = (e) => {
    e.preventDefault();
    if(window.confirm("Are you sure you want to delete this message?")){
      deleteOneMessage(message.id) 
      message.onErase() 
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="justify-content-between align-items-center">
          <div className="justify-content-between align-items-center">
            <div className="ml-2">
              <a className="card-link" href={"/account/" + message.User.id}>
                <div className="h5 m-0">@{message.User.name}</div>
                <div className="h7 text-muted">{message.User.name} {message.User.surname}</div>

              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="text-muted h7 mb-2">
          {" "}
          <i className="fa fa-clock-o" />
          {" " + globalFunctions.convertDateForHuman(message.createdAt)}
        </div>
        <a className="card-link" href={"/messages/" + message.id}>
          <h2 className="h5 card-title">{message.title}</h2>
        </a>

        {message.teaserMessage ? (
          <p className="card-text text-teaser overflow-hidden">
            {message.content}
          </p>
        ) : (
          <p className="card-text">{message.content}</p>
        )}
      </div>
      <div className="card-footer">
        {/* <a href="#" className="card-link">
            <i className="fa fa-gittip"></i> Like
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-comment"></i> Comment
          </a> */}
        {/*
          <a href="#" className="card-link">
            <i className="fa fa-mail-forward"></i> Share
          </a> */}

        {message.canEdit === true && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            href="#"
            className="card-link text-danger"
            onClick={onClickDeleteMessage}
          >
            <i className="fa fa-ban"></i> Erase
          </a>
        )}
      </div>
    </div>
  );
};

export default Message;

import { useContext, useEffect, useState } from "react";
import FeedbackContext from "./context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addFeedback, FeedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    setBtnDisabled(false);
    setText(FeedbackEdit.item.text);
    setRating(FeedbackEdit.item.rating);
  }, [FeedbackEdit]);
  const handletextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("text must be less tahn 10 ");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedbackForm = {
        text,
        rating,
      };
      if (FeedbackEdit.edit) {
        updateFeedback(FeedbackEdit.item.id, newFeedbackForm);
      } else {
        addFeedback(newFeedbackForm);
      }
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would rate with our services !</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handletextChange}
            value={text}
            type="text"
            placeholder="write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            SEND
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;

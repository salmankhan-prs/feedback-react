import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackStats = ({}) => {
  const { feedback } = useContext(FeedbackContext);
  let AverageRatings =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;
  AverageRatings = AverageRatings.toFixed(1).replace(/[.,]0$/, "");
  console.log(feedback.length);
  return (
    <div className="feedback-stats">
      <h2> reviews ({feedback.length}) </h2>
      <h4>Average Ratings :{isNaN(AverageRatings) ? 0 : AverageRatings}</h4>
    </div>
  );
};

export default FeedbackStats;

import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "./context/FeedbackContext";
const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  console.log(feedback);
  //   if (!feedback || feedback.length == 0) {
  //     return <p>NO feedback !</p>;
  //   }

  return (
    <div>
      {feedback.length == 0 && <p>No FeedbackData</p>}
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;

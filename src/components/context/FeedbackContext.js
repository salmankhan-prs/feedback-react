import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "something r5amndom in mid ",
      rating: 9,
    },
  ]);
  const [FeedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const updateFeedback = (id, feData) => {
    setFeedback(
      feedback.map((item) => (item.id == id ? { ...item, ...feData } : item))
    );
  };
  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = feedback.length + 1;
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };
  const editedFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        addFeedback,
        editedFeedback,
        FeedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;

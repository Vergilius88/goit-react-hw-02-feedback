import statisticsBlockStyles from "./statisticsBlockStyles";

const { ListUl, ListItem } = statisticsBlockStyles;

const StatisticsBlock = ({ good, bad, neutral, total, positive }) => {
  
    const isShowFeedbacks = total > 0;

  return (
    <>
      {total === 0 && <h3>No feedback given</h3>}

      {isShowFeedbacks && (
        <ListUl>
          <ListItem>Good:{good}</ListItem>
          <ListItem>Neutral:{neutral}</ListItem>
          <ListItem>Bad:{bad}</ListItem>
          <ListItem>Total:{total}</ListItem>
          <ListItem>
            Positive Feedbacks:{positive === Infinity ? 100 : positive}%
          </ListItem>
        </ListUl>
      )}
    </>
  );
};

export default StatisticsBlock
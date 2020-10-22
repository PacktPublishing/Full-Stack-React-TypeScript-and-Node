import moment from "moment";

const StandardDateTimeFormat = "MM/DD/YY";
const getTimePastIfLessThanDay = (compTime: Date | null): string => {
  if (!compTime) return "";

  const comparisonMoment = moment(compTime);
  const now = moment();
  const duration = moment.duration(now.diff(comparisonMoment));
  const minutes = duration.asMinutes();

  if (minutes > 60) {
    const hours = duration.asHours();
    if (hours > 24) {
      return comparisonMoment.format(StandardDateTimeFormat);
    }
    return Math.round(hours) + "h ago";
  }
  return Math.round(minutes) + "m ago";
};

export { getTimePastIfLessThanDay };

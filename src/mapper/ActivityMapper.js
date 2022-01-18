import Activity from "../model/activity";

export default class ActivityMapper {
  static convertToUser(data) {
    const formatSessions = data.data.sessions.map((session, index) => {
      const { day, ...other } = session;
      return {
        day: index + 1,
        ...other,
      };
    });
    return new Activity(data.data.userId, formatSessions);
  }
}

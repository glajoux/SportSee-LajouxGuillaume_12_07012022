import Activity from "../model/activity";

/**
 * class to format activity data
 */
export default class ActivityMapper {
  /**
   *
   * @param {object} data data get from API
   * @returns {object} return new instance of Acitity as an object
   */
  static convertToUser(data) {
    const formatActivitySessions = data.data.sessions.map((session, index) => {
      const { day, ...other } = session;
      return {
        day: index + 1,
        ...other,
      };
    });
    return new Activity(data.data.userId, formatActivitySessions);
  }
}

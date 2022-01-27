import AverageSessions from "../model/averageSessions";

/**
 * class to format average session data
 */
export default class AverageSessionsMapper {
  /**
   *
   * @param {object} data data get from API
   * @returns {object} return new instance of AverageSession as an object
   */
  static convertToUser(data) {
    const formatAverageSessions = data.data.sessions.map((session, index) => {
      const jour = ["L", "M", "M", "J", "V", "S", "D"];
      const { day, ...others } = session;
      return {
        day: jour[index],
        ...others,
      };
    });

    return new AverageSessions(data.data.userId, formatAverageSessions);
  }
}

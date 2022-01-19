import AverageSessions from "../model/averageSessions";

export default class AverageSessionsMapper {
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

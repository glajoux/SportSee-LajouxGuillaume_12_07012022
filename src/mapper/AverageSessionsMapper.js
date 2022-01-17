import AverageSessions from "../model/averageSessions";

export default class AverageSessionsMapper {
  static convertToUser(data) {
    return new AverageSessions(data.data.userId, data.data.sessions);
  }
}

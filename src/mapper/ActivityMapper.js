import Activity from "../model/activity";

export default class ActivityMapper {
  static convertToUser(data) {
    return new Activity(data.data.userId, data.data.sessions);
  }
}

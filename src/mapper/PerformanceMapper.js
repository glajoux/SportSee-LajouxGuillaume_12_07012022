import Performance from "../model/performance";

export default class PerformanceMapper {
  static convertToUser(data) {
    return new Performance(data.data.userId, data.data.kind, data.data.data);
  }
}

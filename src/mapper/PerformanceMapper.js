import Performance from "../model/performance";

export default class PerformanceMapper {
  static convertToUser(data) {
    const kindArray = Object.values(data.data.kind);
    const formatPerformance = data.data.data.map((session, index) => {
      const { kind, ...others } = session;
      return {
        kind: kindArray[index],
        ...others,
      };
    });
    return new Performance(data.data.userId, data.data.kind, formatPerformance);
  }
}

import Performance from "../model/performance";

/**
 * class to format performance data
 */
export default class PerformanceMapper {
  /**
   *
   * @param {object} data data get from API
   * @returns {object} return new instance of performance as an object
   */
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

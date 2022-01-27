import User from "../model/user";

/**
 * class to format user data
 */
export default class UserMapper {
  /**
   *
   * @param {object} data data get from API
   * @returns {object} return new instance of user as an object
   */
  static convertToUser(data) {
    const score = () => {
      if (data.data.score != undefined) {
        return [
          {
            score: data.data.score,
            firstName: data.data.userInfos.firstName,
          },
        ];
      } else {
        return [
          {
            score: data.data.todayScore,
            firstName: data.data.userInfos.firstName,
          },
        ];
      }
    };
    return new User(
      data.data.id,
      data.data.userInfos.firstName,
      data.data.userInfos.lastName,
      data.data.userInfos.age,
      data.data.keyData.calorieCount,
      data.data.keyData.proteinCount,
      data.data.keyData.carbohydrateCount,
      data.data.keyData.lipidCount,
      data.data.keyData,
      score()
    );
  }
}

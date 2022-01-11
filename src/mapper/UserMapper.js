import User from "../model/user";

export default class UserMapper {
  static convertToUser(data) {
    return new User(
      data.id,
      data.userInfos.firstName,
      data.userInfos.lastName,
      data.userInfos.age,
      data.todayScore,
      data.keyData.calorieCount,
      data.keyData.proteinCount,
      data.keyData.carbohydrateCount,
      data.keyData.lipidCount
    );
  }
}

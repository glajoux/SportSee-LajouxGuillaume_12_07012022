import User from "../model/user";

export default class UserMapper {
  static convertToUser(data) {
    return new User(
      data.data.id,
      data.data.userInfos.firstName,
      data.data.userInfos.lastName,
      data.data.userInfos.age,
      data.data.todayScore,
      data.data.keyData.calorieCount,
      data.data.keyData.proteinCount,
      data.data.keyData.carbohydrateCount,
      data.data.keyData.lipidCount,
      data.data.keyData
    );
  }
}

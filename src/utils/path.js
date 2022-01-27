const pathApi = {
  url: {
    infoUser(userId) {
      return `http://localhost:3000/user/${userId}`;
    },
    userAverageSession(userId) {
      return `http://localhost:3000/user/${userId}/average-sessions`;
    },
    userActivity(userId) {
      return `http://localhost:3000/user/${userId}/activity`;
    },
    userPerformance(userId) {
      return `http://localhost:3000/user/${userId}/performance`;
    },
  },
};

const pathMocked = {
  url: {
    infoUser(userId) {
      return `../../data/${userId}/userInfo.json`;
    },
    userAverageSession(userId) {
      return `../../data/${userId}/userAverageSessions.json`;
    },
    userActivity(userId) {
      return `../../data/${userId}/userActivity.json`;
    },
    userPerformance(userId) {
      return `../../data/${userId}/userPerformance.json`;
    },
  },
};

/**
 * when deploying the API, change the path to the corresponding url
 * @type { string }
 */
export const path = pathApi;

const { logRoles } = require("@testing-library/react");
const axios = require("axios");
const {
  authReducer,
  setUser,
  logout,
} = require("../store/reducers/authReducer");

jest.mock("axios");

describe("Auth is success", () => {
  let response;
  let data;
  beforeEach(() => {
    data = {
      isAuth: false,
      currentUser: {},
    };
    response = {
      isAuth: true,
      currentUser: {},
    };
  });

  let newData;

  test("Auth is a success then success action is dispatched", async () => {
    axios.get.mockResolvedValue(response);
    newData = await authReducer(data.currentUser, setUser(response.isAuth));
    expect(newData.isAuth).toBeTruthy();
  });
});

describe("Auth is success", () => {
  let response;
  let data;
  beforeEach(() => {
    data = {
      isAuth: false,
      currentUser: {},
    };
    response = {
      isAuth: false,
    };
  });

  let newData;

  test("When auth is failed then error/fail action is dispatched", async () => {
    axios.get.mockRejectedValue(response);
    newData = await authReducer(data, logout());
    expect(newData.isAuth).toBeFalsy();
  });
});

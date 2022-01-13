import apiInstance from "./apiInstance";

class APIServices {
  async fetchPosts() {
    return await apiInstance.get(
      "/apod?api_key=SpoFFerO4vUHR3U2itT5LPScFvoeUWfLJ0HblcqH"
    );
  }
}

const instance = new APIServices();

export default instance;

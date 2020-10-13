import api from "../api";

const startSession = async ({ email, password }) => {
  const response = await api({
    method: "POST",
    url: "sessions",
    data: {
      email,
      password
    }
  });

  const { data } = await response;

  if(data.user && data.token) {
    return {
      user_id: data.user.id,
      user_name: data.user.name,
      user_email: data.user.email,
      user_created_at: data.user.createdAt,
      user_updated_at: data.user.updatedAt,
      user_token: data.token
    };
  } else {
    return {
      message: data.message
    };
  }
};

export default startSession;
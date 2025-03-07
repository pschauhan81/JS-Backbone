import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "ok",
  });
});

export {
     registerUser,
    }; 

    // http://localhost:8000/api/v1/users/register
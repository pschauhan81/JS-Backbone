import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js" 
import {uploadOnCloudinary} from "../utils/cloudinary.js"
const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend   
  // validation - not empty
  // check user if already existed: username , email
  // check for image, check for avatar
  // upload them to cloudinary, avatar
  // create user object -create entery in db 
  //remove password and refresh token field from response
  // check user creation
  //return response

  const {fullname, email , username, password } = req.body
  console.log("email:- ",email)
  if(
    [fullname, email, username, password].some((field)=>field?.trim()==="")
  ){
    throw new ApiError(400, "All fields are required")
  }

  const existedUser = User.findOne({
    $or:[{ username }, { email }]
  })

  if(existedUser){
    throw new ApiError(409, "User with email or username already exists ")
  }


  const avatarLocalPath = req.files?.avatar[0]?.path
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if(!avatarLocalPath){
    throw new ApiError(400, "Avatar file is required")
  }

  const avatar = await  uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if(!avatar){
    throw new ApiError(400, "Avatar file is required")
  }
  
  User.create({
    fullname, 
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email,
    password,
    username:username.toLowerCase() ,

  })

}); 

export {
     registerUser,
    }; 

    // http://localhost:8000/api/v1/users/register
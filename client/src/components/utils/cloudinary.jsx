import axios from "axios";

export const upload = async (file) =>{
const formData = new FormData();
formData.append("file",file);
formData.append("upload_preset","josvvm8e");
const {data} = await axios.post("https://api.cloudinary.com/v1_1/dcp2ihcns/image/upload", formData);
return {publicId: data?.public_id, url:data?.secure_url}
}
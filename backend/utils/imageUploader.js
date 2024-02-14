const cloudinary=require("cloudinary").v2;

exports.uploadImageToCloudinary=async(file,folder,height,quality)=>{
    if (!file || !file.tempFilePath) {
        throw new Error("File object or tempFilePath is undefined");
    }
    const options={folder};
    if(height){
        options.height=height;
    }
    if(quality){
        options.quality=quality;
    }
    options.resource_type="auto";

    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

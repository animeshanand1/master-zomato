import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAWPU7DWEXKOMCXUNB",
  secretAccessKey:"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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};
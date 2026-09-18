const a=require('./k12-social-original-a');
const b=require('./k12-social-original-b');
module.exports=(req,res)=>{
  const img=Buffer.from(a+b,'base64');
  res.setHeader('Content-Type','image/jpeg');
  res.setHeader('Content-Length',String(img.length));
  res.setHeader('Cache-Control','public, max-age=0, s-maxage=31536000, immutable');
  res.status(200).send(img);
};

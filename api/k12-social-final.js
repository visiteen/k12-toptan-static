const p1=require('./k12-card-p1');
const p2=require('./k12-card-p2');
const p3=require('./k12-card-p3');
const p4=require('./k12-card-p4');
const p5=require('./k12-card-p5');
module.exports=(req,res)=>{
  const img=Buffer.from(p1+p2+p3+p4+p5,'base64');
  res.setHeader('Content-Type','image/jpeg');
  res.setHeader('Content-Length',String(img.length));
  res.setHeader('Cache-Control','public, max-age=0, s-maxage=31536000, immutable');
  res.status(200).send(img);
};

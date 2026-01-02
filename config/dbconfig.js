

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "cms",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
 
// module.exports = {
//     HOST: "mysql://root:yDsHOQEClRfwcBZPEmqMPskasrlIElMO@trolley.proxy.rlwy.net:50516/railway",
//     USER: "root",
//     PASSWORD: "yDsHOQEClRfwcBZPEmqMPskasrlIElMO",
//     DB: "railway",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   };
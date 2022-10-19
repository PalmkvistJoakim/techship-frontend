// import { getCategories } from "./fakeCategoryService";

const appplicants = [
  {
    _id: "5b21ca3eeb7f6fbccd471835",
    name: "Joakim Palmkvist",
    age: 24,
    email: "Jocke@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 40",
    notis: "Han är driven",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd461815",
    name: "Embla williamsson ",
    age: 25,
    email: "embla@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 41",
    notis: "Hon är utvecklare",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd478815",
    name: "Janken Matene",
    age: 26,
    email: "janken-matene@hotmail.com",
    phone: "0739367846",
    adress: "Redaregatan 42",
    notis: "Han är duktig",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd37181",
    name: "Nazih Hazime",
    age: 27,
    email: "Nazih@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 43",
    notis: "Han är trött",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd4355",
    name: "Aladin El-khalil",
    age: 28,
    email: "Aladin@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 44",
    notis: "Han är senior",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd23615",
    name: "Aliya Sabir",
    age: 29,
    email: "Aliya@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 45",
    notis: "Hon är entreprnör",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd235135",
    name: "Joakim Palmkvist",
    age: 24,
    email: "Jocke@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 40",
    notis: "Han är driven",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd46125135",
    name: "Embla williamsson ",
    age: 25,
    email: "embla@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 41",
    notis: "Hon är utvecklare",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd44587",
    name: "Janken Matene",
    age: 26,
    email: "janken-matene@hotmail.com",
    phone: "0739367846",
    adress: "Redaregatan 42",
    notis: "Han är duktig",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd3324734",
    name: "Nazih Hazime",
    age: 27,
    email: "Nazih@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 43",
    notis: "Han är trött",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd423462",
    name: "Aladin El-khalil",
    age: 28,
    email: "Aladin@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 44",
    notis: "Han är senior",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd423511",
    name: "Aliya Sabir",
    age: 29,
    email: "Aliya@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 45",
    notis: "Hon är entreprnör",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd41124",
    name: "Joakim Palmkvist",
    age: 24,
    email: "Jocke@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 40",
    notis: "Han är driven",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd46909",
    name: "Embla williamsson ",
    age: 25,
    email: "embla@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 41",
    notis: "Hon är utvecklare",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd475685",
    name: "Janken Matene",
    age: 26,
    email: "Janken@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 42",
    notis: "Han är duktig",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd37465843",
    name: "Nazih Hazime",
    age: 27,
    email: "Nazih@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 43",
    notis: "Han är trött",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd473463",
    name: "Aladin El-khalil",
    age: 28,
    email: "Aladin@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 44",
    notis: "Han är senior",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    _id: "5b21ca3eeb7f6fbccd4357388",
    name: "Aliya Sabir",
    age: 29,
    email: "Aliya@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 45",
    notis: "Hon är entreprnör",
    stage: "APPLIED",
    description: "är taggad för den här program , hoppas jag hör av er",
  },
];

export function getAppplicants() {
  return appplicants;
}

export function getAppplicant(id: string) {
  return appplicants.find((appplicant) => appplicant._id === id);
}

// export function saveFood(food) {
//   let foodInDb = foods.find((f) => f._id === food._id) || {};
//   foodInDb.name = food.name;
//   foodInDb.category = getCategories().find(
//     (category) => category._id === food.categoryId
//   );
//   foodInDb.numberInStock = food.numberInStock;
//   foodInDb.price = food.price;

//   if (!foodInDb._id) {
//     foodInDb._id = Date.now();
//     foods.push(foodInDb);
//   }

//   return foodInDb;
// }

// export function deleteAppplicant(id) {
//   let appplicantInDb = appplicants.find((appplicant) => appplicant._id === id);
//   appplicants.splice(appplicants.indexOf(foodInDb), 1);
//   return foodInDb;
// }

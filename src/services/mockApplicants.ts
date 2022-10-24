import { getStage } from "./mockStage";

const appplicants = [
  {
    answer_id: "5b21ca3eeb7f6fbccd471835",
    name: "Joakim Palmkvist",
    age: 24,
    email: "Jocke@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 40",
    created_at: "2022-10-23 14:00:11",
    notis: "Han är driven",
    stage: { _id: "5b21ca3eeb7f6fbccd471818", name: "Alla Ansökningar" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd461815",
    name: "Embla williamsson ",
    age: 25,
    email: "embla@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 41",
    created_at: "2022-10-19 18:06:41",
    notis: "Hon är utvecklare",
    stage: { _id: "5b21ca3eeb7f6fbccd471814", name: "Antagna" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd478815",
    name: "Janken Matene",
    age: 26,
    email: "janken-matene@hotmail.com",
    phone: "0739367846",
    adress: "Redaregatan 42",
    created_at: "2022-10-17 12:45:34",
    notis: "Han är duktig",
    stage: { _id: "5b21ca3eeb7f6fbccd471820", name: "Ej Antagna" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd37181",
    name: "Nazih Hazime",
    age: 27,
    email: "Nazih@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 43",
    created_at: "2022-09-04 08:37:01",
    notis: "Han är trött",
    stage: { _id: "5b21ca3eeb7f6fbccd471822", name: "Techship Programme" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd4355",
    name: "Aladin El-khalil",
    age: 28,
    email: "Aladin@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 44",
    created_at: "2022-09-27 13:39:22",
    notis: "Han är senior",
    stage: { _id: "5b21ca3eeb7f6fbccd471826", name: "Techship School" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd23615",
    name: "Aliya Sabir",
    age: 29,
    email: "Aliya@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 45",
    created_at: "2022-09-30 20:04:23",
    notis: "Hon är entreprnör",
    stage: { _id: "5b21ca3eeb7f6fbccd471816", name: "Sparade Profiler" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd471835",
    name: "Joakim Palmkvist",
    age: 24,
    email: "Jocke@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 40",
    created_at: "2022-10-23 14:00:11",
    notis: "Han är driven",
    stage: { _id: "5b21ca3eeb7f6fbccd471818", name: "Alla Ansökningar" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd461815",
    name: "Embla williamsson ",
    age: 25,
    email: "embla@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 41",
    created_at: "2022-10-19 18:06:41",
    notis: "Hon är utvecklare",
    stage: { _id: "5b21ca3eeb7f6fbccd471814", name: "Antagna" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd478815",
    name: "Janken Matene",
    age: 26,
    email: "janken-matene@hotmail.com",
    phone: "0739367846",
    adress: "Redaregatan 42",
    created_at: "2022-10-17 12:45:34",
    notis: "Han är duktig",
    stage: { _id: "5b21ca3eeb7f6fbccd471820", name: "Ej Antagna" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd37181",
    name: "Nazih Hazime",
    age: 27,
    email: "Nazih@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 43",
    created_at: "2022-09-04 08:37:01",
    notis: "Han är trött",
    stage: { _id: "5b21ca3eeb7f6fbccd471822", name: "Techship Programme" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd4355",
    name: "Aladin El-khalil",
    age: 28,
    email: "Aladin@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 44",
    created_at: "2022-09-27 13:39:22",
    notis: "Han är senior",
    stage: { _id: "5b21ca3eeb7f6fbccd471826", name: "Techship School" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd23615",
    name: "Aliya Sabir",
    age: 29,
    email: "Aliya@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 45",
    created_at: "2022-09-30 20:04:23",
    notis: "Hon är entreprnör",
    stage: { _id: "5b21ca3eeb7f6fbccd471816", name: "Sparade Profiler" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd471835",
    name: "Joakim Palmkvist",
    age: 24,
    email: "Jocke@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 40",
    created_at: "2022-10-23 14:00:11",
    notis: "Han är driven",
    stage: { _id: "5b21ca3eeb7f6fbccd471818", name: "Alla Ansökningar" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd461815",
    name: "Embla williamsson ",
    age: 25,
    email: "embla@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 41",
    created_at: "2022-10-19 18:06:41",
    notis: "Hon är utvecklare",
    stage: { _id: "5b21ca3eeb7f6fbccd471814", name: "Antagna" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd478815",
    name: "Janken Matene",
    age: 26,
    email: "janken-matene@hotmail.com",
    phone: "0739367846",
    adress: "Redaregatan 42",
    created_at: "2022-10-17 12:45:34",
    notis: "Han är duktig",
    stage: { _id: "5b21ca3eeb7f6fbccd471820", name: "Ej Antagna" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd37181",
    name: "Nazih Hazime",
    age: 27,
    email: "Nazih@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 43",
    created_at: "2022-09-04 08:37:01",
    notis: "Han är trött",
    stage: { _id: "5b21ca3eeb7f6fbccd471822", name: "Techship Programme" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd4355",
    name: "Aladin El-khalil",
    age: 28,
    email: "Aladin@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 44",
    created_at: "2022-09-27 13:39:22",
    notis: "Han är senior",
    stage: { _id: "5b21ca3eeb7f6fbccd471826", name: "Techship School" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
  {
    answer_id: "5b21ca3eeb7f6fbccd23615",
    name: "Aliya Sabir",
    age: 29,
    email: "Aliya@gmail.com",
    phone: "0739367846",
    adress: "Redaregatan 45",
    created_at: "2022-09-30 20:04:23",
    notis: "Hon är entreprnör",
    stage: { _id: "5b21ca3eeb7f6fbccd471816", name: "Sparade Profiler" },
    description: "är taggad för den här program , hoppas jag hör av er",
  },
];

export function getAppplicants() {
  return appplicants;
}

export function getAppplicant(id: string) {
  return appplicants.find((appplicant) => appplicant.answer_id === id);
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
